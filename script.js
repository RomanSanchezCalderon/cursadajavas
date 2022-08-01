

let titulo = document.querySelector("#titulo");
titulo.style.color = "rgb(34, 149, 184)";

function colorChanger (){
    let selectValue = document.getElementById("selectorColor").value;
    //document.getElementById("dummy").innerHTML = "Seleccionaste: " + selectValue;
    document.body.style.backgroundColor = selectValue;

}

function saludar () {

    let nombre = prompt("Hola, ¿cuál es tu nombre?");
    alert( `Tu nombre es ${nombre}`);
    localStorage.setItem("nombre",nombre);

}

saludar();


function tipoevento () {

    let evento = prompt("¿Qué tipo de evento tendrás?, Déjanos ser parte de él...").toLowerCase();

    switch (evento) {
        case "boda":    
            alert("Endulza el mejor momento de tu vida");
            break;

        case "graduacion":
            alert("Disfruta no ir más a clases");
            break;

        case "fiesta familiar":
            alert("Siempre somos el sabor de tu vida");
            break;

        default: alert("Aun no contamos con la opcion para un(a) " + evento);
        break;
    }

    localStorage.setItem("Evento", evento);
}

tipoevento();


var invitados = parseInt(prompt("¿Cuántos invitados tendrás?"));
console.log(invitados)

    if (invitados <= 250) {
        alert("El paquete 1 es para ti")
    } else if (invitados <= 500){
        alert("El paquete 2 es para ti")    
    } else if (invitados < 1000){
        alert("El paquete 3 es para ti")
    } else {
        alert("No contamos con ese servicio :(")
    }

    sessionStorage.setItem("# Invitados", invitados);

let listaSabores = []
let entradaSabor = prompt("Cuál es tu sabor favorito? (escribe máximo 5 sabores y la palabra LISTO cuando termines)");


    while (entradaSabor != "LISTO") {
        alert("Escogiste: " + entradaSabor);
        listaSabores.push(entradaSabor);
        entradaSabor = prompt ("Qué otro sabor deseas?");  
    }

    console.log(listaSabores);


function precioFinal (invitados) {

    const precio = 30;
    let valorFinal = precio * invitados;
    alert ( `El costo es de ${valorFinal} pesos`);
    return;  
    
}

precioFinal(invitados);

function precioIVA (){
    let infoGuardada = sessionStorage.getItem("# Invitados");
    let precioIva = infoGuardada * 34.8;
    alert (`Si deseas factura, pagarás ${precioIva}`)
}

precioIVA ()












