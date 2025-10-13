function calificacion() {
    let nota =Math.round(Number(prompt("Ingrese su nota: ")));

    switch(true) {
        case (nota <5):
            console.log("Insuficiente");
            break;
        case (nota == 5):
            console.log("Suficiente");
            break;
        case (nota == 6):
            console.log("Bien");
            break;
        case (nota > 6 && nota <9):
            console.log("Notable");
            break;
        case (nota >= 9 && nota <=10):
            console.log("Sobresaliente");
            break;
        default:
            console.log("Nota no valida");
    }
}


function esBisiesto(){
    let anio = Number(prompt("Ingrese un año: "));

    if (isNaN(anio)){
        console.log("No es un número válido");
        
    }


    if((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)){
        console.log("El año " + anio + " es bisiesto");
    } else {
        console.log("El año " + anio + " no es bisiesto");
    }
}

let palabras = "abcdefghijklmnopqrstuvwxyz";
let caracteres = "123456789()/=*#?";
function generadorContraseña(fuerte){
    let contraseña = "";
    let caracteresPosibles;
    let numero= Number (prompt("Intruduce un numero de caracteres"));

    if (isNaN(numero) || numero <= 0){
        console.log("No es un número válido");
        return;
    }

    if(fuerte){
        caracteresPosibles= palabras +caracteres;
    }else {
        caracteresPosibles= palabras;
    }

    for( let i=0;i< numero;i++){
        let indice_aleat=Math.floor(Math.random()*caracteresPosibles.length);
        contraseña += caracteresPosibles.charAt(indice_aleat);
    }
    console.log("Tu contraseña es: " + contraseña);
    return contraseña;
}


let numero = Number(prompt("Introduce un número para sumar de forma recursiva"));

function suma(numero){

    if (numero === 1){
        return 1;
    }else{
        return numero + suma(numero - 1);
    }
    console.log("El resultado es: " + suma(numero));
}