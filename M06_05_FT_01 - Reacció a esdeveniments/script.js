let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");


btn2.addEventListener("click", () => {
 cambiarColor();
});

btn3.addEventListener("click", () => {
  modificarPatatas();
});

btn4.addEventListener("click", () => {
    modificarPersona6();
  });

  btn5.addEventListener("click", () => {
   modificarSabores();
  });

  btn6.addEventListener("click", () => {
     insertarPersona();
  });


function cambiarColor() {
  let cuerpo = document.querySelector("body");

  if (cuerpo.style.color != "blue" || cuerpo.style.color == null) {
    cuerpo.style.color = "blue";
  } else {
    cuerpo.style.color = "black";
  }
}

function modificarPatatas(){
    let patatas = document.getElementById('patatas')

    patatas.innerText = "Patatas de Jamon"
}

function modificarPersona(){
    let Persona6 = document.getElementById('Persona6')
    Persona6.innerText = "Persona modificada!"
}

const myTimeout = setTimeout(modificarSabores, 3000);

function modificarSabores(){
  
    let sabores = document.getElementById('sabores')
    sabores.innerText = " Chcoloate Blanco"
}

function myStopFunction() {
    clearTimeout(myTimeout);
  }

function insertarPersona(){
    let tabla = document.getElementById('tabla')

    tabla.innerHTML += '<td id="newPersona">Nueva Persona <button onclick="eliminarPersona()">Eliminar!</button></td>'
}

function eliminarPersona(){
let newPersona = document.getElementById('newPersona')
newPersona.remove();
}



