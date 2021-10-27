
function Calcular() {
    let prime = true;

    var num = parseInt(document.getElementById('num').value);

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false
        }
    }
    if (prime == false) {
        alert("El "+num+" no es primo");

    } else {
        alert("El "+num+" es Primo");

    }



}