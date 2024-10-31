const imgPokemon = document.querySelector('#imgPokemon')
const nomePokemon = document.querySelector('#nomePokemon')
const numeroPokemon = document.querySelector('#numeroPokemon')
const inputText = document.querySelector("#inputText")
const form = document.querySelector('#form-busca')
const buttonA = document.querySelector('#btnAnterior')
const buttonP = document.querySelector('#btnProximo')
const type = document.querySelector('#typePokemon')

let IDPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    APIresponse => APIresponse.json()
    const data = await APIresponse.json();
    return data
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    IDPokemon = dataPokemon.id;
    imgPokemon.src = dataPokemon.sprites.front_default;
    const texto = document.createElement('span')
    texto.textContent = dataPokemon.types[0].type.name
    type.appendChild(texto)
    nomePokemon.innerHTML = dataPokemon.name;
}

showPokemon(inputText.value)