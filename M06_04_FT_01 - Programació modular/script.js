function llamadaCallbacks(callback1, callback2, callback3, callback4) {
  

    let primer =  setInterval(function()  {callback1() }, 1000);
    let segundo = setInterval(function()  {callback2() }, 2000);
    let terccero = setInterval(function() {callback3() }, 3000);
    let cuarto = setInterval(function()   {callback4() }, 4000);
    
}
function timeFunction() {
    let date = new Date();
        let time = date.toLocaleTimeString();
        document.getElementById("demo").innerHTML = time;
}

function funcion1(){
    document.getElementById("demo2").innerHTML = 'Primer callback';
} 
function funcion2(){
    document.getElementById("demo3").innerHTML = 'Segundo callback';
} 
function funcion3(){
    document.getElementById("demo4").innerHTML = 'Tercer callback';
} 

 llamadaCallbacks( timeFunction,funcion1,funcion2,funcion3);
