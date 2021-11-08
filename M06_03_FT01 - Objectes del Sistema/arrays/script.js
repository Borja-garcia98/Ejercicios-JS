let array1 = ['Borja', 'Moni', 'Pepe', 'Oscar', 'Patri']
let array2 = ['Jon', 'Arnau', 'David'];

let a1 = document.getElementById("array1");
let a2 = document.getElementById("array2");

a1.innerText = array1
a2.innerText = array2
array1.pop();
let b1 = document.getElementById("b1")
b1.innerText = array1;

array1.shift();
let b2 = document.getElementById("b2");
b2.innerText = array1

array1.push("Fernando");
let b3 = document.getElementById("b3");
b3.innerText = array1

let resultado = array1.concat(array2);
 let b4 = document.getElementById("b4");
b4.innerText = resultado;

resultado.toString()