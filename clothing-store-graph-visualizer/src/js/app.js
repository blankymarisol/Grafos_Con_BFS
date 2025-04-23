// Simulación de los resultados del algoritmo BFS
// Estos datos deberían ser obtenidos desde el backend o base de datos
const bfsResults = {
    user1: {
        name: "Alicia",
        purchases: ["Camiseta Roja"],
        recommendations: [
            { name: "Jeans Azules", category: "Ropa", price: 40 },
            { name: "Sudadera Negra", category: "Ropa", price: 35 },
        ],
    },
    user2: {
        name: "Roberto",
        purchases: ["Jeans Azules", "Zapatillas Blancas"],
        recommendations: [
            { name: "Camiseta Roja", category: "Ropa", price: 20 },
            { name: "Gorra Gris", category: "Accesorios", price: 15 },
        ],
    },
    user3: {
        name: "Carlos",
        purchases: ["Sudadera Negra"],
        recommendations: [
            { name: "Mochila Verde", category: "Accesorios", price: 50 },
            { name: "Zapatillas Blancas", category: "Calzado", price: 60 },
        ],
    },
};

// Función para manejar la selección del cliente
function handleCustomerSelection() {
    const customerSelect = document.getElementById("customerSelect");
    const selectedUserId = customerSelect.value;

    if (selectedUserId) {
        const userData = bfsResults[selectedUserId];
        displayPurchases(userData.purchases);
        displayRecommendations(userData.recommendations);
        renderGraph(selectedUserId);
    } else {
        clearDisplay();
    }
}

// Función para mostrar las compras del cliente
function displayPurchases(purchases) {
    const purchasesContainer = document.getElementById("purchasesContainer");
    purchasesContainer.innerHTML = ""; // Limpiar contenido previo

    purchases.forEach((purchase) => {
        const purchaseItem = document.createElement("li");
        purchaseItem.textContent = purchase;
        purchasesContainer.appendChild(purchaseItem);
    });
}

// Función para mostrar las recomendaciones
function displayRecommendations(recommendations) {
    const recommendationList = document.getElementById("recommendationList");
    recommendationList.innerHTML = ""; // Limpiar contenido previo

    recommendations.forEach((recommendation) => {
        const recommendationItem = document.createElement("li");
        recommendationItem.textContent = `${recommendation.name} - ${recommendation.category} - $${recommendation.price}`;
        recommendationList.appendChild(recommendationItem);
    });
}

// Función para renderizar el grafo (simulación básica)
function renderGraph(userId) {
    const graphContainer = document.getElementById("graphContainer");
    graphContainer.innerHTML = ""; // Limpiar contenido previo

    const graphMessage = document.createElement("p");
    graphMessage.textContent = `Grafo generado para el usuario: ${bfsResults[userId].name}`;
    graphContainer.appendChild(graphMessage);

}

// Función para limpiar la visualización
function clearDisplay() {
    document.getElementById("purchasesContainer").innerHTML = "";
    document.getElementById("recommendationList").innerHTML = "";
    document.getElementById("graphContainer").innerHTML = "";
}

// Agregar evento al selector de cliente
document.getElementById("customerSelect").addEventListener("change", handleCustomerSelection);

// Agregar evento al botón "Ver Compras y Recomendaciones"
document.getElementById("viewButton").addEventListener("click", handleCustomerSelection);