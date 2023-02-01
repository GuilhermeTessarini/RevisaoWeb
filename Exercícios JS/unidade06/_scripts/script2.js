function getMousePos(e){
    var posiX = document.querySelector("#posX")
    var posiY = document.querySelector("#posY")
    posiX.innerHTML = e.clientX
    posiY.innerHTML = e.clientY

    if(e.clientY<10){
        var myWindow = document.querySelector("#janela")
        myWindow.style.display = "block"
    }
}

document.addEventListener("mousemove", getMousePos)