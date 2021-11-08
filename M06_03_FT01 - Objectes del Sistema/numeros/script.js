


let numero = 9.678;
let numeroString = numero.toString();
    let position = document.getElementById("numero");
    let position2 = document.getElementById("position2");
    let position3 = document.getElementById("position3");
    let position4 = document.getElementById("position4");
    let position5 = document.getElementById("position5");

let arrayNumero = [];

    position.innerText = numeroString;
    position2.innerText = numero.toFixed(2)
    position3.innerText = numero.toPrecision(2)
    position4.innerText = parseInt(numero)
    position5.innerText = parseFloat(numero)

