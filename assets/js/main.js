const url = ' https://economia.awesomeapi.com.br/last/';
const moedas = 'USD-BRL,EUR-BRL';
const botaoDolar = document.querySelector('#botaoDolar');
const botaoEuro = document.querySelector('#botaoEuro');
const botaoConverter = document.querySelector('.converter')


botaoDolar.addEventListener('click', (evento) => {
    fetch(url + moedas)
        .then(response =>{ response.json()
            .then(data => {
                const dolar = data.USDBRL
                document.getElementById('title').innerHTML = dolar.name;
                document.getElementById('valorAtual').innerHTML=parseFloat(dolar.bid).toLocaleString('pr-br',{
                        style: 'currency',
                        currency: 'BRL'
                })
                
            })
        })
});

botaoEuro.addEventListener('click', (evento) => {
    fetch(url + moedas)
        .then(response => response.json())
        .then(data => {
            const euro = data.EURBRL
            document.getElementById('title').innerHTML = euro.name;
            document.getElementById('valorAtual').innerHTML = 
            parseFloat(euro.bid).toLocaleString('pr-br',{
                style: 'currency',
                currency: 'BRL'
            })
        })
});
