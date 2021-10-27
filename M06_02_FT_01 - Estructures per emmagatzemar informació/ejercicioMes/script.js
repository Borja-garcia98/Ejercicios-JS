function printarMensaje() {
    let mes = document.getElementById("cajaTexto").value;//Recoger valor de un input text  


    switch (mes) {
        case '1':
            document.write("Enero tiene 31 días");
            break;
        case '2':
            document.write("Febrero tiene 28 o 29 días.");
            break;
        case '3':
            document.write("Marzo tiene 31 días");
            break;
        case '4':
            document.write("Abril tiene 30 días");
            break;
        case '5':
            document.write("Mayo tiene 31 días");
            break;
        case '6':
            document.write("Junio tiene 30 días");
            break;
        case '7':
            document.write("Julio tiene 31 días");
            break;
        case '8':
            document.write("Agosto tiene 31 días");
            break;
        case '9':
            document.write("Setiembre tiene 30 días");
            break;
        case '10':
            document.write("Octubre tiene 31 días");
            break;
        case '11':
            document.write("Noviembre tiene 30 días");
            break;
        case '12':
            document.write("Diciembre tiene 31 días");
            break;

        default:
            document.write("No existen tantos meses");
    }
   
}