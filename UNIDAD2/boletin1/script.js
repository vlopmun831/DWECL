//Ejercicio1
function ej1() {
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDay() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
var expReg = new RegExp();
if (document.getElementById("email") != null) {
    var email = HTMLInputElement = document.getElementById("email");
    var mensajeOk = new document.createElement('span');
    if (expReg.test(email.value)) {
        mensajeOk.textContent = "Email correcto";
    }
    else {
        mensajeOk.textContent = "Email incorrecto";
    }
}
