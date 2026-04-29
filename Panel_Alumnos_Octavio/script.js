// Usamos let porque la lista de alumnos crecerá
let elementoArrastrando = null;

// 1. Configurar arrastre para los alumnos que ya existen en el HTML
function inicializarArrastre() {
    let alumnos = Array.from(document.getElementsByClassName("alumno"));
    alumnos.forEach(alumno => {
        alumno.addEventListener("dragstart", (e) => {
            elementoArrastrando = e.target;
        });
        alumno.addEventListener("dragend", () => {
            elementoArrastrando = null;
        });
    });
}

// 2. Configurar el contenedor de destino (Donde soltamos)
let contenedorSeleccionado = document.getElementById("selecteds");
let listaSeleccionados = document.getElementById("listaSelected");

contenedorSeleccionado.addEventListener("dragover", (e) => {
    e.preventDefault(); // Imprescindible para permitir el "drop"
});

contenedorSeleccionado.addEventListener("drop", (e) => {
    e.preventDefault();
    if (elementoArrastrando) {
        // Lo añadimos a la lista UL dentro del contenedor
        listaSeleccionados.appendChild(elementoArrastrando);
    }
});

// 3. Gestión del Formulario al cargar
window.onload = () => {
    document.getElementById("form").style.display = "none";
    inicializarArrastre();
};

// 4. Botón "Nuevo" (Abre el formulario)
document.getElementById("new").addEventListener("click", () => {
    document.getElementById("form").style.display = "block";
});

// 5. Botón "Añadir" (Crea el alumno)
document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();
    
    // Ocultar el formulario
    document.getElementById("form").style.display = "none";
    
    // Crear el nuevo elemento de lista
    let li = document.createElement("li");
    
    // Recoger valores
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    
    li.textContent = `${nombre} ${apellidos} ${edad}`;
    li.draggable = true;
    li.classList.add("alumno");

    // Añadirlo a la lista de alumnos disponibles
    document.getElementById("listaAlumnos").appendChild(li);
    
    // IMPORTANTE: Añadir eventos de arrastre al nuevo alumno
    li.addEventListener("dragstart", (e) => {
        elementoArrastrando = e.target;
    });

    li.addEventListener("dragend", () => {
        elementoArrastrando = null;
    });

    // Limpiar el formulario para la próxima vez
    document.getElementById("form").reset();
  
});

// 6. Botón "Enviar" (Muestra el alert final)
document.getElementById("btn-enviar").addEventListener("click", () => {
    let seleccionados = Array.from(listaSeleccionados.children);
    if (seleccionados.length === 0) {
        alert("No hay alumnos seleccionados.");
        return;
    }
    
    let mensaje = "Los alumnos seleccionados son:\n";
    seleccionados.forEach(li => {
        mensaje += "- " + li.textContent + "\n";
    });
    alert(mensaje);
});