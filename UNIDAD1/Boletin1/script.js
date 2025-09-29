        //Ejercicio 2
        
        function pintar_ruta(){
            console.log("El acceso a la ruta C:\\usuario\\tarda 1'23\",algo considerado\ 'lento' en la actualidad." );

            }

        //Ejercicio 3
        function pintar_ruta_v2(){
            var substrng1 = "El acceso a la ruta C:\\usuario\\tarda 1'23\,algo" ;

            var substrng2 = "considerado \ 'lento' \ en la actualidad.";
                console.log(substrng1 + substrng2);
                    }



        //Ejercicio 1
        function saludar(){
            var edad = window.prompt("Introduce tu edad");
            if (edad >= 18){
                console.log("Eres mayor de edad");

            }else{
                console.log("Eres menor de edad");
            }
        }


        //Ejercicio 4
        function mostrar_potencia() {
                var num =2*Math.pow(10,-9);
                   console.log("El valor de 2*10^-9 es : " + num);
        }
   

        //Ejercicio 5
        function mostrar_n_distintas_bases(num){
            //transforma a binario
            var numDecimal = num.toString(2);

                console.log (numDecimal);
        }
       
        //Ejercicio 6
        function division_operar(num){
            var resultado = num /0;
            var total = resultado + 23;
            console.log("Resultado de dividir " + total)
        }

        //Ejercicio 7



        //Ejercicio 10
        function check_ambito_variable(){
            let prueba = 5;
            console.log("la variable de prueba tiene como valor " + prueba);

        {
            let prueba2 = 10;
             console.log("Insisto, la variable de prueba tiene el valor" +  prueba + "también dentro del bloque anidado" );
             console.log("Además, el bloque anterior alberga la variable prueba2  que tiene el valor "+  prueba2);

        }

        console.log("Por último, desde el el bloque principal, intento acceder al valor de una variable interna: "+prueba);
            
    }


        //Ejercicio 11
        function definir_array(){
            let array = ["Alberto", "Juan" , "Sofía", "Pepe"];

           /* for(let i = 0; i < array.length; i ++){
                console.log(array[i]);
            }*/

                console.table(array);
        }

        //Ejercicio 12
        function contar_y_temporizar(){
            let valor = 0;

            let iniTime = new Date();
            for( let i =0; i<100000;i++){
                valor = valor +10;
            }
            let endTime = new Date();
            console.log("Valor : " + valor);
            console.log("El algoritmo ha tardado " + (endTime - iniTime) + " segundos");
        }

        //Ejercicio 14
        function confirmar(){
        let respuesta=prompt("¿Estás seguro de su acción?")
        }

        //Ejercicio 15

         function pedir_nombre(){
        
         let seguir =true;

            while(seguir){
             let nombre = window.prompt("¿Cuál es tu nombre?");
             console.log("Hola" + nombre);
      
             seguir= window.confirm(` ¿quieres continuar el programa?`);
                console.log("Has decidido continuar" + seguir)
        }

                 // Mostrar "FIN DEL PROGRAMA" en la consola con estilo
                console.log("%cFIN DEL PROGRAMA", "font-weight: bold; text-decoration: underline; color: blue;");
        
            }
       
    
        //Ejercicio 16

        function pedir_datos(){
            let edad = document.getElementById("edad").value;

            let nombre =document.getElementById("nombre").value;

            let ciudad = document.getElementById("ciudad").value;
            let direccion = document.getElementById("direccion").value;
            let  numTelf = document.getElementById("numTelf").value;
           

           
            if (edad**5== numTelf|| ciudad.toUpperCase === "Mairena del Alcor".toUpperCase){


                console.log("Enhorabuena!!!!");
            }else{
                console.log("Ohhh, lo siento!");
            }
        }

        //Ejercicio 17
            function contar_cifras(){
             let numero = Math.abs(prompt("Introduce un número:"));
             var cifras =0;
             while (numero >=1){
                cifras ++;
                numero = numero/10;
             }
           
            
            numero= number(prompt("Introduce un número: "));
                }   

                 console.log("El número tiene "+ cifras + " cifra(s).");
           
          //Ejercicio 18

                function etapa_vida(){
                    let edad = document.getElementById("edad");
                    switch(true){
                        case edad >=0 && edad <=16:
                                pintar_mensaje("Eres un niño", true);
                                break;
                        case edad > 16 && edad <=25:
                                 pintar_mensaje("Eres un niño", true) ;
                                 break;
                        case edad >25 && edad <=60:
                                pintar_mensaje("Eres un adulto", true);
                                break;
                        case edad > 60:
                                pintar_mensaje("Eres un senior", true);
                                break;
                        default:
                            pintar_mensaje("Error,edad introducida no válida", false);
                            break
                        
                        
                    }
                }
                function pintar_mensaje(mensaje, isOk){
                    let aviso = document.getElementById("aviso");
                    aviso.textContent = mensaje;
                    if(isOk){
                        aviso.style.color ="green";
                    }else{aviso.style.color = "red";
                        }
                    }
                //Ejercicio 19

                function acierta_aleatorio(){
                   
                    const aleat = Math.trunc((Math.random()*10)+1);
                    let intento = 0;

                     alert("Se ha calculado un número aleatorio,¿eres capaz de acertarlo?");

                        do {
                            intento ++;
                            var valor_intento = Number(prompt("Intento" + intento));
                        }while(valor_intento != aleat);
                    
                        
                        console.log("Enhorabuena, has acertado, el número aleatorio era " + aleat );
                        console.log(" Has necesitado " + intento+ " intentos");
}
                //Ejercicio 20

                function imprime_multiplos(){
                    let n = Number(prompt("Introduce un número"));
                    let multiplo = 0;
                    const max =100;
                    for (let i =n+1 ; i< max; i++){
                        if(i%n == 0){
                            multiplo++;
                            console.log("Múltiplo encontrado " + i);
                        }
                    }

                    console.log("El número " + n + " tiene " + multiplo + " múltiplos");
                }