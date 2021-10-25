
function semana(){
var num = document.getElementById('num').value;
var resultado;

switch (num) { 
    case '1':
        resultado= 'Lunes';
        break;

    case '2':
        resultado= 'Martes';
        break;

    case '3':
        resultado=  'Miercoles';
        break;

    case '4':
        resultado = 'Jueves ';
        break;

    case '5':
        resultado = 'Viernes';
        break;

    case '6':
        resultado = 'Sabado';
        break;

    case '7':
        resultado= 'Domingo';
        break;

   
    default:
        'Error: No existe mas días de la semana mes ...';
        break;
}


}