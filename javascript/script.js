// Funções da Sidebar (Mantenha como estão)
function openNav(){
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Lógica do Carrossel Infinito
const totalImagens = 5;
let indexAtual = 0;

function mudarSlide(direcao) {

    const track = document.getElementById("carouselTrack");
    const itens = document.querySelectorAll(".carousel-item");
    const totalImagens = itens.length;
    const imagensVisiveis = 3;

    indexAtual += direcao;

    if (indexAtual > totalImagens - imagensVisiveis) {
        indexAtual = 0;
    }

    if (indexAtual < 0) {
        indexAtual = totalImagens - imagensVisiveis;
    }

    const larguraItem = itens[0].offsetWidth;
    const gap = 15;
    const movimento = indexAtual * (larguraItem + gap);
    track.style.transform = `translateX(-${movimento}px)`;
}

/* POPUP */

function abrirPopup(imagem, titulo, ano, descricao) {

    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = imagem;
    document.getElementById("popup-titulo").innerText = titulo;
    document.getElementById("popup-ano").innerText = "Ano: " + ano;
    document.getElementById("popup-descricao").innerText = descricao;
}

function fecharPopup() {

    document.getElementById("popup").style.display = "none";
}

/* FECHAR AO CLICAR FORA */

window.onclick = function(event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {
        popup.style.display = "none";
    }
}