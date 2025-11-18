// Ejecutar cuando la página se cargue completamente
window.onload = function() {
    iniciar();
};

// Array de equipos - Datos iniciales de la liga
// Cada equipo es un objeto con sus propiedades
let equipos = [
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
function ordenarEquipos(): void {
    for (let i = 0; i < equipos.length - 1; i++) {
        for (let j = 0; j < equipos.length - 1 - i; j++) {
            // Primero: comparar por puntos
            if (equipos[j].puntos < equipos[j + 1].puntos) {
                // Intercambiar posiciones
                let temp = equipos[j];
                equipos[j] = equipos[j + 1];
                equipos[j + 1] = temp;
            } 
            // Si tienen los mismos puntos, comparar por diferencia de goles
            else if (equipos[j].puntos === equipos[j + 1].puntos) {
                let difGoles1 = equipos[j].golesFavor - equipos[j].golesContra;
                let difGoles2 = equipos[j + 1].golesFavor - equipos[j + 1].golesContra;
                
                if (difGoles1 < difGoles2) {
                    // Intercambiar posiciones
                    let temp = equipos[j];
                    equipos[j] = equipos[j + 1];
                    equipos[j + 1] = temp;
                }
                // Si tienen la misma diferencia, comparar por goles a favor
                else if (difGoles1 === difGoles2 && equipos[j].golesFavor < equipos[j + 1].golesFavor) {
                    let temp = equipos[j];
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
function mostrarTabla(): void {
    // Ordenar equipos antes de mostrar
    ordenarEquipos();
    
    // Obtener el elemento tbody de la tabla
    let tbody = document.getElementById('cuerpoTabla');
    
    if (!tbody) return;
    
    // Limpiar la tabla
    tbody.innerHTML = '';
    
    // Recorrer todos los equipos
    for (let i = 0; i < equipos.length; i++) {
        let equipo = equipos[i];
        
        // Crear una nueva fila
        let fila = document.createElement('tr');
        
        // Añadir color según la posición
        if (i < 3) {
            fila.classList.add('champions');
        } else if (i === 3) {
            fila.classList.add('europa-league');
        } else if (i >= equipos.length - 3) {
            fila.classList.add('descenso');
        }
        
        // Crear el contenido de la fila
        fila.innerHTML = `
            <td class="posicion">${i + 1}</td>
            <td class="nombre-equipo">${equipo.nombre}</td>
            <td class="puntos"><strong>${equipo.puntos}</strong></td>
            <td>${equipo.partidosJugados}</td>
            <td>${equipo.partidosGanados}</td>
            <td>${equipo.partidosEmpatados}</td>
            <td>${equipo.partidosPerdidos}</td>
            <td>${equipo.golesFavor}</td>
            <td>${equipo.golesContra}</td>
        `;
        
        // Añadir la fila a la tabla
        tbody.appendChild(fila);
    }
}

/**
 * Función para llenar los selectores del formulario con los nombres de los equipos
 */
function llenarSelectores(): void {
    let selectLocal = document.getElementById('equipoLocal') as HTMLSelectElement;
    let selectVisitante = document.getElementById('equipoVisitante') as HTMLSelectElement;
    
    if (!selectLocal || !selectVisitante) return;
    
    // Recorrer todos los equipos
    for (let i = 0; i < equipos.length; i++) {
        // Crear opción para equipo local
        let opcionLocal = document.createElement('option');
        opcionLocal.value = equipos[i].nombre;
        opcionLocal.textContent = equipos[i].nombre;
        selectLocal.appendChild(opcionLocal);
        
        // Crear opción para equipo visitante
        let opcionVisitante = document.createElement('option');
        opcionVisitante.value = equipos[i].nombre;
        opcionVisitante.textContent = equipos[i].nombre;
        selectVisitante.appendChild(opcionVisitante);
    }
}

/**
 * Función para buscar un equipo por su nombre
 */
function buscarEquipo(nombre: string) {
    for (let i = 0; i < equipos.length; i++) {
        if (equipos[i].nombre === nombre) {
            return equipos[i];
        }
    }
    return null;
}

/**
 * Función para actualizar las estadísticas de un equipo después de un partido
 */
function actualizarEquipo(nombreEquipo: string, golesFavor: number, golesContra: number): void {
    let equipo = buscarEquipo(nombreEquipo);
    
    if (!equipo) return;
    
    // Actualizar estadísticas básicas
    equipo.partidosJugados++;
    equipo.golesFavor += golesFavor;
    equipo.golesContra += golesContra;
    
    // Determinar resultado y actualizar
    if (golesFavor > golesContra) {
        // Victoria
        equipo.partidosGanados++;
        equipo.puntos += 3;
    } else if (golesFavor === golesContra) {
        // Empate
        equipo.partidosEmpatados++;
        equipo.puntos += 1;
    } else {
        // Derrota
        equipo.partidosPerdidos++;
    }
}

/**
 * Función para mostrar un mensaje en la página
 */
function mostrarMensaje(mensaje: string, esError: boolean): void {
    let divMensaje = document.getElementById('mensajeError');
    
    if (!divMensaje) return;
    
    divMensaje.textContent = mensaje;
    divMensaje.style.display = 'block';
    
    if (esError) {
        divMensaje.style.backgroundColor = '#f8d7da';
        divMensaje.style.color = '#721c24';
        divMensaje.style.borderColor = '#f5c6cb';
    } else {
        divMensaje.style.backgroundColor = '#d4edda';
        divMensaje.style.color = '#155724';
        divMensaje.style.borderColor = '#c3e6cb';
    }
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(function() {
        if (divMensaje) {
            divMensaje.style.display = 'none';
        }
    }, 3000);
}

/**
 * Función que se ejecuta cuando se envía el formulario
 */
function procesarFormulario(evento: Event): void {
    evento.preventDefault();
    
    // Obtener los valores del formulario
    let selectLocal = document.getElementById('equipoLocal') as HTMLSelectElement;
    let selectVisitante = document.getElementById('equipoVisitante') as HTMLSelectElement;
    let inputGolesLocal = document.getElementById('golesLocal') as HTMLInputElement;
    let inputGolesVisitante = document.getElementById('golesVisitante') as HTMLInputElement;
    
    if (!selectLocal || !selectVisitante || !inputGolesLocal || !inputGolesVisitante) return;
    
    let equipoLocal = selectLocal.value;
    let equipoVisitante = selectVisitante.value;
    let golesLocal = parseInt(inputGolesLocal.value);
    let golesVisitante = parseInt(inputGolesVisitante.value);
    
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
function iniciar(): void {
    // Mostrar la tabla inicial
    mostrarTabla();
    
    // Llenar los selectores del formulario
    llenarSelectores();
    
    // Configurar el evento del formulario
    let formulario = document.getElementById('formularioResultado');
    if (formulario) {
        formulario.addEventListener('submit', procesarFormulario);
    }
}