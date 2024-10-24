const texto1 = document.querySelector("#titulo1")
const texto2 = document.querySelector("#titulo2")
const texto3 = document.querySelector("#titulo3")
const texto4 = document.querySelector("#titulo4")
const texto5 = document.querySelector("#titulo5")

fetch("./json/index.json")
    .then(response => response.json())
    .then(dados => {
        texto1.innerHTML = dados.pessoa1.nome
        texto2.innerHTML = dados.pessoa2.nome
        texto3.innerHTML = dados.pessoa3.nome
        texto4.innerHTML = dados.pessoa4.nome
        texto5.innerHTML = dados.pessoa5.nome
    })