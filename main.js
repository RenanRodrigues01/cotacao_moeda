const url = ' https://economia.awesomeapi.com.br/last/';
const moedas = 'USD-BRL,EUR-BRL';
const botaoDolar = document.querySelector('.botaoDolar');
const botaoEuro = document.querySelector('.botaoEuro');

botaoDolar.addEventListener('click',converteDolar);

botaoEuro.addEventListener('click', converteEuro);

function converteDolar (){
    fetch(url + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const dolar = data.USDBRL;
            
            document.getElementById('title').innerHTML = dolar.name;
            document.getElementById('valorAtual').innerHTML = 
            parseFloat(dolar.bid).toLocaleString('pr-br',{
                style: 'currency',
                currency: 'BRL'
            })
            
        })
}

function converteEuro (){
    fetch(url + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const euro = data.EURBRL;
            
            document.getElementById('title').innerHTML = euro.name;
            document.getElementById('valorAtual').innerHTML = 
            parseFloat(euro.bid).toLocaleString('pr-br',{
                style: 'currency',
                currency: 'BRL'
            })
            
        })
}

