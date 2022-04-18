alert("VENTA DE PRODUCTOS");

let totalNotebook = 0;
let totalTeclado = 0;
let totalMouse = 0;
let precio;

let producto = prompt("Que producto quiere comprar? Presione \n1 Notebook \n2 Teclado \n3 Mouse \n\n \
 ESC para SALIR").toLowerCase();
 while (producto != "esc"){
     switch (producto){
         case "1":
             alert("Ud compró una Notebook");
             precio = 100000;
             totalNotebook += precio;
             break;
     
         case "2":
             alert("Ud compró un Teclado");
             precio = 2000;
             totalTeclado += precio;
             break;
     
         case "3":
             alert("Ud compró un Mouse");
             precio = 1500;
             totalMouse += precio;
             break;
             
         default:
             alert("Error ud ingresó una opción incorrecta");
             break;
    }
    producto = prompt("Quiere seguir comprando? Presione \n1 Notebook \n2 Teclado \n3 Mouse \n\n \ o ESC para SALIR");
}

let precioTotal = totalNotebook + totalMouse + totalTeclado;
if (precioTotal == 0) {
    alert("Ud no ha realizado ninguna compra");
    alert("Gracias por su visita!!!");
} else {
    alert("Ud compró por un total de: " + precioTotal);
    alert("Gracias por su visita!!!");
}



