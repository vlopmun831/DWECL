function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo título");
    console.log(titulo);
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    var body = document.body;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
function analiza_edad() {
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    console.log(edad);
    var lista = document.getElementById("resultado");
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";
    var mayorMenor = document.createElement("li");
    var parOImpar = document.createElement("li");
    var listaDivisores = document.createElement("li");
    var divisores = " ";
    listaDivisores.textContent = divisores;
    for (var i = 1; 1 <= edad; i++) {
        if (edad % i) {
            divisores += i + ",";
        }
    }
    if (edad >= 18) {
        mayorMenor.textContent = "Eres mayor de edad";
    }
    else {
        mayorMenor.textContent = "Eres menor de edad";
    }
    if (edad % 2 == 0) {
        parOImpar.textContent = "Tu edad es par";
    }
    else {
        parOImpar.textContent = "Tu edad es impar";
    }
    lista.appendChild(mayorMenor);
    lista.appendChild(parOImpar);
    document.body.appendChild(lista);
    lista.appendChild(listaDivisores);
}
function mini_app() {
    var nombre = prompt("Dime tu nombre");
    var p = document.getElementById("saludo");
    p.textContent = "Hola, " + nombre + "!";
    var desplegable = document.createElement("select");
    p.
    ;
}
