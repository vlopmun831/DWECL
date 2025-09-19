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




        //Ejercicio 15

            function pedir_nombre(){
        // Pedir el nombre de usuario
            let nombre = window.prompt("¿Cuál es tu nombre?");

        // Preguntar si quiere abandonar el programa
            let respuesta = window.confirm(`Hola ${nombre}, ¿quieres abandonar el programa?`);

        //  Mostrar la respuesta del usuario
            if (respuesta) {
                window.alert("Has decidido abandonar el programa.");
                } else {
                    window.alert("Has decidido continuar en el programa.");
                }
            }
        // Mostrar "FIN DEL PROGRAMA" en la consola con estilo
                console.log("%cFIN DEL PROGRAMA", "font-weight: bold; text-decoration: underline; color: blue;");
        
    
        //Ejercicio 16

        function pedir_datos(){
            let edad = window.prompt("Dime tu edad");

            let nombre = window.prompt("Dime tu nombre");

            let ciudad = window.prompt("Dime tu ciudad");
            let direccion = window.prompt("Dime tu dirección");
            let  numTelf = window.prompt("Dime tu teléfono");

            let telefono = BigInt(numTelf);
            let edadBigInt = BigInt(edad);
            let potencia = edadBigInt **5n;
            if (potencia == telefono ){

            }else if (ciudad == "Mairena del Alcor"){

                window.alert("Enhorabuena!!!!");
            }else{
                window.alert("Ohhh, lo siento!");
            }
        }