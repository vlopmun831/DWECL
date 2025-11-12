function ejecutar_menu() {
    var select = document.getElementById("opcion");
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
            almacena_cookie();
            break;
    }
}
function nombre_reves() {
    var input = document.getElementById("nombre");
    var nombre = input.value;
    var resultado = document.getElementById("resultado");
    var input2 = document.getElementById("fechaNacimiento");
    var fechaNacimiento = (input2.valueAsDate);
    var nombreReves = " ";
    for (var i = nombre.length - 1; i >= 0; i--) {
        nombreReves += nombre[i];
    }
    resultado.textContent = nombreReves.toUpperCase() + fechaNacimiento.getFullYear();
    return nombreReves;
}
function redirigir() {
    var input = document.getElementById("url");
    var url = input.value;
    var expreg = /^https:\/\//;
    var input2 = document.getElementById("apellido");
    var apellido = input2.value;
    var resultado = document.getElementById("resultado");
    if (expreg.test(url)) {
        window.location.href = url + "/search?q=" + apellido;
    }
    else {
        resultado.textContent = "Debe incluir la cabecera de HTTPS";
        resultado.style.color = "red";
    }
}
function calcula_edad() {
    var input = document.getElementById("fechaNacimiento");
    var fechaNacimiento = (input.valueAsDate);
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear();
    var edad = anioActual - fechaNacimiento.getFullYear();
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Tienes " + edad + " años";
    return edad;
}
function almacena_cookie() {
    var input = document.getElementById("nombre");
    var input2 = document.getElementById("apellido");
    var inpu3 = document.getElementById("edad");
    var input4 = document.getElementById("telefono");
    var input5 = document.getElementById("fechaNacimiento");
    var input6 = document.getElementById("url");
    document.cookie = "nombre=" + input.value;
    document.cookie = "apellido=" + input2.value;
    document.cookie = "edad=" + inpu3.value;
    document.cookie = "telefono=" + input4.value;
    document.cookie = "fechaNacimiento=" + input5.value;
    document.cookie = "url=" + input6.value;
    console.log.(document.cookie);
}
