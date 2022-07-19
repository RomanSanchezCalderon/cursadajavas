
function saludar () {

    let nombre = prompt("Hola, ¿cuál es tu nombre?");
    alert( `Tu nombre es ${nombre}`);

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

precioFinal (invitados);










