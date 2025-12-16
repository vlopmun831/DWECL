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
    let num =  Math.abs(Number(prompt("Introduce un número: ")));

    let cifras = 0;
    if (num == 0){
        cifras = 1;

        console.log("El número sólo tiene una cifra");
        }
        else{
        

    while (num > 0 ){
        num = Math.floor(num/10);
        cifras++;
    }
}
console.log("El número tiene " + cifras + " cifras");
}


function pinta_triangulo(){

    let n = Math.abs(Number(prompt("Introduce el lado del triángulo: ")));

 let triangulo = "";

  
  for (let i = 1; i <= n; i++) {
    triangulo += "\n";
     triangulo += " ".repeat(n-i);
     triangulo += "* ".repeat(i);
        }
        
  
  console.log(triangulo);


}


function calcula_maximo_minimo_media(){
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
                      let  numero = Number( prompt("Introduce un número: "));
                        lista_numeros.push(numero);
                        numeros++;
                        console.table(lista_numeros);

                    break;

            case "b":
               calcular_maximo(lista_numeros);      
            break;

            case "c":
                calcular_minimo(lista_numeros);
                 break;

            case "d":
                calcular_media(lista_numeros);
                break;

            case "e":
             alert("Saliendo del programa...");
             break;

            default:
            alert("Opción no válida. Inténtalo de nuevo.");
        }
        
        } while ((opcion.toLowerCase()) !== "e");


        
    
    function calcular_maximo(lista_numeros){
        let max = lista_numeros[0];
        for (let i =0; i < lista_numeros.length; i++){

            if(lista_numeros[i] > max) max = lista_numeros[i];
    }
    console.log("El máximo es: " + max);
}

function calcular_minimo(lista_numeros){
    let min = lista_numeros[0];
    for (let i = 1; i < lista_numeros.length; i++){
        if(lista_numeros[i] < min) min = lista_numeros[i];

    }
            console.log("El mínimo es: " + min);

}

function calcular_media(lista_numeros){
    let suma = 0;
    for (let i = 0; i < lista_numeros.length; i++){
        suma += lista_numeros[i];
    }
    let media = suma / lista_numeros.length;
    console.log("La media es: " + media.toFixed(2));
}
}
//   
function generar_nota() {
    // Generamos una nota aleatoria entre 0 y 10
    // Math.random() da entre 0 y 0.99, por eso multiplicamos por 10
    let nota = Math.floor(Math.random() * 10)+1; // Usamos Math.floor para tener enteros (0-10)
    let calificacion = "";

    // Usamos switch(true) para evaluar rangos
    switch (true) {
        case (nota >= 0 && nota <= 4):
            calificacion = "Suspenso";
            break;
        case (nota === 5):
            calificacion = "Suficiente";
            break;
        case (nota === 6):
            calificacion = "Bien";
            break;
        case (nota >= 7 && nota <= 8):
            calificacion = "Notable";
            break;
        case (nota >= 9 && nota <= 10):
            calificacion = "Sobresaliente";
            break;
        default:
            calificacion = "Nota no válida";
    }

    console.log("La nota obtenida es: " + nota + " (" + calificacion + ")");
}