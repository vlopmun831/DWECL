window.onload = function () {
    almacenar_cookie();
};
function almacenar_cookie() {
    var h1 = document.createElement("h1");
    var nombre = window.prompt("Dime tu nombre");
    document.cookie = nombre;
    console.log(document.cookie);
    h1.textContent = "Bienvenido al dashboard de " + nombre;
    document.body.appendChild(h1);
}
function ejecutar() {
    var input = document.getElementById("id");
    var id = input.value;
    var input2 = document.getElementById("descripcion");
    var descripcion = input2.value;
    var tipo = document.getElementById("tipo");
    var opcion = tipo.value;
    switch (opcion) {
        case ("incidencia"):
            var div = document.createElement("div");
            div.innerHTML = "";
            div.style.padding = "40px";
            div.style.backgroundColor = "red";
            div.textContent = 'Id:' + id + ' Descripción: ' + descripcion;
            document.body.appendChild(div);
            break;
        case ("evento"):
            var div2 = document.createElement("div");
            div2.innerHTML = "";
            div2.style.padding = "40px";
            div2.style.backgroundColor = "green";
            div2.textContent = 'Id:' + id + ' Descripción: ' + descripcion;
            document.body.appendChild(div2);
            break;
        case ("tarea"):
            var div3 = document.createElement("div");
            div3.innerHTML = "";
            div3.style.padding = "40px";
            div3.style.backgroundColor = "blue";
            div3.textContent = 'Id:' + id + ' Descripción: ' + descripcion;
            document.body.appendChild(div3);
            break;
    }
}
