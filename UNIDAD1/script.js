        function pintar_ruta(){
            console.log("El acceso a la ruta C:\\usuario\\tarda 1'23\",algo considerado\ 'lento' en la actualidad." );

            }

        function pintar_ruta_v2(){
            var substrng1 = "El acceso a la ruta C:\\usuario\\tarda 1'23\,algo" ;

            var substrng2 = "considerado \ 'lento' \ en la actualidad.";
                console.log(substrng1 + substrng2);
                    }




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
       
    