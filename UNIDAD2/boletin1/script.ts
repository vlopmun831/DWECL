//Ejercicio1
function ej1(): void{
    let fecha: Date = new Date();
    console.log("Hoy es: " + fecha.getDay()+ "/" +(fecha.getMonth() + 1)+ "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours()+ ":" +fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours()+1)+ ":" +fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours()-1)+ ":" +fecha.getMinutes() + ":" + fecha.getSeconds());


}
//Ejercicio2

function ej2(): {

    let expReg: RegExp = new RegExp()

    if(document.getElementById("email") != null){
    let email = HTMLInputElement = document.getElementById("email") as HTMLInputElement ;
            let mensajeOk = new document.createElement('span');

    if(expReg.test(email.value)){
        mensajeOk.textContent = "Email correcto";

    }else{
        mensajeOk.textContent = "Email incorrecto";
    }
}
}