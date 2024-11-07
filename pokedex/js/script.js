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
const body = document.querySelector('body')
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

    try {
        const texto2 = document.createElement('span')
        texto2.textContent = ` e ${dataPokemon.types[1].type.name}`
        texto2.id = 'adicionado2'
        type.appendChild(texto2)
    } catch (error) {
        console.log('só tem um tipo');
    }

    let weightPoke = document.createElement('span')
    weightPoke.textContent = dataPokemon.weight/10 + 'kg'
    weightPoke.id = 'adicionado3'
    weighth1.appendChild(weightPoke,)

    let heightPoke = document.createElement('span')
    heightPoke.textContent = dataPokemon.height/10 + 'm'
    heightPoke.id = 'adicionado4'
    heighth1.appendChild(heightPoke)

    sound.src = dataPokemon.cries.legacy

    nomePokemon.innerHTML = dataPokemon.name;
    numeroPokemon.innerHTML = dataPokemon.id

    tipos(texto, nomePokemon)
}

const apagar = () => {
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



imgPokemon.addEventListener('mouseover', async () => {
    const dataPokemon = await fetchPokemon(IDPokemon);
    imgPokemon.src = dataPokemon.sprites.front_shiny;
})

imgPokemon.addEventListener('mouseout', async () => {
    const dataPokemon = await fetchPokemon(IDPokemon);
    imgPokemon.src = dataPokemon.sprites.front_default;
})

inputText.addEventListener('input', () => 
    IDPokemon = toString(inputText.value)
)


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
const tipos = (tipo, nome) => {
    switch (tipo.textContent) {
        case 'grass':
            nome.style.color = 'green'
            break;

        case 'fire':
            nome.style.color = 'red'
            break;

        case 'rock':
            nome.style.color = 'brown'
            break;

        case 'ground':
            nome.style.color = 'brown'
            break;

        case 'fairy':
            nome.style.color = 'pink'
            break;

        case 'water':
            nome.style.color = 'blue'
            break;

        case 'fighting':
            nome.style.color = 'brown'
            break;

        case 'bug':
            nome.style.color = 'green'
            break;

        case 'normal':
            nome.style.color = 'gray'
            break;

        case 'flying':
            nome.style.color = 'gray'
            break;

        case 'poison':
            nome.style.color = 'purple'
            break;

        case 'electric':
            nome.style.color = 'yellow'
            break;

        case 'dark':
            nome.style.color = 'darkgray'
            break;

        case 'ghost':
            nome.style.color = 'purple'
            break;

        case 'steel':
            nome.style.color = 'gray'
            break;
            
        case 'psychic':
            nome.style.color = 'yellow'
            break;
            
        case 'ice':
            nome.style.color = 'blue'
            break;
            

        default:    
            break;
    }
}