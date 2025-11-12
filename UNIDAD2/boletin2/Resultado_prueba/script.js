//  window.onload = function() {
//     cargar_datos_cookie();
//   };
function ejecutar_accion() {
    var select = document.getElementById('opciones');
    var opcion = select.value;
    switch (opcion) {
        case ("1"):
            nombre_reves();
            break;
        case ("2"):
            redirigir();
            break;
        case ("3"):
            calcula_edad();
            break;
        case ("4"):
            almacena_coockies();
            break;
        default:
            console.log("Opción no válida");
            break;
    }
    function nombre_reves() {
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
        resultado.textContent = " ";
        var errorparrafo = document.createElement("p");
        errorparrafo.style.color = "red";
        errorparrafo.style.fontWeight = "bold";
        errorparrafo.textContent = "Debe incluir la cabecera https:// en la URL";
        resultado.appendChild(errorparrafo);
    }
    function redirigir() {
        var input2 = document.getElementById("apellido");
        var input = document.getElementById("url");
        var url = input.value;
        var regexp = new RegExp("^https:\/\/");
        if (regexp.test(url)) {
            var apellido = input2.value.split(" ")[0];
            var direccion = url + "/search?q=" + apellido;
            window.location.href = direccion;
        }
        else {
            mensaje_error();
        }
    }
    function calcula_edad() {
        var input = document.getElementById("fechaNacimiento");
        var fechaNacimiento = input.valueAsDate;
        var resultado = document.getElementById("resultado");
        var fechaActual = new Date();
        var anioActual = fechaActual.getFullYear();
        var edad = anioActual - fechaNacimiento.getFullYear();
        resultado.textContent = "Tienes " + edad + " años";
    }
    function almacena_coockies() {
        var input = document.getElementById("nombre");
        var input2 = document.getElementById("apellido");
        var input3 = document.getElementById("edad");
        var input4 = document.getElementById("telefono");
        var input5 = document.getElementById("fechaNacimiento");
        var input6 = document.getElementById("url");
        document.cookie = "nombre=" + input.value;
        document.cookie = "apellido=" + input.value;
        document.cookie = "edad=" + input3.value;
        document.cookie = "telefono=" + input4.value;
        document.cookie = "fechaNacimiento=" + input5.value;
        document.cookie = "url=" + input6.value;
        console.table(document.cookie);
    }
}
