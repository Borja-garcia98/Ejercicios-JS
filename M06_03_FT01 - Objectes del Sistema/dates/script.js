const y = new Date();
document.getElementById("year").innerHTML = y.getFullYear();



const m = new Date();
document.getElementById("month").innerHTML = m.getMonth() + 1;


const d = new Date();
document.getElementById("date").innerHTML = d.getDate();


let text;
const hoy = new Date();
const dia = new Date();
dia.setFullYear(2021, 10, 23);

if (dia > hoy) {
  text = "Estamos antes del 23 de Octubre del 2021.";
} else {
  text = "Estamos despues del 23 de Octubre del 2021";
}

document.getElementById("comparar").innerHTML = text;