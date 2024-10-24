const textoTitulo = document.querySelector("#titulo")

fetch("./json/index.json")
    .then(response => response.json())
    .then(dados => {
        textoTitulo.innerHTML = dados.endereco.Cidade
    })