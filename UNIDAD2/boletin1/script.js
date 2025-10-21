//Ejercicio1
function ej1() {
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDay() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
//Ejercicio2
function ej2() {
    var regExp = new RegExp("[^\s@]+ @[^\s@] + \.[^\s@]+$");
    if (regExp.test($inputValue("email"))) {
        $writeNode("ok", "El email es válido");
        $writeNode("error", "");
    }
    else {
        $writeNode("ok", "");
        $writeNode("error", "El email no cumple la expresión");
    }
}
//Ejercicio3
function ej3() {
}
//Ejercicio 4
function ej4() {
}
//Helpers para todo el boletin
function $inputValue(id) {
    var input = document.getElementById(id);
    var result = "";
    if (input) {
        result = input.value;
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id);
    if (nodo) {
        nodo.textContent = msg;
    }
}
