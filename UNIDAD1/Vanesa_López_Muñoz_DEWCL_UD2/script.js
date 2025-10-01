



function pedir_opcion(){
var opcion;
do {
         opcion = window.prompt(
            "Elige una opción:\n" +
            "a. Iniciar juego\n" +
            "b. Lanzar los dados\n" +
            "c. Mostrar estadisticas del juego\n" +
            "d. Salir");


                    switch (opcion) {
            case "a":
                iniciar_juego();
            break;
            case "b":
                lanzar_dados();
             break;
             case "c":
              mostrar_estadisticas();
            break;
             case "d":
                window.alert("Saliendo del programa...");
                console.log("Fin del juego. Has estado jugando")
             break;
             default:
                 
                console.error("Opción no válida. Inténtalo de nuevo.");
        }
        
         } while (opcion !== "d");

     }
                
            
  function iniciar_juego(){

                 var nombre = prompt("Dime tu nombre");
                 var edad = parseInt(prompt("Dime tu edad"));
        
                console.log("Hola" + nombre + "el juego se ha iniciado");

                }

                

function lanzar_dados() {
   // if (opcion != "a") {
//window.alert(" Primero debes iniciar el juego (opción a).");
       // return;
    
    let dado1 = Math.random() * 6 + 1;
    let dado2 = Math.random() * 6 + 1;
    let suma = dado1 + dado2;

    let tiradaTotal = 0;
    let extras = 0;
    const TIRADAS_EXTRAS = 3;

    for( let intento = 0; intento <= TIRADAS_EXTRAS; intento++) {




        window.alert("El jugador"+ nombre+" ha sacado" + dado1 +" y " + dado2 +" Total: " + suma );
        tiradaTotal += suma;

        if (dado1 === dado2) {
            extras++;
            if (intento === TIRADAS_EXTRAS) {
                window.alert("Demasiados dobles. Pierdes el turno.");
                tiradaTotal = 0;
        
            } else {
                alert(" Dobles! Tirada extra.");
            }
        
    }

    window.alert("Puntuación final de este turno: " + tiradaTotal );
}

}



