//pegar uma referência ao botão
let btnGerarRobo = document.querySelector('button');

//adicionar evento para criar a imagem
btnGerarRobo.addEventListener('click', GerarRobo);

//quando ocorrer o evento click, o EventHandler vai 'ouvir' e 'tratar' esse evento: vai executar algum código
function GerarRobo() {
    const txtPalavra = document.querySelector('#txtString');
    const valor = txtPalavra.value
    const txtAltura = document.querySelector('#altura')
    const alturan = txtAltura.value
    const txtLargura = document.querySelector('#largura')
    const larguran = txtLargura.value
    let imgRobo = document.querySelector('img')
    imgRobo.src = 'https://robohash.org/' + valor + '?size=' + larguran + "x" + alturan 
}