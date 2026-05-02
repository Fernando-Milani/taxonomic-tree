//import { relations } from './relations.js';
import { relations } from './relations3.js';

const width = 1700;
const height = 900;
let selectedNode = null;

// =====================
// NOMES DAS CAMADAS
// =====================
const layerNames = [
    "Vida",
    "Domínio",
    "Reino",
    "Filo",
    "Classe",
    "Ordem",
    "Família",
    "Gênero",
    "Espécie"
];

// =====================
// BUILD TREE
// =====================
function buildTreeFromRelations(relations, rootName) {
    const map = {};

    relations.forEach(([parent, child]) => {
        if (!map[parent]) map[parent] = { name: parent, children: [] };
        if (!map[child]) map[child] = { name: child, children: [] };
    });

    relations.forEach(([parent, child]) => {
        map[parent].children.push(map[child]);
    });

    return map[rootName];
}

const data = buildTreeFromRelations(relations, "Vida");

// =====================
// SVG BASE
// =====================
const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

const g = svg.append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

// =====================
// HIERARCHY + LAYOUT
// =====================
const root = d3.hierarchy(data);

// =====================
// LAYOUT RADIAL AUTOMÁTICO REAL
// =====================
const treeLayout = d3.tree()
    .size([2 * Math.PI, 1000]) // raio grande apenas como limite
    .separation((a, b) => 1);

treeLayout(root); // aplica layout

// ---------------------
// Calculo automático de distância entre camadas
// ---------------------
const layerSizes = [
    1,  // Vida
    50,  // Vida - Domínio
    100,  // Domínio - Reino
    450,  // Reino - Filo
    200, // Filo - Classe
    200, // Ordem
    200, // Ordem - Família
    200, // Família - Gênero
    200  // Gênero - Espécie
];
const cumY = {};

let prev = 0;
layerSizes.forEach((size, depth) => {
    cumY[depth] = prev + size;
    prev = cumY[depth];
});

// aplica no layout
root.descendants().forEach(d => {
    d.y = cumY[d.depth] || prev; // fallback caso tenha mais níveis
});


// =====================
// Função para converter coordenadas polares em cartesianas
// =====================
function radialPoint(x, y) {
    return [
        y * Math.cos(x - Math.PI / 2),
        y * Math.sin(x - Math.PI / 2)
    ];
}

// =====================
// LINKS
// =====================
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

g.selectAll(".link")
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
const node = g.selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => {
        const [x, y] = radialPoint(d.x, d.y);
        return `translate(${x},${y})`;
    });

node.append("circle")
    .attr("r", 4)
    .attr("fill", "#68e3ff");

node.append("text")
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

// =====================
// LABELS DAS CAMADAS
// =====================
const depths = [...new Set(root.descendants().map(d => d.depth))];

const layerGroup = svg.append("g");
const layerLabels = layerGroup.selectAll(".layer-label")
    .data(depths)
    .enter()
    .append("text")
    .attr("class", "layer-label")
    .attr("x", 10)
    .attr("y", d => cumY[d])
    .text(d => layerNames[d] || `Nível ${d}`)
    .style("font-size", "16px")
    .style("fill", "#ffffff")
    .style("font-weight", "bold");

// =====================
// ZOOM
// =====================
const zoom = d3.zoom().on("zoom", (event) => {
    const { transform } = event;
    g.attr("transform", transform);
    layerLabels.attr("y", d => transform.applyY(cumY[d]));
});

svg.call(zoom);

// =====================
// HIGHLIGHT SUBÁRVORE
// =====================
function highlightSubtree(d) {
    const nodeSet = new Set(d.ancestors());

    // NÓS
    d3.selectAll(".node circle")
        .transition()
        .duration(100)
        .ease(d3.easeCubicOut)
        .style("fill", n =>
            nodeSet.has(n)
                ? "#fffae7"
                : "#38bdf8"
            )
        .style("box-shadow", "0 10px 5px 10px white")
        .style("opacity", n => nodeSet.has(n) ? 1 : 0.1);

    // LINKS (CAMINHO ATÉ A RAIZ)
    d3.selectAll(".link")
        .transition()
        .duration(250)
        .ease(d3.easeCubicOut)
        .style("stroke", l =>
            nodeSet.has(l.source) && nodeSet.has(l.target)
                ? "#fff6d4"
                : "#94a3b8"
        )
        .style("stroke-width", l =>
            nodeSet.has(l.source) && nodeSet.has(l.target)
                ? 3
                : 2
        )
        .style("opacity", l =>
            nodeSet.has(l.source) && nodeSet.has(l.target)
                ? 1
                : 0.1
        );

    // TEXTOS
    d3.selectAll(".node text")
        .transition()
        .duration(100)
        .ease(d3.easeCubicOut)
        .style("opacity", n => nodeSet.has(n) ? 1 : 0.1);
}

// =====================
// RESET HIGHLIGHT
// =====================
function resetHighlight() {
    d3.selectAll(".node circle")
        .transition()
        .duration(300)
        .ease(d3.easeCubicOut)
        .style("fill", "#38bdf8")
        .style("opacity", 1);

    d3.selectAll(".link")
        .transition()
        .duration(300)
        .ease(d3.easeCubicOut)
        .style("stroke", "#94a3b8")
        .style("stroke-width", 2)
        .style("opacity", 1);

    d3.selectAll(".node text")
        .transition()
        .duration(300)
        .ease(d3.easeCubicOut)
        .style("opacity", 1);
}

// =====================
// EVENTOS HOVER
// =====================
node.on("mouseover", (event, d) => highlightSubtree(d))
    .on("mouseout", () => {
    if (selectedNode) {
        highlightSubtree(selectedNode);
    } else {
        resetHighlight();
    }
});

g.selectAll(".link")
    .on("mouseover", (event, d) => highlightSubtree(d.target))
    g.selectAll(".link")
    .on("mouseover", (event, d) => highlightSubtree(d.target))
    .on("mouseout", () => {
        if (selectedNode) {
            highlightSubtree(selectedNode);
        } else {
            resetHighlight();
        }
    });

// =====================
// CLICK PARA FOCUS
// =====================
function getPath(d) {
    return d.ancestors()
        .reverse()
        .map(n => n.data.name)
        .join(" / ");
}

node.on("click", (event, d) => {
    selectedNode = d;

    highlightSubtree(d); // fixa o destaque
    document.getElementById("pathBox").innerText = getPath(d);
});

// =====================
// AUTOCOMPLETE
// =====================
const allNodes = root.descendants();
const searchBox = document.getElementById("searchBox");
const suggestions = document.getElementById("suggestions");

searchBox.addEventListener("input", () => {
    const value = searchBox.value.toLowerCase();
    suggestions.innerHTML = "";
    if (!value) return;

    allNodes.filter(n => n.data.name.toLowerCase().includes(value))
        .forEach(n => {
            const div = document.createElement("div");
            div.className = "suggestion";
            div.innerText = n.data.name;
            div.onclick = () => focusNode(n);
            suggestions.appendChild(div);
        });
});

// =====================
// FOCUS NO NÓ SELECIONADO
// =====================
function focusNode(d) {
    const scale = 2;
    const [cx, cy] = radialPoint(d.x, d.y);

    const transform = d3.zoomIdentity
        .translate(width / 2 - cx * scale, height / 2 - cy * scale)
        .scale(scale);

    svg.transition()
        .duration(1200)
        .call(zoom.transform, transform);

    highlightSubtree(d);
    document.getElementById("pathBox").innerText = getPath(d);
}