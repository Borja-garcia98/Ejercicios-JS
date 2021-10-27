function CalcularNum() {

    var numero1 = document.getElementById("cajaTexto").value;
    var numero2 = document.getElementById("cajaTexto2").value;

    if (numero1 < numero2) {
        document.write(numero1 + " es más pequeño que " + numero2);
    } else if (numero1 > numero2) {
        document.write(numero1 + " es más grande que " + numero2);

    } else {

        document.write("Son el mismo número ");
    }
}
