//Criando um novo elemento
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Este é um novo parágrafo.'

//Adicionando o novo elemento no corpo da página
document.body.appendChild(newParagraph)

//Adicionando um eventListener ao botão
const button = document.getElementById('myButton')
button.addEventListener('click', () => {
    alert('Você clickou no botão')
})