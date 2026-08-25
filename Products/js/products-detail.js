const params = new URLSearchParams(window.location.search);
const API_URL = "https://fakestoreapi.com/products";
const characterDetailContainer = document.getElementById("characters-detail");
const characterId = params.get("identifier");



function createProductCard(product) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.title}"
        >

        <h3>#${product.id}</h3>
        <h2>${product.title}</h2>
        
        <p>
            Precio: $${product.price}
        </p>
    `;

    card.addEventListener("click", () => { 
        window.location.href = `product-detail.html?identifier=${product.id}`;
    });

    return card;
}

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log("Respuesta de la API:", data);

        productsContainer.innerHTML = "";

        // 'data' es directamente el Array con los productos
        data.forEach(product => {
            const card = createProductCard(product);
            productsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

getProducts();