
//-------------> Q1
function mudaTexto(){
    document.getElementById("p-mudar").innerHTML="<p>Texto que mudou</p>";
}

//-------------> Q2
function mudarCorDiv(){
    document.getElementById("mudarCor").style.backgroundColor='coral';
}

function defaultCorDiv(){
    document.getElementById("mudarCor").style.backgroundColor='';
}

//-------------> Q3
function addTexto(){
    let elemento = document.getElementById("p-paragrafo")
    elemento.innerHTML+=("<p class='p-paragrafo'>Parágrafo Novo</p>");
}

//-------------> Q4
function removeText(){
    let elemento = document.getElementById("p-paragrafo").lastChild
    elemento.remove()
}

//-------------> Q5
function hideTexto(){
    let elemento = document.getElementById("p-hidden");
    if(elemento.style.display=='none'){
        elemento.style.display='';
    }else{
        elemento.style.display='none'
    }
}