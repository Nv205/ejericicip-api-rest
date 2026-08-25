const params = new URLSearchParams(window.location.search);
const API_URL = "https://dragonball-api.com/api/characters";
const characterDetailContainer = document.getElementById("character-detail");
const characterId = params.get("identifier");


function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img
            src="${character.image}"
            alt="${character.name}"
        >

        <h3>${character.id}</h3>
        <h2>${character.name}</h2>
        

        <p>
            Raza: ${character.race}
        </p>
    `;

    card.addEventListener(
        "click", 
        () => { window.location.href =`character-detail.html?identifier=${character.id}`;});

    return card;
}


async function getCharacterDetail() {

    const response = await fetch(API_URL);

    const data = await response.json();

    console.log("Respuesta de la API:", data);

    charactersContainer.innerHTML = "";

    data.items.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
}

getCharacters();