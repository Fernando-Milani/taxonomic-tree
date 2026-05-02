const width = 1700;
const height = 900;

let selectedNode = null;
let angleOffset = 0;

// =====================
// CONFIG PERFORMANCE
// =====================
const MAX_DEPTH = 7;
const MAX_CHILDREN = 50;
const SHOW_LABELS = false;

// =====================
// NOMES DAS CAMADAS
// =====================
const layerNames = [
    "Vida","Domínio","Reino","Filo","Classe",
    "Ordem","Família","Gênero","Espécie"
];

// =====================
// LOAD JSON + INIT
// =====================
async function init() {
    const response = await fetch("./tree.json");
    let data = await response.json();

    if (Array.isArray(data)) data = data[0];

    // 🔥 LIMITA FILHOS (ANTES DO D3)
    function limitChildren(node) {
        if (!node.children) return;

        if (node.children.length > MAX_CHILDREN) {
            node.children = node.children.slice(0, MAX_CHILDREN);
        }

        node.children.forEach(limitChildren);
    }

    limitChildren(data);

    startD3(data);
}

init();

// =====================
// MAIN D3
// =====================
function startD3(data) {

    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    const centerX = width - 5;
    const centerY = height - 100;

    const g = svg.append("g")
        .attr("transform", `translate(${centerX}, ${centerY})`);

    const root = d3.hierarchy(data);

    // 🔥 LIMITA PROFUNDIDADE
    root.each(d => {
        if (d.depth >= MAX_DEPTH) {
            d.children = null;
        }
    });

    const treeLayout = d3.tree()
        .size([2 * Math.PI, height / 2])
        .separation(() => 1);

    treeLayout(root);

    // =====================
    // CAMADAS
    // =====================
    const layerSizes = [1,150,150,200,200,200,200,200,200];
    const cumY = {};

    let prev = 0;
    layerSizes.forEach((size, depth) => {
        cumY[depth] = prev + size;
        prev = cumY[depth];
    });

    root.descendants().forEach(d => {
        d.y = cumY[d.depth] || prev;
    });

    function radialPoint(x, y) {
        const angle = x + angleOffset;

        return [
            y * Math.cos(angle - Math.PI / 2),
            y * Math.sin(angle - Math.PI / 2)
        ];
    }

    function angularLink(d) {
        const start = radialPoint(d.source.x, d.source.y);
        const mid = radialPoint(d.source.x, d.target.y);
        const end = radialPoint(d.target.x, d.target.y);
        const sweep = d.target.x > d.source.x ? 1 : 0;

        return `
            M${start[0]},${start[1]}
            L${mid[0]},${mid[1]}
            A${d.target.y},${d.target.y} 0 0,${sweep} ${end[0]},${end[1]}
        `;
    }

    // =====================
    // LINKS
    // =====================
    const links = g.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("d", angularLink);

    // =====================
    // NÓS
    // =====================
    const nodes = g.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => {
            const [x, y] = radialPoint(d.x, d.y);
            return `translate(${x},${y})`;
        });

    nodes.append("circle")
        .attr("r", 4)
        .attr("fill", "#68e3ff");

    // LABELS CONTROLADOS
    if (SHOW_LABELS) {
        nodes.append("text")
            .attr("dy", "0.31em")
            .attr("x", d => (d.x < Math.PI ? 6 : -6))
            .style("fill", "#fff")
            .style("text-anchor", d => (d.x < Math.PI ? "start" : "end"))
            .style("font-size", "10px")
            .attr("transform", d => {
                const angle = (d.x * 180 / Math.PI - 90);
                return d.x >= Math.PI ? `rotate(${angle + 180})` : `rotate(${angle})`;
            })
            .text(d => d.data.name);
    }

    // =====================
    // ROTAÇÃO COM SCROLL
    // =====================
    svg.on("wheel", (event) => {
        event.preventDefault();

        angleOffset += event.deltaY * 0.002;

        nodes.attr("transform", d => {
            const [x, y] = radialPoint(d.x, d.y);
            return `translate(${x},${y})`;
        });

        links.attr("d", angularLink);
    });

    // =====================
    // HIGHLIGHT
    // =====================
    function highlightSubtree(d) {
        const nodeSet = new Set(d.ancestors());

        nodes.select("circle")
            .style("fill", n => nodeSet.has(n) ? "#fffae7" : "#38bdf8")
            .style("opacity", n => nodeSet.has(n) ? 1 : 0.1);

        links
            .style("stroke", l =>
                nodeSet.has(l.source) && nodeSet.has(l.target)
                    ? "#fff6d4"
                    : "#94a3b8"
            )
            .style("opacity", l =>
                nodeSet.has(l.source) && nodeSet.has(l.target) ? 1 : 0.1
            );
    }

    function resetHighlight() {
        nodes.select("circle")
            .style("fill", "#38bdf8")
            .style("opacity", 1);

        links
            .style("stroke", "#94a3b8")
            .style("opacity", 1);
    }

    nodes.on("mouseover", (event, d) => highlightSubtree(d))
        .on("mouseout", () => {
            selectedNode ? highlightSubtree(selectedNode) : resetHighlight();
        });

    // =====================
    // CLICK
    // =====================
    function getPath(d) {
        return d.ancestors().reverse().map(n => n.data.name).join(" / ");
    }

    nodes.on("click", (event, d) => {
        selectedNode = d;
        highlightSubtree(d);
        document.getElementById("pathBox").innerText = getPath(d);
    });

    // =====================
    // SEARCH LIMITADA
    // =====================
    const allNodes = root.descendants().slice(0, 2000);

    const searchBox = document.getElementById("searchBox");
    const suggestions = document.getElementById("suggestions");

    searchBox.addEventListener("input", () => {
        const value = searchBox.value.toLowerCase();
        suggestions.innerHTML = "";
        if (!value) return;

        allNodes
            .filter(n => n.data.name.toLowerCase().includes(value))
            .slice(0, 20)
            .forEach(n => {
                const div = document.createElement("div");
                div.className = "suggestion";
                div.innerText = n.data.name;
                div.onclick = () => focusNode(n);
                suggestions.appendChild(div);
            });
    });

    function focusNode(d) {
        const scale = 2;
        const [cx, cy] = radialPoint(d.x, d.y);

        const transform = d3.zoomIdentity
            .translate(centerX - cx * scale, centerY - cy * scale)
            .scale(scale);

        svg.transition()
            .duration(800)
            .call(d3.zoom().transform, transform);

        highlightSubtree(d);
        document.getElementById("pathBox").innerText = getPath(d);
    }
}