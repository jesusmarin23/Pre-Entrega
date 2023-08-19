const pokemonData = [
    {
        id: 1,
        nombre: "Pikachu",
        tipo: ["Eléctrico"],
        debilidad: ["Tierra"],
        habilidades: ["Impactrueno", "Rayo", "Electrocañón"]
    },
    {
        id: 2,
        nombre: "Charmander",
        tipo: ["Fuego"],
        debilidad: ["Agua", "Roca"],
        habilidades: ["Lanzallamas", "Garra Dragón", "Giro Fuego"]
    },
    {
        id: 3,
        nombre: "Squirtle",
        tipo: ["Agua"],
        debilidad: ["Eléctrico", "Planta"],
        habilidades: ["Hidrobomba", "Pistola Agua", "Rayo Burbuja"]
    },
    {
        id: 4,
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        debilidad: ["Fuego", "Volador", "Psíquico", "Hielo"],
        habilidades: ["Latigazo", "Hoja Afilada", "Planta Feroz"]
    },
    {
        id: 5,
        nombre: "Jigglypuff",
        tipo: ["Normal", "Hada"],
        debilidad: ["Acero", "Veneno"],
        habilidades: ["Canto", "Desarme", "Ataque Doble"]
    },
    {
        id: 6,
        nombre: "Geodude",
        tipo: ["Roca", "Tierra"],
        debilidad: ["Agua", "Planta", "Hielo", "Lucha", "Acero"],
        habilidades: ["Lanzarrocas", "Roca Afilada", "Terremoto"]
    },
    {
        id: 7,
        nombre: "Machop",
        tipo: ["Lucha"],
        debilidad: ["Psíquico", "Volador", "Hada"],
        habilidades: ["Karate", "Golpe Bajo", "Puño Fuego"]
    },
    {
        id: 8,
        nombre: "Gastly",
        tipo: ["Fantasma", "Veneno"],
        debilidad: ["Fantasma", "Siniestro"],
        habilidades: ["Hipnosis", "Tinieblas", "Bola Sombra"]
    },
    {
        id: 9,
        nombre: "Dratini",
        tipo: ["Dragón"],
        debilidad: ["Hada", "Hielo"],
        habilidades: ["Cola Dragón", "Pulso Dragón", "Onda Trueno"]
    },
    {
        id: 10,
        nombre: "Eevee",
        tipo: ["Normal"],
        debilidad: ["Lucha"],
        habilidades: ["Mordisco", "Ataque Rápido", "Refuerzo"]
    }
];
  
  function generarInfoPokemon(pokemonData) {
      const pokemonContainer = document.querySelector("#pokemon-container");
      const infoHTML = pokemonData.reduce((acumulador, pokemon) => {
          return acumulador + `
              <div class="pokemon">
                  <h2>${pokemon.nombre}</h2>
                  <p>Tipo: ${pokemon.tipo}</p>
                  <button onclick="guardarPokemon(${pokemon.id})">⭐</button>
              </div>
          `;
      }, "");
      pokemonContainer.innerHTML = infoHTML;
  }
  
  function guardarPokemon(id) {
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      const pokemonEncontrado = pokemonData.find(pokemon => pokemon.id === id);
      if (pokemonEncontrado) {
          favoritos.push(pokemonEncontrado);
          localStorage.setItem("favoritos", JSON.stringify(favoritos));
          alert("Pokémon agregado a favoritos");
      }
  }
  
  generarInfoPokemon(pokemonData);