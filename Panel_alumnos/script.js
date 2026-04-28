const tablaAlumnos = document.querySelector('#tabla-alumnos tbody');
const tablaSeleccionados = document.querySelector('#tabla-seleccionados tbody');
const containerDestino = document.getElementById('container-seleccionados');
const modal = document.getElementById('modal-formulario');
const form = document.getElementById('form-alumno');

// 1. Abrir y Cerrar Modal
document.getElementById('btn-nuevo').addEventListener('click', () => modal.style.display = 'flex');
document.getElementById('btn-cancelar').addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
});

// 2. Añadir alumno a la primera tabla
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    
    const fila = document.createElement('tr');
    fila.draggable = true;
    fila.id = 'alumno-' + Date.now(); // ID único
    
    fila.innerHTML = `
        <td>${nombre} ${apellidos}</td>
        <td>${edad}</td>
    `;

    // Evento de inicio de arrastre
    fila.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', fila.id);
    });

    tablaAlumnos.appendChild(fila);
    modal.style.display = 'none';
    form.reset();
});

// 3. Lógica de Drag & Drop (Soltar en la tabla de Seleccionados)
containerDestino.addEventListener('dragover', (e) => {
    e.preventDefault();
    containerDestino.classList.add('drag-over');
});

containerDestino.addEventListener('dragleave', () => {
    containerDestino.classList.remove('drag-over');
});

containerDestino.addEventListener('drop', (e) => {
    e.preventDefault();
    containerDestino.classList.remove('drag-over');
    
    const idAlumno = e.dataTransfer.getData('text/plain');
    const filaOriginal = document.getElementById(idAlumno);
    
    if (filaOriginal) {
        // Clonamos la fila o simplemente la movemos
        tablaSeleccionados.appendChild(filaOriginal);
    }
});

// 4. Botón Enviar
document.getElementById('btn-enviar').addEventListener('click', () => {
    const filas = tablaSeleccionados.querySelectorAll('tr');
    if (filas.length === 0) {
        alert("No has seleccionado a ningún alumno.");
        return;
    }

    let nombres = [];
    filas.forEach(f => {
        nombres.push(f.cells[0].innerText);
    });

    alert("Los alumnos seleccionados son: " + nombres.join(", "));
});