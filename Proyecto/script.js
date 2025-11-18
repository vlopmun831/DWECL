// Ejecutar cuando la página se cargue completamente
window.onload = function () {
    iniciar();
};
// Array de equipos - Datos iniciales de la liga
var equipos = [
    {
        nombre: "Real Madrid",
        puntos: 28,
        partidosJugados: 10,
        partidosGanados: 9,
        partidosEmpatados: 1,
        partidosPerdidos: 0,
        golesFavor: 31,
        golesContra: 8
    },
    {
        nombre: "FC Barcelona",
        puntos: 25,
        partidosJugados: 10,
        partidosGanados: 8,
        partidosEmpatados: 1,
        partidosPerdidos: 1,
        golesFavor: 28,
        golesContra: 10
    },
    {
        nombre: "Atlético Madrid",
        puntos: 23,
        partidosJugados: 10,
        partidosGanados: 7,
        partidosEmpatados: 2,
        partidosPerdidos: 1,
        golesFavor: 24,
        golesContra: 12
    },
    {
        nombre: "Real Sociedad",
        puntos: 20,
        partidosJugados: 10,
        partidosGanados: 6,
        partidosEmpatados: 2,
        partidosPerdidos: 2,
        golesFavor: 21,
        golesContra: 14
    },
    {
        nombre: "Sevilla FC",
        puntos: 18,
        partidosJugados: 10,
        partidosGanados: 5,
        partidosEmpatados: 3,
        partidosPerdidos: 2,
        golesFavor: 19,
        golesContra: 13
    },
    {
        nombre: "Valencia CF",
        puntos: 15,
        partidosJugados: 10,
        partidosGanados: 4,
        partidosEmpatados: 3,
        partidosPerdidos: 3,
        golesFavor: 17,
        golesContra: 16
    },
    {
        nombre: "Athletic Bilbao",
        puntos: 13,
        partidosJugados: 10,
        partidosGanados: 4,
        partidosEmpatados: 1,
        partidosPerdidos: 5,
        golesFavor: 15,
        golesContra: 18
    },
    {
        nombre: "Villarreal CF",
        puntos: 11,
        partidosJugados: 10,
        partidosGanados: 3,
        partidosEmpatados: 2,
        partidosPerdidos: 5,
        golesFavor: 14,
        golesContra: 19
    },
    {
        nombre: "Real Betis",
        puntos: 8,
        partidosJugados: 10,
        partidosGanados: 2,
        partidosEmpatados: 2,
        partidosPerdidos: 6,
        golesFavor: 11,
        golesContra: 21
    },
    {
        nombre: "Getafe CF",
        puntos: 5,
        partidosJugados: 10,
        partidosGanados: 1,
        partidosEmpatados: 2,
        partidosPerdidos: 7,
        golesFavor: 8,
        golesContra: 27
    }
];
/**
 * Función para ordenar los equipos por puntos (de mayor a menor)
 * Usa el algoritmo de ordenación burbuja
 */
function ordenarEquipos() {
    for (var i = 0; i < equipos.length - 1; i++) {
        for (var j = 0; j < equipos.length - 1 - i; j++) {
            // Primero: comparar por puntos
            if (equipos[j].puntos < equipos[j + 1].puntos) {
                // Intercambiar posiciones
                var temp = equipos[j];
                equipos[j] = equipos[j + 1];
                equipos[j + 1] = temp;
            }
            // Si tienen los mismos puntos, comparar por diferencia de goles
            else if (equipos[j].puntos === equipos[j + 1].puntos) {
                var difGoles1 = equipos[j].golesFavor - equipos[j].golesContra;
                var difGoles2 = equipos[j + 1].golesFavor - equipos[j + 1].golesContra;
                if (difGoles1 < difGoles2) {
                    // Intercambiar posiciones
                    var temp = equipos[j];
                    equipos[j] = equipos[j + 1];
                    equipos[j + 1] = temp;
                }
                // Si tienen la misma diferencia, comparar por goles a favor
                else if (difGoles1 === difGoles2 && equipos[j].golesFavor < equipos[j + 1].golesFavor) {
                    var temp = equipos[j];
                    equipos[j] = equipos[j + 1];
                    equipos[j + 1] = temp;
                }
            }
        }
    }
}
/**
 * Función para mostrar la tabla de clasificación en la página
 */
function mostrarTabla() {
    // Ordenar equipos antes de mostrar
    ordenarEquipos();
    // Obtener el elemento tbody de la tabla
    var tbody = document.getElementById('cuerpoTabla');
    if (!tbody)
        return;
    // Limpiar la tabla
    tbody.innerHTML = '';
    // Recorrer todos los equipos
    for (var i = 0; i < equipos.length; i++) {
        var equipo = equipos[i];
        // Crear una nueva fila
        var fila = document.createElement('tr');
        // Añadir color según la posición
        if (i < 3) {
            fila.classList.add('champions');
        }
        else if (i === 3) {
            fila.classList.add('europa-league');
        }
        else if (i >= equipos.length - 3) {
            fila.classList.add('descenso');
        }
        // Crear el contenido de la fila
        fila.innerHTML = "\n            <td class=\"posicion\">".concat(i + 1, "</td>\n            <td class=\"nombre-equipo\">").concat(equipo.nombre, "</td>\n            <td class=\"puntos\"><strong>").concat(equipo.puntos, "</strong></td>\n            <td>").concat(equipo.partidosJugados, "</td>\n            <td>").concat(equipo.partidosGanados, "</td>\n            <td>").concat(equipo.partidosEmpatados, "</td>\n            <td>").concat(equipo.partidosPerdidos, "</td>\n            <td>").concat(equipo.golesFavor, "</td>\n            <td>").concat(equipo.golesContra, "</td>\n        ");
        // Añadir la fila a la tabla
        tbody.appendChild(fila);
    }
}
/**
 * Función para llenar los selectores del formulario con los nombres de los equipos
 */
