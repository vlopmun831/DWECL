//Variables globales 
var nick1 = "";
var nick2 = "";
var puntos1 = 0;
var puntos2 = 0;
var tiradas1 = 0;
var tiradas2 = 0;
var maxTirada1 = 0;
var maxTirada2 = 0;

var meta = 0;
var juegoIniciado = false;
var turnoJugador1 = true; 

// Constantes
const LIMITE_REPETICIONES = 5;

window.onload = function(){

    registro_jugadores();
    iniciar_juego();


}
function registro_jugadores() {

        nick1 = window.prompt("Bienvenido, introduce el nick del Jugador 1:");
    
        nick2 = window.prompt("Introduce el nick del Jugador 2:");
        meta = Number(prompt("Introduce una meta para ganar el uego:"));
        if (isNaN(meta) || meta <= 0 || meta % 1 !== 0) {
          window.alert("Error: Introduce un número entero positivo.");  
        }else{

    console .log("Jugadores registrados: " + nick1 + " y " + nick2);
    console .log("Meta:  " +  meta+ " puntos"  );
        }

}

function iniciar_juego() {
    if (nick1 === "" || nick2 === "") {
        window.alert("Primero debéis registrar los nicks.");
        console.log("Primero debéis registrar los nicks.");
    }
    do {
        if (isNaN(meta) || meta <= 0 || meta % 1 !== 0) {
            alert("Error: Introduce un número entero positivo.");
        }
    } while (isNaN(meta) || meta <= 0 || meta % 1 !== 0);

    juegoIniciado = true;
    console.log("¡Comienza el juego! Meta: " + meta);
    menu_juego();


}

function menu_juego(){
    var opcion = "";

   do{
     opcion = window.prompt("Bienvenidos al juego de la peonza.Turno de :  " + (turnoJugador1 ? nick1 : nick2) 
        + "\n A. Lanzar Peonza"
        + "\n B. Terminar Partida"); 
       
        console.log("La opcion elegida ha sido: " + opcion);

          if (opcion !== null) {
            opcion = opcion.toUpperCase();
            switch (opcion) {
                case "A":
                    lanzarPeonza();
                    break;
                case "B":
                    mostrarEstadisticas("Partida terminada ");
                    opcion = "B"; 
                    break;
                default:
                    alert("Opción no válida.");
            }
        }

        if (puntos1 >= meta || puntos2 >= meta) {
            mostrarEstadisticas("Fin de la partida");
            opcion = "B";
        }

    } while (opcion !== "B");
}

function lanzarPeonza() {
    var repetirTurno = true;
    var contador=0;
    while(repetirTurno){
        var nombreJugadorActual =turnoJugador1 ? nick1:nick2;
        console.log("Lanzamiento de : "+ nombreJugadorActual);
        var resultado = Math.floor(Math.random()*10 +1);
        console.log(nombreJugadorActual + " ha sacado " + resultado + "puntos");
          if (turnoJugador1) {
            tiradas1++;
            if (resultado > maxTirada1) maxTirada1 = resultado;
        } else {
            tiradas2++;
            if (resultado > maxTirada2) maxTirada2 = resultado;
        }

           switch(resultado) {
            case 3: // Regla del3
                console.log("¡Mala suerte! Puntos a cero y pierdes turno.");
                if (turnoJugador1) puntos1 = 0; else puntos2 = 0;
                repetirTurno = false;
                break;
            case 5: // Regla del 5
                contador++;
                if (contadorCincos > LIMITE_REPETICIONES) {
                    console.log("Límite de cincos superado. Puntos a 0.");
                    if (turnoJugador1) puntos1 = 0; else puntos2 = 0;
                    repetirTurno = false;
                } else {
                    if (turnoJugador1) puntos1 += resultado; else puntos2 += resultado;
                    console.LOG("Sumas y vuelves a tirar.");
                    
                }
                break;

            default: 
                if (turnoJugador1) puntos1 += resultado; else puntos2 += resultado;
                repetirTurno = false; 
        }
        
        
        if (puntos1 >= meta || puntos2 >= meta) repetirTurno = false;
    }
    }
function mostrarEstadisticas(mensaje) {
    var ganador = "";
    if (puntos1 > puntos2) ganador = nick1;
    else if (puntos2 > puntos1) ganador = nick2;
    else ganador = "Empate";

    var estadisticas = mensaje + "\n\n" +
        "GANADOR: " + ganador + "\n\n" +
        nick1 + 
        "Tiradas: " + tiradas1 + "\n" +
        "Máxima: " + maxTirada1 + "\n" +
        " Media: " + (tiradas1 > 0 ? (puntos1 / tiradas1).toFixed(2) : 0) + "\n\n" +
        nick2 +  
        "Tiradas: " + tiradas2 + "\n" +
        "Máxima: " + maxTirada2 + "\n" +
        " Media: " + (tiradas2 > 0 ? (puntos2 / tiradas2).toFixed(2) : 0);

    
    console.log(estadisticas);
}

        
    
    turnoJugador1 = !turnoJugador1;



