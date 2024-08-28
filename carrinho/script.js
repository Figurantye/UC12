/*const prod = document.querySelector('.produto')
const lista = document.querySelector('.lista_produtos')
const btn = document.querySelector('.adicionar')

btn = document.addEventListener('click', () => {
    lista.appendChild(prod)
})*/

document.addEventListener('DOMContentLoaded', () => {
    const adicionarBotoes = document.querySelectorAll('.adicionar')
    const listaProdutos = document.querySelector('.lista_produtos')
    const totalElement = document.querySelector('.total')
    let total = 0

    adicionarBotoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            const produtoElemento = botao.parentElement
            //Compatível com: SELECT nome FROM produto
            const nomeProduto = produtoElemento.querySelector('h3').textContent
            //Compatível com: SELECT preco FROM produto
            const precoProdutoTexto = produtoElemento.querySelector('p').textContent
            const precoProduto = parseFloat(precoProdutoTexto.replace('Preço: R$', '').replace(',', '.'))

            //Adicionar o produto à lista do carrinho
            const itemCarrinho = document.createElement('li')
            itemCarrinho.className = 'list-group-item'
            itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2).replace('.', ',')}`
            listaProdutos.appendChild(itemCarrinho)

            //Atualizar o valor do carrinho
            total += precoProduto
            totalElement.textContent = `Total: R$${total.toFixed(2).replace('.', ',')}`
        })
    })
})