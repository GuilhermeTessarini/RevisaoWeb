
//ADICIONAR OPCAO 1

var myElement = document.querySelector("#opcoesPizza")
var newPizza = document.createElement("li")

myElement.appendChild(newPizza)

newPizza.innerHTML = "Quatro Queijos"

// ADICIONAR OPCAO 2

myElement.appendChild(document.createElement("li")).innerHTML = "Camarao"
myElement.appendChild(document.createElement("li")).innerHTML = "Bacon"
myElement.appendChild(document.createElement("li")).innerHTML = "Salame"

// ADICIONAR OPCAO 3

document.querySelector("#opcoesPizza").appendChild(document.createElement("li")).innerHTML = "Presunto"