//-------------------------------------------------------------------------> Q19
var iniciar = false;
document.addEventListener("DOMContentLoaded", function() {download();});

function download() {
    if (!iniciar) {
        iniciar = true;
        let progresso = 0;
        const barra = document.getElementById('progresso');

        const intervalId = setInterval(() => {
            progresso += 1;
            barra.style.width = progresso + '%';
            if (progresso >= 100) {
                clearInterval(intervalId);
            }
        }, 50); // Ajuste o intervalo conforme necessário
    }
}

//-------------------------------------------------------------------------> Q20
var listaPalavras = [
    'Carro',
    'Avião',
    'Ferro',
    'Bolo',
    'Partida',
    'Futebol',
    'Escova',
    'Navio',
    'Zebra'
];
            
function busca(){
let texto =document.getElementById('search1').value;
let div = document.getElementById('divParaPalavras');
    div.innerHTML="";
    let indice ;
    for (indice=0; indice<listaPalavras.length; indice++){
        if(listaPalavras[indice].includes(texto)){
            let div = document.getElementById("divParaPalavras");
            div.innerHTML=div.innerHTML+listaPalavras[indice]+"   ";
            div.style.color='dodgerblue'
        }else{
            
        }
    }
}

function carregarPalavras(){
    let indice ;
    for (indice=0; indice<listaPalavras.length; indice++){
        let div = document.getElementById("divParaPalavras");
        div.innerHTML+=listaPalavras[indice]+"   ";
    }
}

function limparPalavras(){
    let div = document.getElementById("divParaPalavras");
        div.innerHTML="";
        div.style.color='#b3b3b3'
}