let colores = ["#FFD1DC", "#FFE5B4", "#FFFACD", "#BFD8B8", "#AEC6CF", "#CBAACB", "#E3E4FA", "#AAF0D1", "#FF7F50", "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i < ejercicios.length; i++){
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
};

function calcular_fibonacci(){
    let numero = Number(prompt("Introduce un número"));
    let resultado = fibonacci(numero)
    console.log("El valor fib(" + numero + ") es " + resultado);

}


function fibonacci(numero){
    //comprobamos los casos bases
    let resultado;
    if(numero <= 0){
        resultado  = 0;
    }else if (numero === 1){
        resultado  = 1;

    }else{
        //Aqui esta la llamada recursiva
        resultado = fibonacci (numero-1) + fibonacci(numero - 2);
    }
    console.log("Solución para " + numero + ": " + resultado);
    return resultado;
    }
    function calcula_factorial(isRec){
        let num = Number(prompt("Introduce un número"));
        let resultado;
        if(isRec){
            resultado = factorial_recursiva(num);
        }else{
            resultado = factorial_tradicional(num);
        }

        
        console.log("El valor fact(" + num + ") es " + resultado);
    }

    function factorial_recursiva(num){

        if(num === 1){
            return 1;

        }else{
            return num * factorial_recursiva(num -1);
        }
    }

    function factorial_tradicional(num){
        let factorial = 1;
        for( let i=1; i <= num; i++){
        factorial *= i;
        }
        return factorial;
    }


    function transformar_dias_horas(){
        let num_dias = Number(prompt("Introduzca un número de dias: "));
        let horas_dia = num_dias * 24;
        let minutos_hora = horas_dia * 60;
        let segundos_minuto = minutos_hora * 60;



        console.log(num_dias + " dias son " + horas_dia+ " horas ," + minutos_hora + " minutos y "+ segundos_minuto+ " segundos.")

    }

    function calcular_ecuacion(){
        let a = Number(prompt("Introduzca un número A: "));
        let b = Number(prompt("Introduzca un número B: "));
        let c = Number(prompt("Introduzca un número C: "));

        let delta = (Math.pow(b,2) - 4*a*c);
        if (delta < 0){
            console.error("No hay solución a la ecuación");
        }else if (delta == 0){
            let result = (-b /(2*a)).toFixed(2);
            console.log("La solución de " +  a + "x^2 + " + b + "x + " +c + " =0 es (" + result + ")");
        }else{
        let resul1 = (-b + Math.sqrt(delta) )/2*a.toFixed(2);
        let resul2 = (-b - Math.sqrt(delta))/2*a.toFixed(2);
        console.log("El resultado de la ecuación de :" + a + "x^2 " + b + "x" + c + " = 0 es (" + resul1 + ", " + resul2 + ")");
    }
    }
