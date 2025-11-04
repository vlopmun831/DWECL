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
    if (edad >= 18) {
        mayorMenor.textContent = "Eres mayor de edad";
    }
    else {
        mayorMenor.textContent = "Eres menor de edad";
    }
    var parOImpar = document.createElement("li");
    if (edad % 2 == 0) {
        parOImpar.textContent = "Tu edad es par";
    }
    else {
        parOImpar.textContent = "Tu edad es impar";
    }
    var divisores = " ";
    for (var i = 1; 1 <= edad; i++) {
        if (edad % i == 0) {
            divisores += i + ",";
        }
    }
    divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)
    var listaDivisores = document.createElement("li");
    listaDivisores.textContent = divisores;
    var rangoEdad = "";
    switch (true) {
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }
    var edadTexto = document.createElement("li");
    edadTexto.textContent = rangoEdad;
    lista.appendChild(mayorMenor);
    lista.appendChild(parOImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}
function mini_app() {
    var nombre = prompt("Dime tu nombre");
    var p = document.getElementById("saludo");
    p.textContent = "Hola, " + nombre + "!";
    var desplegable = document.createElement("select");
    var colores = ["rojo", "verde", "azul", "negro"];
    colores.forEach(function (color) {
        var option = document.createElement("option");
        option.value = color;
        option.text = color[0].toUpperCase() + color.slice(1);
        desplegable.appendChild(option);
    });
    // Cambiar color 
    desplegable.addEventListener("change", function () {
        p.style.color = desplegable.value;
    });
    document.body.appendChild(desplegable);
}
function mostrar_informacion() {
    var mostrarInformacion = document.getElementById("menuInformacion");
    mostrarInformacion.addEventListener("change", function () {
        var valor = mostrarInformacion.value;
        switch (valor) {
            case "idioma":
                console.log(navigator.language);
                break;
            case "nombre":
                console.log(navigator.userAgent);
                break;
            case "cookies":
                console.log(navigator.cookieEnabled);
                break;
            case "pantalla":
                console.log(window.innerWidth + "x" + window.innerHeight);
                break;
        }
    });
}
function mini_navegador() {
    var inputUrl = document.getElementById('urlInput');
}
//EJERCICIOS DE RECORRER NODOS
function contarElementos() {
    var lista = document.getElementById("lista");
    console.log("La lista tiene " + lista.children.length + " personas");
}
function primerYUltimo() {
    var _a, _b;
    var lista = document.getElementById("lista");
    console.log("El primer elemento de la lista es: " + ((_a = lista.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent));
    console.log("El último elemento de la lista es: " + ((_b = lista.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent));
}
function duplicarElemento() {
    var lista = document.getElementById("lista");
    var unidades = Array.from(lista.children);
    var numero = Number(prompt("Dime el número de la lista que quieres duplicar"));
    var textoduplicado = unidades[numero - 1].textContent;
    var nuevo = document.createElement("li");
    nuevo.textContent = textoduplicado;
    lista.appendChild(nuevo);
}
function modificarElemento() {
    var lista = document.getElementById("lista");
    var unidades = Array.from(lista.children);
    var numero = Number(prompt("Dime el número de la lista que quieres modificar"));
    var textomodificado = unidades[numero - 1].textContent = "Juan";
}
function mostrarTodos() {
    var lista = document.getElementById("lista");
    var unidades = Array.from(lista.children);
}
function añadirElemento() {
    var lista = document.getElementById("lista");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = prompt("Dime a quién quieres añadir:");
    lista.appendChild(nuevoElemento);
}
function eliminarElemento() {
    var lista = document.getElementById("lista");
}
