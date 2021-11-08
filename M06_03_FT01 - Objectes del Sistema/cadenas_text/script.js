
function printarMensaje () {
    
let frase = "El desayuno estaba muy bueno, esas galletas son deliciosas";
let position = document.getElementById("frasePosition");



position.innerText = "'"+frase+"'";


    let position2 = document.getElementById("position2");
    let position3 = document.getElementById("position3");
    let position4 = document.getElementById("position4");
    let position5 = document.getElementById("position5");

    position2.innerText = frase.length
    position3.innerText = frase.slice(28)
    position4.innerText = frase.replace("galletas", "pastas")
    position5.innerText = frase.toUpperCase();

}