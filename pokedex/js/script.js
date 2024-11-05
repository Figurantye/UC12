const imgPokemon = document.querySelector('#imgPokemon')
const nomePokemon = document.querySelector('#nomePokemon')
const numeroPokemon = document.querySelector('#numeroPokemon')
const inputText = document.querySelector("#inputText")
const form = document.querySelector('.form-busca')
const buttonA = document.querySelector('#btnAnterior')
const buttonP = document.querySelector('#btnProximo')
const type = document.querySelector('#typePokemon')
const weighth1 = document.querySelector('#weight')
const heighth1 = document.querySelector('#height')
const sound = document.querySelector('#sound')

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
    texto.id = 'adicionado1'
    type.appendChild(texto)

    const texto2 = document.createElement('span')
    texto2.textContent = ` e ${dataPokemon.types[1].type.name}`
    texto2.id = 'adicionado2'
    type.appendChild(texto2)

    let weightPoke = document.createElement('span')
    weightPoke.textContent = dataPokemon.weight
    weightPoke.id = 'adicionado3'
    weighth1.appendChild(weightPoke)

    let heightPoke = document.createElement('span')
    heightPoke.textContent = dataPokemon.height
    heightPoke.id = 'adicionado4'
    heighth1.appendChild(heightPoke)

    sound.src = dataPokemon.cries.legacy

    nomePokemon.innerHTML = dataPokemon.name;
    numeroPokemon.innerHTML = dataPokemon.id


}

inputText.addEventListener('input', () => 
    IDPokemon = toString(inputText.value)
)

const apagar = async () => {
    try {
        const add1 = document.getElementById('adicionado1')
        add1.remove()
    } catch (error) {
        console.log('a merda do type1 não funciona');   
    }
    
    try {
        const add2 = document.getElementById('adicionado2')
        add2.remove()
    } catch (error) {
        console.log('a merda do type2 não funciona');   
    }
    try {
        const add3 = document.getElementById('adicionado3')
        add3.remove()
    } catch (error) {
        console.log('a merda do peso não funciona');   
    }
    try {
        const add4 = document.getElementById('adicionado4')
        add4.remove()
    } catch (error) {
        console.log('a merda da altura não funciona');   
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    apagar()
    showPokemon(inputText.value.toLowerCase());
})

buttonP.addEventListener('click', () => {
    apagar()
    showPokemon(IDPokemon += 1)
})
buttonA.addEventListener('click', () => {
    apagar()
    showPokemon(IDPokemon -= 1)
})