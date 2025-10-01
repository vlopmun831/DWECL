        //Ejercicio 2. Crea un fichero JavaScript con una única instrucción que sea capaz de pintar por
            // consola la siguiente cadena. El acceso a la ruta C:\\usuario\tarda 1’23”, algo
            // considerado “lento” en la actualidad
        
        function pintar_ruta(){
                console.log("El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo considerado \"lento\" en la actualidad.");

            }

        //Ejercicio 3.Realiza una versión 2 del ejercicio anterior almacenando el valor en dos variables y
            // concatenando el resultado antes y después de la palabra algo
        function pintar_ruta_v2(){
            var substrng1 = "El acceso a la ruta C:\\usuario\\tarda 1'23\,algo" ;

            var substrng2 = "considerado \ 'lento' \ en la actualidad.";
                console.log(substrng1 + substrng2);
                    }



        //Ejercicio 1  Realiza un ejercicio en JavaScript en el que aparezca un botón que al pulsarlo pida
            // a través del prompt la edad y pinte por consola un mensaje del tipo “Eres (o no)
            // mayor de edad” en función del valor introducido.
            // a. Realiza la implementación usando HTML y JavaScript
            // b. Usa el navegador para definir un punto de ruptura en la línea que pinta por
            // consola que eres mayor de edad y prueba a ver como se detiene el debugger
            // o no en función del valor introducido.
        function saludar(){
            var edad = window.prompt("Introduce tu edad");
            if (edad >= 18){
                console.log("Eres mayor de edad");

            }else{
                console.log("Eres menor de edad");
            }
        }


        //Ejercicio 4.Almacena y muestra por consola una variable que almacene el valor de 2*10^-9

        function mostrar_potencia() {
                var num =2*Math.pow(10,-9);
                   console.log("Formato notación científica : " + num);
                       console.log("Formato decimal: " + num.toFixed(10));

        }
   

        //Ejercicio 5.Almacena y muestra por consola el valor de 4 números en distintas bases conocidas
        // (Octal, Decimal, Hexadecimal y Binario)
        function mostrar_n_distintas_bases(num){
            //transforma a binario
            var numDecimal = num.toString(2);

                console.log (numDecimal);
        }
       
        //Ejercicio 6.Realiza una división de cualquier número entre 0 y opera con el resultado (por
            // ejemplo sumale 23 y muestra el resultado.

        function division_operar(num){  //JavaScript no da error al dividir entre 0, devuelve Infinity o -Infinity si el número es negativo.Te dará NaN 
        // si es 0/0, o sea si el numerador también es 0.
            var resultado = num /0;
            var total = resultado + 23;
            console.log("Resultado de dividir y sumar: " + total)
        }

        //Ejercicio 7.Fuerza un NaN
                 // Ejemplo 1: División de 0 entre 0
                        // console.log(0 / 0); // NaN

                // Ejemplo 2: Operación matemática inválida
                        // console.log(Math.sqrt(-1)); // NaN (no existen raíces reales negativas)

                // Ejemplo 3: Convertir texto no numérico en número
                        //  console.log(parseInt("hola")); // NaN

                // Ejemplo 4: Multiplicar un número por algo no numérico
                function forzar_NaN(){
                        console.log(10 * "abc"); 
                }

        //Ejercicio 8. Muestra por pantalla el máximo valor representable por un tipo Number, sumale 100
            // y vuelve a mostrarlo. ¿Ha cambiado su valor? Realiza lo mismo ahora asegurándote
            // que encuentras una solución adecuada para ello.

        function comparar_number_bigint() {
            // ----- Usando Number -----
            var maxNumber = Number.MAX_VALUE;
            console.log("Máximo valor (Number): " + maxNumber);

            var sumaNumber = maxNumber + 100;
            console.log("Máximo valor + 100 (Number): " + sumaNumber);

            // ----- Usando BigInt -----
            // Representamos un número muy grande como BigInt
            var maxBigInt = BigInt("179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
            console.log("Máximo valor aproximado (BigInt): " + maxBigInt);

            var sumaBigInt = maxBigInt + 100n; // Nota: con BigInt usamos 100n
            console.log("Máximo valor + 100 (BigInt): " + sumaBigInt);
                }

          //Ejercicio 9. Crea una variable numérica que almacene un número y otra variable cadena que
            // almacene otro número.
            // a. Realiza la operación suma entre ambas ¿Que ocurre?
            // b. Realiza la operación suma entre ambas asegurándote que el resultado es
            // realmente la suma. ¿Qué has tenido que hacer?

            var numero1 = 5; // Variable numérica
            var cadena = "10"; // Variable cadena que almacena un número
            function suma(){
                var resultado1 = numero1 + cadena; // Concatenación
                console.log("Resultado de la suma (concatenación): " + resultado1);
        }

                //  Para forzar que "5" se convierta a número podemos usar:
                // parseInt(cadena) (si es entero).
                // parseFloat(cadena) (si puede tener decimales).
                // Number(cadena) (convierte a tipo numérico).
            function suma_real(){
                var resultado2 = numero1 + Number(cadena); // Suma numérica
                console.log("Resultado de la suma (numérica): " + resultado2);

            }


        //Ejercicio 10.Crea un bloque de código en JavaScript en el que definas e inicialices dos variables.
            // Cada una de ellas deben ser llamadas a pintar por consola desde fuera de dicha
            // estructura. Identifica que ocurre y crea un comentario de varias líneas dentro del
            // fichero .js.

        function check_ambito_variable(){
            let prueba = 5;
            console.log("la variable de prueba tiene como valor " + prueba);

        {
            var prueba2 = 10;
             console.log("Insisto, la variable de prueba tiene el valor " +  prueba + " también dentro del bloque anidado" );
             console.log("Además, el bloque anterior alberga la variable prueba2  que tiene el valor " +  prueba2);

        }

        console.log("Por último, desde el el bloque principal, intento acceder al valor de una variable interna: "+prueba);
            
    }


        //Ejercicio 11. Busca cómo crear e inicializar un array de datos en JavaScript (Se verá en temas
            // siguientes) y muestra sus valores en formato tabla por consola

        function definir_array(){
            let array = ["Alberto", "Juan" , "Sofía", "Pepe"];

           /* for(let i = 0; i < array.length; i ++){
                console.log(array[i]);
            }*/
           //ESte método es más visual pero en javascript no es tan usado ya que existe .table para mostrar un array

                console.table(array);
        }

        //Ejercicio 12. . Realiza un bucle que de 100 vueltas que simplemente incremente un valor de diez
            // en diez. Realiza un temporizador que calcule el tiempo que ha tardado en recorrer el
            // bucle completamente.

        function contar_y_temporizar(){
            let valor = 0;

            let iniTime = new Date();
            for( let i =0; i<100;i++){
                valor = valor +10;
            }
            let endTime = new Date();
            console.log("Valor : " + valor);
            console.log("El algoritmo ha tardado " + (endTime - iniTime) + " segundos");
        }


        //Ejercicio 13. Muestra el siguiente error por pantalla “Error!. No se ha encontrado ningún valor”

            function mostrar_error() {
                console.error("Error!. No se ha encontrado ningún valor");
            }
    

        //Ejercicio 14.Realiza un ejercicio que al pulsar un botón llamado Eliminar pinte un mensaje de
            // confirmación para asegurarse que el usuario está seguro de su acción.

        function confirmar(){
        let respuesta = prompt("¿Estás seguro de su acción?")
        }


        //Ejercicio 15.Realiza un programa en JavaScript que realice lo siguiente.
            // a. Pida el nombre de usuario y este debe introducir su nombre
            // b. Le pregunte al usuario si quiere abandonar el programa y este deberá
            // Aceptar o Cancelar
            // c. Lance una alerta con la decisión del usuario
            // d. Muestre por consola “FIN DEL PROGRAMA”, en negrita subrayado y de
            // color azul.


         function pedir_nombre(){
        
         let seguir =true;

            while(seguir){
             let nombre = window.prompt("¿Cuál es tu nombre?");
             console.log("Hola " + nombre);
      
             seguir= window.confirm(` ¿quieres continuar el programa?`);
                console.log("Has decidido continuar" + seguir)
        }

                 // Mostrar "FIN DEL PROGRAMA" en la consola con estilo
                console.log("%cFIN DEL PROGRAMA", "font-weight: bold; text-decoration: underline; color: blue;");
        
            }
       

    
        //Ejercicio 16. Realiza un programa que pida por pantalla tu edad, tu nombre, tu ciudad, tu
        // dirección y tu teléfono y que al finalizar muestre un alerta dándote la enhorabuena si
        // la edad de tu cumpleaños elevado a 5 es igual a tu número de teléfono o si
        // simplemente tu ciudad es “Mairena del Alcor”

        function pedir_datos(){
            let edad = Number(document.getElementById("edad").value);

            let nombre =document.getElementById("nombre").value;

            let ciudad = document.getElementById("ciudad").value;
            let direccion = document.getElementById("direccion").value;
            let  telefono = Number(document.getElementById("telefono").value);
           

           
            if (edad**5== telefono|| ciudad.toUpperCase ()=== "Mairena del Alcor".toUpperCase()){


                console.log("Enhorabuena!!!!");
            }else{
                console.log("Ohhh, lo siento!");
            }
        }

        //Ejercicio 17.Haz un programa que dado un número de entrada cuente sus cifras y las muestre
            // por consola.

            function contar_cifras(){
             let numero = Math.abs(Number(prompt("Introduce un número:")));// con el Math convierto a positivo el número
             let cifras =0;
             while (numero >=1){
                cifras ++;
                numero = numero/10;
             }
           
               console.log("El número tiene "+ cifras + " cifras.");

                }   

           
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