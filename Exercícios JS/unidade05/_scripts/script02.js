function mudarCor(cor) {
    //document.querySelector("#janela").className = cor;

    janela.className = cor
}

function iniciar() {
    botao1.addEventListener("click", function(){
        mudarCor("yellow")
    });
    botao2.addEventListener("click", function(){
        mudarCor("red")
    });
}

window.onload = iniciar;