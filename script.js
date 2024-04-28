
//-------------> Q1
function mudaTexto(){
    document.getElementById('p-mudar').innerHTML='<p>Texto que mudou</p>';
}

//-------------> Q2
function mudarCorDiv(){
    document.getElementById('mudarCor').style.backgroundColor='coral';
}

function defaultCorDiv(){
    document.getElementById('mudarCor').style.backgroundColor='';
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

/*
Remove Todos (Bônus)
essa função alem de limpar o conteúdo, coloquei pra resetar o contador
*/
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
    let elemento = document.getElementById('p-hidden');
    let btn = document.getElementById('btn-q5')
    
    if(elemento.style.display=='none'){
        btn.value = 'Esconder Texto'
        elemento.style.display='';
    }else{
        elemento.style.display='none'
        btn.value = 'Mostrar Texto'
    }
}

//-------------> Q6
function validaForm() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    // Expressão regular para validar o email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === '') {
        alert('Por favor, insira seu nome.');
        return false;
    }

    if (email === '') {
        alert('Por favor, insira seu email.');
        return false;
    }

    // Verificar se o email está em um formato válido
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    return true;
}

//-------------> Q7
function mudarImg(){
    document.getElementById('mudarImg').setAttribute('src', 'images/img-gato2.jpg')
}

function defaultImg(){
    document.getElementById('mudarImg').setAttribute('src', 'images/img-gato1.gif')
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

//-------------> Q11
function cssDinamico(){
    let menu = document.getElementById('menu')
    let btnMute = document.getElementById('btn')
    let bar = document.getElementById('itembar')
    let item = document.querySelectorAll('li')

    if (btnMute.classList.contains('btn')) {
        btnMute.value = 'Remover Estilo'
        btnMute.removeAttribute('class', 'btn')
        btnMute.setAttribute('class', 'btn-mute')
        menu.removeAttribute('class', 'menu')
        menu.setAttribute('class', 'menu-mute')
        bar.removeAttribute('class', 'itembar')
        bar.setAttribute('class', 'itembar-mute')
        item.forEach(function(item) {
            item.removeAttribute('class', 'item')
            item.setAttribute('class', 'item-mute')
        })

    }else {
        btnMute.value = 'Aplicar Estilo'
        btnMute.removeAttribute('class', 'btn-mute')
        btnMute.setAttribute('class', 'btn')
        menu.removeAttribute('class', 'menu-mute')
        menu.setAttribute('class', 'menu')
        bar.removeAttribute('class', 'itembar-mute')
        bar.setAttribute('class', 'itembar')
        item.forEach(function(item) {
            item.removeAttribute('class', 'item-mute')
            item.setAttribute('class', 'item')
        })
    }
}

//-------------> Q12
var eixoX = 0;
var eixoY = 0;
var personagem = document.getElementById('personagem');
var tela = document.getElementById('p-area')
document.addEventListener('keydown', moveDiv)

function moveDiv(evento){

    let telaLimite = tela.getBoundingClientRect();
    let minX = 0;
    let minY = 0;
    let maxX = telaLimite.width - personagem.offsetWidth;
    let maxY = telaLimite.height - personagem.offsetHeight;

    evento.preventDefault(scrollBy);
    let tecla = evento.keyCode; 

    /*
    esquerda --> 37
    cima --> 38
    direita --> 39
    baixo --> 40
    */

    if (tecla == '39' && eixoX < maxX){
        eixoX = eixoX + 10
        personagem.style.left= eixoX + 'px'
        personagem.removeAttribute('class', 'personagem')
        personagem.setAttribute('class', 'personagemDash')
    }

    if (tecla == '37' && eixoX > minX){
        eixoX = eixoX - 10
        personagem.style.left= eixoX + 'px'
        personagem.removeAttribute('class', 'personagemDash')
        personagem.setAttribute('class', 'personagem')
    }

    if (tecla == '38' && eixoY > minY){
        eixoY = eixoY - 10
        personagem.style.top= eixoY + 'px'
        personagem.removeAttribute('class', 'personagemDash')
        personagem.setAttribute('class', 'personagem')
    }

    if (tecla == '40' && eixoY < maxY){
        eixoY = eixoY + 10
        personagem.style.top= eixoY + 'px'
        personagem.removeAttribute('class', 'personagem')
        personagem.setAttribute('class', 'personagemDash')
    }
}

//-------------> Q13


//-------------> Q14
function darkmode(){
    let bg = document.getElementById('darkmode')
    let btnSwitch = document.getElementById('btnSwitch')

    if (btnSwitch.classList.contains('btn-light')) { //fiz a comparação só com a div principal
        btnSwitch.value = 'Ativar Lightmode'
        bg.removeAttribute('class', 'light-mode')
        bg.setAttribute('class', 'dark-mode')

        btnSwitch.removeAttribute('class', 'btn-light')
        btnSwitch.setAttribute('class', 'btn-dark')

    } else {
        btnSwitch.value = 'Ativar Darkmode'
        bg.removeAttribute('class', 'dark-mode')
        bg.setAttribute('class', 'light-mode' )

        btnSwitch.removeAttribute('class', 'btn-dark')
        btnSwitch.setAttribute('class', 'btn-light')        
    }
}