// Ejecutar cuando la página se cargue completamente
window.onload = function() {
    iniciar();
};

// Array de equipos 
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


function ordenarEquipos(): void {
    for (let i = 0; i < equipos.length; i++) {
        
        // Busco el equipo con más puntos 
        let posicionMejor = i;
        
        for (let j = i + 1; j < equipos.length; j++) {
            if (equipos[j].puntos > equipos[posicionMejor].puntos) {
                posicionMejor = j;
            }
        }
        
        // Pongo el mejor en la posición mejor
        let temp = equipos[i];
        equipos[i] = equipos[posicionMejor];
        equipos[posicionMejor] = temp;
    }
}

function mostrarTabla(): void {
    // Ordeno
    ordenarEquipos();
    // Ocojo el  tbody de la tabla
    let tbody: HTMLTableSectionElement = document.getElementById('cuerpoTabla') as HTMLTableSectionElement; ;
    
    // Limpiar la tabla
    tbody.innerHTML = '';
    
    for (let i = 0; i < equipos.length; i++) {
        let equipo = equipos[i];
        
        
        let fila = document.createElement('tr') ;
        
        // Añadir color según la posición
        if (i < 3) {
            fila.classList.add('champions');
        } else if (i === 3) {
            fila.classList.add('europa-league');
        } else if (i >= equipos.length - 3) {
            fila.classList.add('descenso');
        }
        
        // Crear el contenido de la fila
         let celdaPosicion = document.createElement('td');
        celdaPosicion.className = 'posicion';
        celdaPosicion.textContent = (i + 1).toString();
        
        let celdaNombre = document.createElement('td');
        celdaNombre.className = 'nombre-equipo';
        celdaNombre.textContent = equipo.nombre;
        
        let celdaPuntos = document.createElement('td');
        celdaPuntos.className = 'puntos';
        celdaPuntos.textContent= equipo.puntos.toString();

        let celdaPartidosJugados = document.createElement('td');
        celdaPartidosJugados.textContent = equipo.partidosJugados.toString();
        
        let celdaPartidosGanados = document.createElement('td');
        celdaPartidosGanados.textContent = equipo.partidosGanados.toString();
        
        let celdaPartidosEmpatados = document.createElement('td');
        celdaPartidosEmpatados.textContent = equipo.partidosEmpatados.toString();
        
        let celdaPartidosPerdidos = document.createElement('td');
        celdaPartidosPerdidos.textContent = equipo.partidosPerdidos.toString();
        
        let celdaGolesFavor = document.createElement('td');
        celdaGolesFavor.textContent = equipo.golesFavor.toString();
        
        let celdaGolesContra = document.createElement('td');
        celdaGolesContra.textContent = equipo.golesContra.toString();
        
        // Añadir todas las celdas a la fila
        fila.appendChild(celdaPosicion);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPuntos);
        fila.appendChild(celdaPartidosJugados);
        fila.appendChild(celdaPartidosGanados);
        fila.appendChild(celdaPartidosEmpatados);
        fila.appendChild(celdaPartidosPerdidos);
        fila.appendChild(celdaGolesFavor);
        fila.appendChild(celdaGolesContra);
        
        // Añadir la fila a la tabla
        tbody.appendChild(fila);
    }
}
    

function llenarSelectores(): void {
    let selectLocal:HTMLSelectElement= document.getElementById('equipoLocal') as HTMLSelectElement;
    let selectVisitante: HTMLSelectElement = document.getElementById('equipoVisitante') as HTMLSelectElement;
        
    for (let i = 0; i < equipos.length; i++) {
        // meto los datos para elegir equipo local
        let opcionLocal = document.createElement('option');
        opcionLocal.value = equipos[i].nombre;
        opcionLocal.textContent = equipos[i].nombre;
        selectLocal.appendChild(opcionLocal);
        
        // Hago lo mismo para equipo visitante
        let opcionVisitante = document.createElement('option');
        opcionVisitante.value = equipos[i].nombre;
        opcionVisitante.textContent = equipos[i].nombre;
        selectVisitante.appendChild(opcionVisitante);
    }
}


