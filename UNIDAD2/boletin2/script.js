//  Crea en html un título de Nivel 1 del tipo “Hola Mundo”.
//   Posteriormente crea un botón que al pulsarlo pida al usuario vía prompt un nuevo título y
//    que al confirmar este título cambie por aquello que acabamos de introducir. 
window.onload = function () {
    mostrar_informacion();
};
function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo título");
    console.log(titulo);
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
// Crea un botón que al pulsarlo cambie el color de fondo del body a oscuro
//  y al volver a pulsarlo a claro. 
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
//  Realiza un formulario que pida la edad a una persona.
//   Al presionar el botón de envío debemos recoger dicha edad 
//   en una variable numérica y mostrar en el documento
//    el siguiente texto: (Ten en cuenta que todo debe ser mostrado
//    en una estructura de lista ordenada por letras. 
//    En negrita y color verde) a. Eres mayor/menor de edad
//    b. Tu edad es par/impar 
//    c. Los divisores de tu edad son: N1, N2, N3….ç
//    d. Según tu edad eres: Niño (0-15), Joven (15-30),
//    Adulto (30–60), Mayor (>60)
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
    for (var i = 1; i <= edad; i++) {
        if (edad % i == 0) {
            divisores += i + ",";
        }
    }
    // divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)
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
// 4. Crea una mini app que: a. Pregunte el nombre del usuario con un prompt().
//  b. Lo muestre en pantalla dentro de un <p id="saludo">Hola, ___!</p>.
//   c. Permita cambiar el color del saludo mediante un <select> con varios colores.
//   d. Usa as HTMLSelectElement y as HTMLParagraphElement 
//   para los elementos del DOM. 
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
}
function cambiar_color() {
    var select = document.getElementById("color");
    var colorOption = select.options[select.selectedIndex];
    var color = colorOption.value;
    var saludo = document.getElementById("saludo");
    saludo.style.color = color;
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
    var url = inputUrl.value;
    url = "https:\\" + url;
    window.location.href = url;
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
    for (var i = 0; i < unidades.length; i++) {
        console.log(unidades[i].textContent);
    }
}
function añadirElemento() {
    var lista = document.getElementById("lista");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = prompt("Dime a quién quieres añadir:");
    lista.appendChild(nuevoElemento);
}
function eliminarElemento() {
    var lista = document.getElementById("lista");
    var unidades = Array.from(lista.children);
    var numero = Number(prompt("Dime que número quieres eliminar"));
    lista.removeChild(unidades[numero - 1]);
}
function ordenarLista() {
    var lista = document.getElementById("lista");
    var unidades = Array.from(lista.children);
    var nombres = [];
    for (var i = 0; i < unidades.length; i++) {
        nombres.push(unidades[i].textContent);
    }
    console.log(nombres.sort());
}
function cuadricula_alumnos() {
    var contenedor = document.getElementById("contenedor");
    var alumnos = ["Juan", "Pepe", "María", "Bruno", "Jimena", "Vanesa", "Jesús"];
    contenedor.innerHTML = "";
    for (var i = 0; i < alumnos.length; i++) {
        contenedor.appendChild(crear_ficha(alumnos[i]));
    }
}
function crear_ficha(alumno) {
    var ficha = document.createElement("div");
    ficha.textContent = alumno;
    ficha.style.backgroundColor = color_aleatorio();
    return ficha;
}
function color_aleatorio() {
    var colores = [
        "#E74C3C", // rojo
        "#8E44AD", // violeta
        "#3498DB", // azul
        "#1ABC9C", // turquesa
        "#27AE60", // verde
        "#F39C12", // naranja
        "#D35400", // marrón
        "#C0392B", // rojo oscuro
        "#2ECC71", // verde claro
        "#9B59B6", // lila
        "#16A085", // verde azulado
    ];
    var i = Math.floor(Math.random() * colores.length);
    return colores[i];
}
function ejercicio_cookie() {
    var cookieIdioma = "lang-ES;";
    var cookieCurrency = "currency=EUR;";
    document.cookie = "";
    document.cookie = cookieIdioma;
    document.cookie = cookieCurrency;
    //Leer cookies
    var arrayCookies = document.cookie.split(";");
    arrayCookies.forEach(function (cookie) { return console.log("Cookie: " + cookie); });
    //Leemos una en concreto(lang)
    var valor = "";
    for (var i = 0; i < arrayCookies.length; i++) {
        var claveValor = arrayCookies[i].split("=");
        if (claveValor[0].trim() == "lang") {
            valor = claveValor[1];
        }
    }
}
function almacenar_cookie() {
    var cookieUsuario;
}
