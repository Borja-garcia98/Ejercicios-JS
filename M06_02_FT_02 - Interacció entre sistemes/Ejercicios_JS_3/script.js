function Calcular() {
    var vr1 = document.getElementById('cajaTexto').value;
    var vr2 = document.getElementById('cajaTexto2').value;

    var promedio = (parseFloat(vr1) + parseFloat(vr2)) / 2;
    alert(promedio);
}