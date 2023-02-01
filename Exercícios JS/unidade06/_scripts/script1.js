function detectRes(){
    var wid
    var arqCSS = document.querySelector("#meuCSS")

    if(window.innerWidth){
        wid = window.innerWidth;
    } else if(document.documentElement && document.documentElement.clientWidth){
        wid = document.documentElement.clientWidth
    } else if ( document.body){
        wid = document.body
    }

    if(wid < 450){
        arqCSS.setAttribute("href","_css/css_smartphone.css")
    } else {
        arqCSS.setAttribute("href","_css/css_desktop.css")
    }
    console.log(window.innerWidth)
}

window.onload = window.onresize = detectRes