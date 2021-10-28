function Calcular() {


    let numero = confirm(document.getElementById('cajaTexto').value);


    if (numero % 2 == 0 && numero==true) {
        alert("Par");
    }
    else if ((numero % 2 == -1 || numero % 2 == 1 ) && numero==true) {
        alert("Impar");
    }
}


