function atribuirTexto(v) {
    nome.value = v;   
}

function iniciar() {
    botao.addEventListener("click", function(){
        atribuirTexto("Jorge")
    });
}

window.onload = iniciar;