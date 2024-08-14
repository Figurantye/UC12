function showCatFact(photoId) {
    //Variável que contém o link com o limite de 140 caracteres
    const catFactsApiUrl = "https://catfact.ninja/fact?max_length=140"

    fetch(catFactsApiUrl)
        .then(response => response.json())
        .then(data => {
            //Extraindo o fato de gato da resposta.
            const catFact = data.fact 

            document.getElementById('catFactMessage').innerText = catFact
        })
        .catch(error => {
            console.error(`Erro ao obter a frase: ${error}`);
            document.getElementById('catFactMessage').innerText = 'Erro ao obter a frase'
        })
}