// Variable global para saber qué estamos moviendo
let elementoArrastrando = null;

// Función para asignar eventos de arrastre a un alumno
function asignarEventosDrag(alumno) {
    alumno.addEventListener("dragstart", (e) => {
        elementoArrastrando = e.target;
        e.target.classList.add("dragging");
    });

    alumno.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
        elementoArrastrando = null;
    });
}

window.onload = () => {
    //  formulario  oculto
    document.getElementById("form").style.display = "none";

    let alumnosIniciales = document.getElementsByClassName("alumno");
    
    for (let alumno of alumnosIniciales) {
        asignarEventosDrag(alumno);
    }
};

// abrimos formulario
document.getElementById("new").addEventListener("click", () => {
    document.getElementById("form").style.display = "flex"; // Cambiado a flex para que el modal funcione bien
});

// añadimos alumno
document.getElementById("add").addEventListener("click", () => {
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let eda = document.getElementById("edad").value;

    if (!nom || !ape || !eda) {
        alert("Por favor, rellena todos los campos.");
        return;
    }
   
    // creamos el elemento li(alumno)
    let li = document.createElement("li");
    li.className = "alumno";
    li.draggable = true;
    li.textContent = nom + " " + ape + " " + eda;

    //  evento de arrastre al nuevo alumno creado
    asignarEventosDrag(li);

    // lo metemos en la lista de alumnos y cierro/limpio formulario
    document.getElementById("listaAlumnos").appendChild(li);
    document.getElementById("form").style.display = "none";
    

    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
});

//  DRAG & DROP 
let zonaDestino = document.getElementById("selecteds");

// arrastrando
zonaDestino.addEventListener("dragover", (e) => {
    e.preventDefault(); 
});

// Cuando soltamos el elemento
zonaDestino.addEventListener("drop", () => {
    if (elementoArrastrando !== null) {
        // Lo movemos a la lista de seleccionados
        document.getElementById("listaSelected").appendChild(elementoArrastrando);
        elementoArrastrando = null; // Limpiamos la variable
    }
});

// Alert final para mostrarme a los alumnos seleccionados
document.getElementById("btn-enviar").addEventListener("click", () => {
    let listaFinal = document.getElementById("listaSelected");
    let seleccionados = listaFinal.getElementsByTagName("li");

    if (seleccionados.length === 0) {
        alert("No has seleccionado a nadie todavía.");
    } else {
        let texto = "Los alumnos seleccionados son:\n";
        for (let i = 0; i < seleccionados.length; i++) {
            texto += "- " + seleccionados[i].textContent + "\n";
        }
        alert(texto);
    }
});
