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
    var ventana = window.open("https://www.google.es", "nuevaVentana");
    ventana === null || ventana === void 0 ? void 0 : ventana.document.write("HOLA");
}
//Ejercicio 4
function ej4() {
    var regExp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regExp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Por favor introduzca una URL válida");
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
//Ejercicio 5
//Ejercicio 6 
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
