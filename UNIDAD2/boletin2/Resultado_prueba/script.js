function ejecutar_accion() {
    var resultado = document.getElementById("resultado");
    var select = document.getElementById('opciones');
    var opcion = select.value;
    switch (opcion) {
        case ("1"):
            nombreAlReves();
            break;
        case ("2"):
            redirigir();
            break;
        case ("3"):
            calculaEdad();
            break;
        case ("4"):
            coockies();
            break;
    }
    console.log("Opción no válida");
}
function nombreAlReves() {
    var _a;
    var resultado = document.getElementById("resultado");
    var input = document.getElementById("nombre");
    var nombre = input.value;
    var input2 = document.getElementById("fechaNacimiento");
    var fechaNacimiento = input2.valueAsDate;
    var nombreReves = "";
    for (var i = nombre.length - 1; i >= 0; i--) {
        nombreReves += nombre[i];
        resultado.textContent = nombreReves.toUpperCase() + ((_a = input2.valueAsDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
    }
    return nombreReves;
}
function mensaje_error() {
    var resultado = document.getElementById("resultado");
    function redirigir() {
        let;
    }
}
