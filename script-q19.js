//-------------> Q19
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