function buscarEquipo(nombre: string) {
    for (let i = 0; i < equipos.length; i++) {
        if (equipos[i].nombre === nombre) {
            return equipos[i];
        }
    }
    return equipos[0]; //Esto nunca va a pasar poque tenemos el desplegable pero si no me da error en let equipo siguiente porque podría ser null
}


function actualizarEquipo(nombreEquipo: string, golesFavor: number, golesContra: number): void {
    let equipo = buscarEquipo(nombreEquipo);
        
    // Actualizo estadísticas 
    equipo.partidosJugados++;
    equipo.golesFavor += golesFavor;
    equipo.golesContra += golesContra;
    
    if (golesFavor > golesContra) {

        equipo.partidosGanados++;
        equipo.puntos += 3;

    } else if (golesFavor === golesContra) {
        
        equipo.partidosEmpatados++;
        equipo.puntos += 1;
    } else {
        equipo.partidosPerdidos++;
    }
}


function procesarFormulario(): void {
    
    let selectLocal:HTMLSelectElement = document.getElementById('equipoLocal') as HTMLSelectElement;
    let selectVisitante:HTMLSelectElement = document.getElementById('equipoVisitante') as HTMLSelectElement;
    let inputGolesLocal:HTMLInputElement= document.getElementById('golesLocal') as HTMLInputElement;
    let inputGolesVisitante:HTMLInputElement = document.getElementById('golesVisitante') as HTMLInputElement;
        
    let equipoLocal = selectLocal.value;
    let equipoVisitante = selectVisitante.value;
    let golesLocal = parseInt(inputGolesLocal.value);
    let golesVisitante = parseInt(inputGolesVisitante.value);
    
    //  Los equipos no pueden ser iguales

    let divMensaje:HTMLDivElement = document.getElementById('mensajeError') as HTMLDivElement;


    if (equipoLocal === equipoVisitante) {
          if (divMensaje) {
            divMensaje.textContent = '❌ Error: El equipo local y visitante no pueden ser el mismo';
            divMensaje.style.display = 'block';
            divMensaje.style.backgroundColor = '#f8d7da';
            divMensaje.style.color = '#721c24';
            divMensaje.style.borderColor = '#f5c6cb';
            
            setTimeout(function() {
                if (divMensaje) {
                    divMensaje.style.display = 'none';
                }
            }, 3000);
        }
        return;
    }
    
    //  Los goles deben ser números válidos
    if (isNaN(golesLocal) || isNaN(golesVisitante) || golesLocal < 0 || golesVisitante < 0) {
        if (divMensaje) {
            divMensaje.textContent = '❌ Error: Los goles deben ser números positivos';
            divMensaje.style.display = 'block';
            divMensaje.style.backgroundColor = '#f8d7da';
            divMensaje.style.color = '#721c24';
            divMensaje.style.borderColor = '#f5c6cb';
            
            setTimeout(function() {
                if (divMensaje) {
                    divMensaje.style.display = 'none';
                }
            }, 3000);
        }
        return;
    }

    
    actualizarEquipo(equipoLocal, golesLocal, golesVisitante);
    actualizarEquipo(equipoVisitante, golesVisitante, golesLocal);
    
    mostrarTabla();
    
    // Limpiar el formulario
    selectLocal.value = '';
    selectVisitante.value = '';
    inputGolesLocal.value = '0';
    inputGolesVisitante.value = '0';
    
    if (divMensaje) {
        divMensaje.textContent = '✅ Resultado registrado correctamente';
        divMensaje.style.display = 'block';
        divMensaje.style.backgroundColor = '#d4edda';
        divMensaje.style.color = '#155724';
        divMensaje.style.borderColor = '#c3e6cb';
        
        setTimeout(function() {
            if (divMensaje) {
                divMensaje.style.display = 'none';
            }
        }, 3000);
    }
}


function iniciar(): void {
    mostrarTabla();
    
    llenarSelectores();
    
}