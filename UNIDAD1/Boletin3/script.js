let colores = ["#FFD1DC", "#FFE5B4", "#FFFACD", "#BFD8B8", "#AEC6CF", "#CBAACB", "#E3E4FA", "#AAF0D1", "#FF7F50", "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i < ejercicios.length; i++){
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
};

function contar_cifras(){
    let num = window.prompt("Dime un número: ");

    let contador = 0;
    if (num == 0){
        contador = 1;

        console.log("El número sólo tiene una cifra");
        }
        else{
        

    while (num > 0 ){
        num = Math.floor(num/10);
        contador++;
    }
}
console.log("El número tiene " + contador + " cifras");
}


function pinta_triangulo(){

    let n = prompt("Dime la cantidad de puntos de que está compuesto tu triángulo");

 let triangulo = "";

  
  for (let i = 1; i <= n; i++) {
    triangulo += "\n";
     triangulo += " ".repeat(n-i);
     triangulo += "*".repeat(2*i - 1);

        }
        
  
  console.log(triangulo);


}


function calcula_maximo_minimo(){
    let lista_numeros = [];
    let numeros = 0;
    let opcion = "";
        do {
         opcion = prompt(
            "Elige una opción:\n" +
            "a. Introducir un nuevo número\n" +
            "b. Calcular máximo\n" +
            "c. Calcular mínimo\n" +
            "d. Calcular media\n" +
            "e. Salir");


                    switch (opcion.toLowerCase()) {
            case "a":
                      let  numero = prompt("Introduce un número: ");
                        lista_numeros.push(numero);
                        numeros++;
                        console.table(lista_numeros);

                    break;
            case "b":
                    
            break;
            case "c":
                console.log("El área del círculo es: " + calcular_area_circulo());

            break;
            case "d":
            alert("Saliendo del programa...");
            break;
            default:
            alert("Opción no válida. Inténtalo de nuevo.");
        }
        
        } while ((opcion.toLowerCase()) !== "d");


        
    }
    function calcular_maximo(lista_numeros){
        let max;
        for (let i =0; i < lista_numeros.length; i++){

            if(lista_numeros > max){

            }
        }

    }

    function calcular_minimo(lista_numeros){


    }