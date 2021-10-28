function Calcular() {
   
   
    let numero = prompt(document.getElementById('cajaTexto').value);
    
    
    if (numero % 2 == 0) {
        alert("Par");
    }
    else if (numero % 2 == -1 || numero % 2 == 1) {
       alert("Impar");
    }
    else {
      alert("Error");
    }

    
}