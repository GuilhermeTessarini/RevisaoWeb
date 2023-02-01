function detectKEY(e){
    console.log(e)

    var tecla = e.keyCode;
    var meuParagrafo = document.querySelector("p")

    switch(tecla){
        case 37: 
            meuParagrafo.innerHTML = "Esquerda"
            break;
        case 39: 
            meuParagrafo.innerHTML = "Direita"
            break;
        case 38: 
            meuParagrafo.innerHTML = "Para cima"
            break;
        case 40: 
            meuParagrafo.innerHTML = "Para baixo"
            break;
    }
}

document.addEventListener("keydown", detectKEY)