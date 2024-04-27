
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
function addParagrafo(main_container) {

    const container = document.getElementById(main_container);
    const id = 'p-' + (container.children.length + 1); //gerador de id

    const novoElementoHTML = `<p class="p-paragrafo" id="${id}">
                                Parágrafo ${container.children.length + 1}
                                <button class="btn" onclick="removerParagrafo('${id}')">Remover</button>
                              </p>`;

                              

    const novoElemento = document.createElement('div');
    novoElemento.innerHTML = novoElementoHTML;
    container.appendChild(novoElemento.firstChild)
}

//-------------> Q4
function removerParagrafo(elementoId) {
    document.getElementById(elementoId).remove();
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