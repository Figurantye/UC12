const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const cidade = document.querySelector("#cidade")
const rua = document.querySelector("#rua")
const bairro = document.querySelector("#bairro")

fetch("json.json")
    .then(response => response.json())
    .then(data => {
        nome.innerHTML = data.cachorroRaca
        idade.innerHTML = data.gatoCor
        cidade.innerHTML = data.garrafaTipo
        rua.innerHTML = data.parede
        bairro.innerHTML = data.celularMarca
        console.log(data.nome, data.idade, data.endereco.Cidade, data.endereco.Rua, data.endereco.Bairro);
    })
    .catch(err => {
        console.error("deu merda");
        
    })