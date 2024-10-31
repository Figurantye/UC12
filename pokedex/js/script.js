const imgPokemon = document.querySelector('#imgPokemon')
const nomePokemon = document.querySelector('#nomePokemon')
const numeroPokemon = document.querySelector('#numeroPokemon')
const inputText = document.querySelector("#inputText")
const form = document.querySelector('.form-busca')
const buttonA = document.querySelector('#btnAnterior')
const buttonP = document.querySelector('#btnProximo')
const type = document.querySelector('#typePokemon')

let IDPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    IDPokemon = dataPokemon.id;
    imgPokemon.src = dataPokemon.sprites.front_default;
    const texto = document.createElement('span')
    texto.textContent = dataPokemon.types[0].type.name
    texto.className = 'adicionado'
    type.appendChild(texto)
    const texto2 = document.createElement('span')
    texto2.textContent = ` e ${dataPokemon.types[1].type.name}`
    texto2.className = 'adicionado'
    type.appendChild(texto2)
    nomePokemon.innerHTML = dataPokemon.name;
    numeroPokemon.innerHTML = dataPokemon.id
}

inputText.addEventListener('input', () => 
    IDPokemon = toString(inputText.value)
)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    type
    showPokemon(inputText.value.toLowerCase());
})
