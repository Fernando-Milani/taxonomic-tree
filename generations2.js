import fs from "fs";

const BASE_URL = "https://api.gbif.org/v1/species";

// níveis que queremos
const ranks = [
    "kingdom",
    "phylum",
    "class",
    "order",
    "family",
    "genus",
    "species"
];

// busca espécies de exemplo
async function fetchSpecies(limit = 200) {
    const res = await fetch(`${BASE_URL}/search?limit=${limit}`);
    const data = await res.json();

    const detailed = [];

    for (const sp of data.results) {
        if (!sp.key) continue;

        try {
            const detailRes = await fetch(`${BASE_URL}/${sp.key}`);
            const detail = await detailRes.json();
            detailed.push(detail);
        } catch (err) {
            console.log("erro em espécie", sp.key);
        }
    }

    return detailed;
}

function buildRelations(speciesList) {
    const relationsSet = new Set();

    // raiz
    relationsSet.add(`["Vida","Eukarya"]`);

    speciesList.forEach(sp => {
        let prev = "Eukarya";

        ranks.forEach(rank => {
            const value = sp[rank];

            if (value && value !== prev) {
                const relation = `["${prev}","${value}"]`;
                relationsSet.add(relation);
                prev = value;
            }
        });
    });

    return Array.from(relationsSet);
}

function saveToFile(relations) {
    const content = `
export const relations = [

    // AUTO-GERADO
    ${relations.join(",\n    ")}

];
`;

    fs.writeFileSync("relations2.js", content);
    console.log("relations2.js gerado com sucesso");
}

function printStats(speciesList) {
    const stats = {
        kingdom: new Set(),
        phylum: new Set(),
        class: new Set(),
        order: new Set(),
        family: new Set(),
        genus: new Set(),
        species: new Set()
    };

    speciesList.forEach(sp => {
        Object.keys(stats).forEach(rank => {
            if (sp[rank]) {
                stats[rank].add(sp[rank]);
            }
        });
    });

    console.log("\n===== ESTATÍSTICAS =====");

    Object.entries(stats).forEach(([rank, set]) => {
        console.log(`${rank}: ${set.size}`);
    });

    console.log("========================\n");
}

async function main() {
    const species = await fetchSpecies(5000); // aumenta se quiser mais dados
    printStats(species);
    const relations = buildRelations(species);
    saveToFile(relations);
}

main();