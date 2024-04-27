
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

    let container = document.getElementById(mainId);
    let id = 'p-' + (container.children.length + contRemove); //gerador de id
    
    let elementoP = `<p class="p-paragrafo" id="${id}">
    Parágrafo ${container.children.length + contRemove}
    <button class="btn-remove" onclick="removerParagrafo('${id}')">Remover</button>
    </p>`;
    
    let novoElemento = document.createElement('p');
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



//-------------> Q7
function mudarImg(){
    document.getElementById("mudarImg").setAttribute('src', 'images/img-gato2.jpg')
}

function defaultImg(){
    document.getElementById("mudarImg").setAttribute('src', 'images/img-gato1.gif')
}

//-------------> Q8
var contaClick = 1
function clickContador(){
    texto = document.getElementById('contador')
    texto.innerHTML= `<p id="contador">Quantidade de Cliques +  ${contaClick}</p>`
    contaClick ++
}

//-------------> Q9
function tamanhoDinamico() {
    let slide = document.getElementById('barraSlide');
    let divDinamica = document.getElementById('divDinamica');
    let valor = slide.value;
    divDinamica.style.width = `${valor}%`;
}

//-------------> Q10
function alertaDinamica(){
    let campo = document.getElementById('textoEntrada').value;
    
    if (campo === '') {
        alert('Atenção! Insira sua série preferida.');
    } else if (campo === 'Game of Thrones' || campo ==='got' || campo ==='GOT' || campo ==='GoT' || campo ==='got' || campo ==='game of thrones' || campo ==='gameofthrones'){
        alert('Não pode ser Game of Thrones'); //kkkkkkkkkk
    } else {
        alert(`Aí sim! Uma série de responsa: ${campo}`);
    }
}