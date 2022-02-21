//Afegeix al div de tipus "resultado" el valor de l'edat de Bea
    let mujeres = document.querySelectorAll("tr[sexo='mujer']>td");
    document.getElementsByClassName("resultado")[0].innerHTML =
        mujeres[3].innerHTML;

//Afegeix al div de tipus "resultado" el valor de l'edat de Bea i el de Aitor separats per comes
    let hombres = document.querySelectorAll("tr[sexo='hombre']>td");
    document.getElementsByClassName("resultado")[0].innerHTML =
        mujeres[2].innerHTML +
        mujeres[3].innerHTML +
        " , " +
        hombres[0].innerHTML +
        hombres[1].innerHTML;

//Treure un any a l'edat de totes les dones
    for (i = 0; i < mujeres.length; i++) {
        if (parseInt(mujeres[i].innerHTML)) {
            edad = mujeres[i].innerHTML - 1;
            mujeres[i].innerHTML = edad;
            console.log(mujeres[i - 1].innerHTML + " Edad modificada: " + edad);
        }
    }
//Posar a resultat el nom dels menors d'edat
    let personas = document.querySelectorAll("tr>td");
    let menores = [];

    for (j = 0; j < personas.length; j++) {
        if (parseInt(personas[j].innerHTML)) {
            if (personas[j].innerHTML < 18) {
                menores.push(personas[j - 1].innerHTML);
                menores.push(personas[j].innerHTML);
            }
        }
    }
    console.log(menores);
    document.getElementsByClassName("resultado")[0].innerHTML =
        "Menores de edad: " + menores;

//Actualitzar la dada "media" i "acum" allà on toqui
    let mediaEdad = 0;
    let cantidad = personas.length / 2;

    for (i = 0; i < personas.length; i++) {
        if (parseInt(personas[i].innerHTML)) {
            mediaEdad += parseInt(personas[i].innerHTML);
        }
    }

    let acum2 = document.querySelector('[dato="acum"]');
    acum2.innerHTML = mediaEdad;
    mediaEdad = mediaEdad / cantidad;
    let media2 = document.querySelector('[dato="media"]');
    media2.innerHTML = mediaEdad;

//Creo la fila
    let filaNueva = document.createElement("tr");
    filaNueva.setAttribute("sexo", "hombre");

//Creo la celda con el datos de Borja
    let celdaNueva = document.createElement("td");
    let textoCelda = document.createTextNode("Borja");
    celdaNueva.appendChild(textoCelda);

    let celdaNueva2 = document.createElement("td");
    let textoCelda2 = document.createTextNode("23");
    celdaNueva2.appendChild(textoCelda2);

//Adjunto las 2 celdas nuevas a la fila
    filaNueva.appendChild(celdaNueva);
    filaNueva.appendChild(celdaNueva2);

//Adunto la fila a la tabla
    let table = document.getElementsByTagName("table");
    table[0].appendChild(filaNueva);

//Concatenar la dada "media" i "acum"
    personas = document.querySelectorAll("tr>td");
    mediaEdad = 0;
    cantidad = personas.length / 2;

    for (i = 0; i < personas.length; i++) {
        if (parseInt(personas[i].innerHTML)) {
            mediaEdad += parseInt(personas[i].innerHTML);
        }
    }

    acum2 = document.querySelector('[dato="acum"]');
    acum2.innerHTML = mediaEdad; //mostramos acum

    mediaEdad = mediaEdad / cantidad;

    media2 = document.querySelector('[dato="media"]');
    media2.innerHTML = mediaEdad;

//Mostrar per consola el contingut del div que te un id que comença per "je"

    let divJE = document.querySelector("[id^=je]");
    console.log(divJE.innerHTML);

//Mostrar per consola el contingut del div que te un id que acaba per "fe"
    let divFE = document.querySelector("[id$=fe]");
    console.log(divFE.innerHTML);

    const btnDep = document.createElement("button");
    let textoBoton = document.createTextNode("Mostrar Departamentos");
    btnDep.appendChild(textoBoton);
    document.body.appendChild(btnDep);

    btnDep.addEventListener("click", () => {
        let departamentos = document.querySelectorAll("tr[data-dep]");
        let listaDep = [];

        for (let departamento of departamentos) {
            if (!listaDep.includes(departamento.dataset.dep)) {
                listaDep.push("\n" + departamento.dataset.dep);
            }
        }

        let tituloDepartamentos = document.createElement("H4");
        let textoDepartamentos = document.createTextNode(
            "Lista de departamentos: " + listaDep
        );
        tituloDepartamentos.appendChild(textoDepartamentos);
        document.body.appendChild(tituloDepartamentos);
    });

//Botó amb l’antiguitat mitja de totes les persones de la llista.

    const btnViejo = document.createElement("button");
    let textoMediaAntiguedad = document.createTextNode("Media Antigüedad");
    btnViejo.appendChild(textoMediaAntiguedad);
    document.body.appendChild(btnViejo);
    btnViejo.addEventListener("click", () => {
        let mediaAntiguedad = 0;
        let anyosAntiguedad = document.querySelectorAll("tr[data-year]");

        for (let anyEntrada2 of anyosAntiguedad) {
            mediaAntiguedad += parseInt(anyEntrada2.dataset.year);
        }
        alert(
            "La media de antigüedad es: " + mediaAntiguedad / anyosAntiguedad.length
        );
    });
