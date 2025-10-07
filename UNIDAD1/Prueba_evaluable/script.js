window.onload = function(){
const CARAS =6;
let edad = null;
let nombre = null;
let puntuacion_total =0;
let max =0;
let min =Infinity;
let num_total_tiradas =0;
let f_inicio = null;
let f_fin = null;
const LIMIT= 3;

    do {
     var opt= this.prompt("Bienvenidos al juego, marque una opción: "+
        "\n A.Iniciar Juego"+
        "\n B.Lanzar Dados"+
        "\n C.Mostrar estadísticas de juego"+
        "\n D.Salir");
        console.log("la opción elegida ha sido: " + opt);


        switch(opt.toUpperCase()){
            case "A":
                iniciar_juego();
                break;
            case "B":
                if(validar_juego()){
                lanzar_dados();
                }else{
                    console.error("El juego debe iniciarse");
                }
                break;
            case "C":
                if(validar_juego()){
                mostrar_estadisticas();
                }else{
                    console.error("El juego debe iniciarse");
                }
                break;
            case "D":
                salir();
                break;
            default:
                 console.error("La opción marcada no es válida");
        }

    }while(opt.toUpperCase() !=="D");


    function validar_juego(){
        return nombre && edad;
    }

    function iniciar_juego(){
        nombre = prompt("Introduce tu edad");
        edad = Number(prompt("Introduce tu edad"));
        f_inicio = new Date();
        console.log("Bienvenido al juego " + nombre +"¡");
    }

    function lanzar_dados(){

        let turno =0;
        let num_tiradas = 0;
       do {
        var dado1 = Math.floor(Math.random()  * CARAS) + 1;
        var dado2 = Math.floor(Math.random()  * CARAS) + 1;

        console.log("Dados obtenidos:" + dado1 + " y" + dado2);

            turno += (dado1+dado2);
            num_tiradas ++;
            puntuacion_total += (dado1+dado2);

            num_total_tiradas ++;

         }while(dado1 === dado2 && num_tiradas >=LIMIT);

         if (num_tiradas > LIMIT){
            console.log("Mala suerte,has sacado más de " + LIMIT + "iguales. Tu puntuación se resetea");
            turno = 0;
             console.log("Has obtenido " + turno + "puntos en esta tirada");


         
         console.log("Resultado de la tirada: " + turno);
         if (turno>max){
            max = turno;
         }

         if(turno<min){
            min = turno;
         }

        }


    }

    function mostrar_estadisticas(){

        console.log("El valor máximo obtenido es " + max);
        console.log("El valor mínimo obtenido es " + min);
        console.log("Un total de " + num_total_tiradas+ "tiradas");
         console.log("La puntuación media por tirada es " + (puntuacion_total/num_total_tiradas).toFixed(2));




    }


    function salir(){
        f_fin = new Date();
        console.log("Fin del juego. Has estado jugando " + ((f_fin - f_inicio)/1000) + "segundos");
    }
}

