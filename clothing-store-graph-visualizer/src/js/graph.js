// Función para renderizar el grafo con Cytoscape.js
function renderGraph(userId) {
    const graphContainer = document.getElementById("graphContainer");
    graphContainer.innerHTML = ""; // Limpiar contenido previo

    // Crear el grafo con Cytoscape.js
    const cy = cytoscape({
        container: graphContainer, // Contenedor del grafo

        elements: [
            // Nodos
            { data: { id: 'user', label: bfsResults[userId].name, type: 'user' } },
            ...bfsResults[userId].purchases.map((purchase, index) => ({
                data: { id: `purchase${index}`, label: purchase, type: 'product' },
            })),
            ...bfsResults[userId].recommendations.map((rec, index) => ({
                data: { id: `rec${index}`, label: rec.name, type: 'recommendation' },
            })),

            // Aristas
            ...bfsResults[userId].purchases.map((_, index) => ({
                data: { source: 'user', target: `purchase${index}`, label: 'COMPRADO' },
            })),
            ...bfsResults[userId].recommendations.map((_, index) => ({
                data: { source: 'user', target: `rec${index}`, label: 'RECOMENDADO' },
            })),
        ],

        style: [
            // Estilo para los nodos
            {
                selector: 'node',
                style: {
                    'background-color': (ele) => {
                        if (ele.data('type') === 'user') return '#ff6f61'; // Nodo de usuario
                        if (ele.data('type') === 'product') return '#6ec1e4'; // Nodo de producto comprado
                        return '#f9c74f'; // Nodo de recomendación
                    },
                    label: 'data(label)',
                    color: '#fff',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'font-size': '12px',
                    'border-width': 2,
                    'border-color': '#ffffff',
                },
            },
            // Estilo para las aristas
            {
                selector: 'edge',
                style: {
                    width: 2,
                    'line-color': '#cccccc',
                    'target-arrow-color': '#cccccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    label: 'data(label)',
                    'font-size': '10px',
                    'text-background-color': '#ffffff',
                    'text-background-opacity': 1,
                    'text-background-padding': '3px',
                },
            },
        ],

        layout: {
            name: 'cose', // Diseño automático similar al de la imagen
            animate: true,
            fit: true,
            padding: 30,
        },
    });
}