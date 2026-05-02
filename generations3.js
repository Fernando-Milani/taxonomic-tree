import fs from "fs";

const BASE_URL = "https://api.gbif.org/v1/species";
const OUTPUT_FILE = "tree.json";
const PROGRESS_FILE = "progress.json";
const DELAY = 100;

// =====================
// UTILS
// =====================
function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function safeFetch(url) {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.log("❌ HTTP erro:", res.status);
            return null;
        }

        const text = await res.text();

        try {
            return JSON.parse(text);
        } catch {
            console.log("❌ Não é JSON:", text.slice(0, 100));
            return null;
        }

    } catch (err) {
        console.log("❌ Fetch erro:", err.message);
        return null;
    }
}

// =====================
// LOAD TREE
// =====================
function loadTree() {
    if (!fs.existsSync(OUTPUT_FILE)) {
        return {
            name: "Life",
            key: 1,
            rank: "ROOT",
            children: []
        };
    }

    return JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf-8"));
}

// =====================
// LOAD PROGRESS
// =====================
function loadProgress() {
    if (!fs.existsSync(PROGRESS_FILE)) {
        return {
            queue: [],
            visited: new Set()
        };
    }

    const data = JSON.parse(fs.readFileSync(PROGRESS_FILE));

    return {
        queue: data.queue || [],
        visited: new Set(data.visited || [])
    };
}

// =====================
// SAVE (ANTI-CORRUPÇÃO)
// =====================
function saveTree(tree) {
    try {
        fs.writeFileSync(OUTPUT_FILE + ".tmp", JSON.stringify(tree, null, 2));

        // tenta remover o original primeiro (Windows friendly)
        if (fs.existsSync(OUTPUT_FILE)) {
            fs.unlinkSync(OUTPUT_FILE);
        }

        fs.renameSync(OUTPUT_FILE + ".tmp", OUTPUT_FILE);

    } catch (err) {
        console.log("⚠️ Erro ao salvar tree:", err.message);
    }
}

function saveProgress(queue, visited) {
    try {
        fs.writeFileSync(PROGRESS_FILE + ".tmp", JSON.stringify({
            queue,
            visited: [...visited]
        }));

        if (fs.existsSync(PROGRESS_FILE)) {
            fs.unlinkSync(PROGRESS_FILE);
        }

        fs.renameSync(PROGRESS_FILE + ".tmp", PROGRESS_FILE);

    } catch (err) {
        console.log("⚠️ Erro ao salvar progress:", err.message);
    }
}

// =====================
// REBUILD QUEUE (CRÍTICO)
// =====================
function rebuildQueue(tree, visited) {
    const queue = [];

    function traverse(node) {
        if (!visited.has(node.key)) {
            queue.push({ key: node.key });
        }

        if (node.children) {
            node.children.forEach(traverse);
        }
    }

    traverse(tree);

    return queue;
}

// =====================
// BUILD NODE MAP
// =====================
function buildNodeMap(tree) {
    const nodes = {};

    function walk(node) {
        nodes[node.key] = node;
        if (node.children) node.children.forEach(walk);
    }

    walk(tree);
    return nodes;
}

// =====================
// MAIN
// =====================
async function processTree() {
    let tree = loadTree();
    let { queue, visited } = loadProgress();

    console.log("Continuando...");
    console.log("Fila original:", queue.length);
    console.log("Visitados:", visited.size);

    // =====================
    // LIMPEZA
    // =====================
    queue = queue.filter(q => q && q.key && !isNaN(q.key));

    // remove duplicados
    const seen = new Set();
    queue = queue.filter(q => {
        if (seen.has(q.key)) return false;
        seen.add(q.key);
        return true;
    });

    // remove já visitados
    queue = queue.filter(q => !visited.has(q.key));

    // =====================
    // RECONSTRUÇÃO
    // =====================
    if (queue.length === 0) {
        console.log("⚠️ Fila vazia → reconstruindo...");
        queue = rebuildQueue(tree, visited);
        console.log("Nova fila:", queue.length);
    }

    // se ainda vazio → recomeça da raiz
    if (queue.length === 0) {
        console.log("⚠️ Nada encontrado → reiniciando da raiz");
        queue = [{ key: 1 }];
        visited.clear();
    }

    // =====================
    // MAPA
    // =====================
    const nodes = buildNodeMap(tree);

    // =====================
    // LOOP
    // =====================
    while (queue.length > 0) {
        const current = queue.shift();

        if (!current || !current.key || isNaN(current.key)) {
            console.log("❌ Key inválida:", current);
            continue;
        }

        if (visited.has(current.key)) continue;

        let parent = nodes[current.key];

        // recria nó se necessário
        if (!parent) {
            console.log("⚠️ Criando nó perdido:", current.key);

            parent = {
                name: "Unknown",
                key: current.key,
                rank: "UNKNOWN",
                children: []
            };

            nodes[current.key] = parent;

            if (!tree.children) tree.children = [];
            tree.children.push(parent);
        }

        console.log("➡️ Processando:", parent.name, `(${current.key})`);

        let offset = 0;
        let hasMore = true;

        while (hasMore) {
            const data = await safeFetch(
                `${BASE_URL}/${current.key}/children?limit=100&offset=${offset}`
            );

            if (!data || !data.results) {
                console.log("⚠️ Resposta inválida:", current.key);
                break;
            }

            for (const child of data.results) {

                if (!child.canonicalName || !child.rank) continue;
                if (!child.key || isNaN(child.key)) continue;
                if (nodes[child.key]) continue;

                const newNode = {
                    name: child.canonicalName,
                    key: child.key,
                    rank: child.rank,
                    children: []
                };

                parent.children.push(newNode);
                nodes[child.key] = newNode;

                if (!visited.has(child.key)) {
                    queue.push({ key: child.key });
                }
            }

            offset += data.limit;
            hasMore = !data.endOfRecords;

            await sleep(DELAY);
        }

        visited.add(current.key);

        // 💾 checkpoint seguro
        saveTree(tree);
        saveProgress(queue, visited);

        console.log("📦 Restantes:", queue.length);
    }

    console.log("\n🌳 Finalizado!");
}

processTree();