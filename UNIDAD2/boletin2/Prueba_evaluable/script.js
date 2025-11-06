function $inputValue(id) {
    var input = document.getElementById(id);
    var result = "";
    if (input) {
        result = input.value; //Recojo el valor (aqui es donde leo)
    }
    return result;
}
var div = document.getElementById("resultado");
function nombreAlReves() {
    var input = document.getElementById("nombre");
    var nombre = $inputValue("nombre");
    var nombreReves = "";
    for (var i = nombre.length - 1; i = 0; i--) {
        nombreReves += nombre[i];
        div.textContent = nombreReves;
    }
    return nombreReves;
}
function redirigir() {
    var regexp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        div.textContent = "Debe incluir la cabecera https:// en la URL";
    }
}
function calculaEdad() {
    var input = document.getElementById("fechaNacimiento");
    var fechaNacimiento = Number(input.valueAsDate);
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear();
    var edad = anioActual - fechaNacimiento;
    return edad;
}
function gestionarMenu() {
    var select = document.getElementById('opciones');
    var opcion = select.value;
    switch (opcion) {
        case ("1"):
            nombreAlReves();
            break;
        case ("2"):
            redirigir();
            break;
    }
}
