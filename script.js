
let evento = prompt("Que tipo de evento tendrás").toLowerCase();

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

    default: alert("aun no contamos con la opcion para un(a) " + evento);
    break;
}

let invitados = prompt("¿cuantos invitados tendrás?")

    if (invitados <= 50){
        alert("El paquete 1 es para ti");
        
    }

    if (invitados <= 999){
        alert("El paquete 2 es para ti");
        
    }

     if (invitados > 999){
        alert("El paquete 3 te está esperando");
        
    }



