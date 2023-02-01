//var element = document.getElementsByTagName("li")
var element = document.querySelectorAll("li")

//console.log(element.length)

for( var i=0; i<element.length; i++){
    console.log(element[i].innerText)
}