
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
var contRemove = 1
function addParagrafo(mainId) {

    const container = document.getElementById(mainId);
    const id = 'p-' + (container.children.length + contRemove); //gerador de id

    const elementoP = `<p class="p-paragrafo" id="${id}">
                                Parágrafo ${container.children.length + contRemove}
                                <button class="btn-remove" onclick="removerParagrafo('${id}')">Remover</button>
                              </p>`;

    const novoElemento = document.createElement('p');
    novoElemento.innerHTML = elementoP;
    container.appendChild(novoElemento.firstChild)
}

//----------> Remove Todos (Bônus)
function clearP(mainId) {
    elemento = document.getElementById(mainId)
    elemento.innerHTML = ""
    contRemove = 1
}

//-------------> Q4
function removerParagrafo(paragrafoId) {
    document.getElementById(paragrafoId).remove();
    contRemove++
}

//-------------> Q5
function hideTexto(){
    //Modificar esta função
    let elemento = document.getElementById("p-hidden");
    if(elemento.style.display=='none'){
        elemento.style.display='';
    }else{
        elemento.style.display='none'
    }
}

//-------------> Q6