function llenarSelectores() {
    var selectLocal = document.getElementById('equipoLocal');
    var selectVisitante = document.getElementById('equipoVisitante');
    if (!selectLocal || !selectVisitante)
        return;
    // Recorrer todos los equipos
    for (var i = 0; i < equipos.length; i++) {
        // Crear opción para equipo local
        var opcionLocal = document.createElement('option');
        opcionLocal.value = equipos[i].nombre;
        opcionLocal.textContent = equipos[i].nombre;
        selectLocal.appendChild(opcionLocal);
        // Crear opción para equipo visitante
        var opcionVisitante = document.createElement('option');
        opcionVisitante.value = equipos[i].nombre;
        opcionVisitante.textContent = equipos[i].nombre;
        selectVisitante.appendChild(opcionVisitante);
    }
}
/**
 * Función para buscar un equipo por su nombre
 */
function buscarEquipo(nombre) {
    for (var i = 0; i < equipos.length; i++) {
        if (equipos[i].nombre === nombre) {
            return equipos[i];
        }
    }
    return null;
}
/**
 * Función para actualizar las estadísticas de un equipo después de un partido
 */
function actualizarEquipo(nombreEquipo, golesFavor, golesContra) {
    var equipo = buscarEquipo(nombreEquipo);
    if (!equipo)
        return;
    // Actualizar estadísticas básicas
    equipo.partidosJugados++;
    equipo.golesFavor += golesFavor;
    equipo.golesContra += golesContra;
    // Determinar resultado y actualizar
    if (golesFavor > golesContra) {
        // Victoria
        equipo.partidosGanados++;
        equipo.puntos += 3;
    }
    else if (golesFavor === golesContra) {
        // Empate
        equipo.partidosEmpatados++;
        equipo.puntos += 1;
    }
    else {
        // Derrota
        equipo.partidosPerdidos++;
    }
}
/**
 * Función para mostrar un mensaje en la página
 */
function mostrarMensaje(mensaje, esError) {
    var divMensaje = document.getElementById('mensajeError');
    if (!divMensaje)
        return;
    divMensaje.textContent = mensaje;
    divMensaje.style.display = 'block';
    if (esError) {
        divMensaje.style.backgroundColor = '#f8d7da';
        divMensaje.style.color = '#721c24';
        divMensaje.style.borderColor = '#f5c6cb';
    }
    else {
        divMensaje.style.backgroundColor = '#d4edda';
        divMensaje.style.color = '#155724';
        divMensaje.style.borderColor = '#c3e6cb';
    }
    // Ocultar mensaje después de 3 segundos
    setTimeout(function () {
        if (divMensaje) {
            divMensaje.style.display = 'none';
        }
    }, 3000);
}
/**
 * Función que se ejecuta cuando se envía el formulario
 */
function procesarFormulario(evento) {
    evento.preventDefault();
    // Obtener los valores del formulario
    var selectLocal = document.getElementById('equipoLocal');
    var selectVisitante = document.getElementById('equipoVisitante');
    var inputGolesLocal = document.getElementById('golesLocal');
    var inputGolesVisitante = document.getElementById('golesVisitante');
    if (!selectLocal || !selectVisitante || !inputGolesLocal || !inputGolesVisitante)
        return;
    var equipoLocal = selectLocal.value;
    var equipoVisitante = selectVisitante.value;
    var golesLocal = parseInt(inputGolesLocal.value);
    var golesVisitante = parseInt(inputGolesVisitante.value);
    // VALIDACIÓN: Los equipos no pueden ser iguales
    if (equipoLocal === equipoVisitante) {
        mostrarMensaje('❌ Error: El equipo local y visitante no pueden ser el mismo', true);
        return;
    }
    // VALIDACIÓN: Ambos equipos deben estar seleccionados
    if (equipoLocal === '' || equipoVisitante === '') {
        mostrarMensaje('❌ Error: Debes seleccionar ambos equipos', true);
        return;
    }
    // VALIDACIÓN: Los goles deben ser números válidos
    if (isNaN(golesLocal) || isNaN(golesVisitante) || golesLocal < 0 || golesVisitante < 0) {
        mostrarMensaje('❌ Error: Los goles deben ser números positivos', true);
        return;
    }
    // Actualizar estadísticas de ambos equipos
    actualizarEquipo(equipoLocal, golesLocal, golesVisitante);
    actualizarEquipo(equipoVisitante, golesVisitante, golesLocal);
    // Actualizar la tabla con la nueva clasificación
    mostrarTabla();
    // Limpiar el formulario
    selectLocal.value = '';
    selectVisitante.value = '';
    inputGolesLocal.value = '0';
    inputGolesVisitante.value = '0';
    // Mostrar mensaje de éxito
    mostrarMensaje('✅ Resultado registrado correctamente', false);
}
/**
 * Función principal que se ejecuta al cargar la página
 */
function iniciar() {
    // Mostrar la tabla inicial
    mostrarTabla();
    // Llenar los selectores del formulario
    llenarSelectores();
    // Configurar el evento del formulario
    var formulario = document.getElementById('formularioResultado');
    if (formulario) {
        formulario.addEventListener('submit', procesarFormulario);
    }
}
