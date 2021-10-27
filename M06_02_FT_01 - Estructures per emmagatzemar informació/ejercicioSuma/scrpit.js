var objCalculadora = (function (inicio) {
    // variables privadas (solo accesibles desde el mismo objeto)
    var resultado = 0;
    var num1 = 0; var num2 = 0;

    // función privada
    salirpantalla = function () {
        var cadena = "El resultado es : " + resultado;
        document.getElementById("salida").innerHTML = cadena;
    };

    return {
        // funciones públicas
        introduce: function (dato1, dato2) {
            num1 = parseInt(dato1);
            num2 = parseInt(dato2);
        },
        suma: function () {
            resultado = num1 + num2;
            salirpantalla();
        }

    }; //fin return

})(); // fin objCalcula


function calcula(var1, var2) {
    objCalculadora.introduce(var1, var2);
    var final = objCalculadora.suma();
}