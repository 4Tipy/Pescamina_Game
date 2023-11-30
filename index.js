let numFilas;
let numColumnas;
let casilla;


function iniciarPartida() {
    let valorMinimo = 10;
    let valorMaximo = 30;

    numFilas = parseInt(prompt("Introduce el número de filas:"));
    numColumnas = parseInt(prompt("Introduce el número de columnas:"));

    if (numFilas < valorMinimo) {
        numFilas = valorMinimo;
    } else if (numFilas > valorMaximo) {
        numFilas = valorMaximo;
    }

    if (numColumnas < valorMinimo) {
        numColumnas = valorMinimo;
    } else if (numColumnas > valorMaximo) {
        numColumnas = valorMaximo;
    }

    crearTabla();
    setMinas();
}

function crearTabla() {

    let tablaHTML = `<table border="1px solid black">`;
    for (let i = 1; i <= numFilas; i++) {
        tablaHTML += '<tr>';

        for (let j = 1; j <= numColumnas; j++) {
            tablaHTML += `<td id="td-${i}-${j}"data-fila=${i} data-columna=${j} data-mina="false"> <img id="img-${i}-${j}" onclick="abrirCasilla(${i}, ${j})" src="./imagenes/fons20px.jpg"> </td>`;
        }

        tablaHTML += '</tr>';
    }

    tablaHTML += '</table>';
    document.body.innerHTML += tablaHTML;
}

function setMinas() {
    let totalCeldas = numColumnas * numFilas;
    let porcentajeMinas = totalCeldas * 0.17;
    let contador = 0;

    for (let x = 1; x <= porcentajeMinas; x++) {
        let fila = parseInt(Math.random() * numFilas) + 1;
        let columna = parseInt(Math.random() * numColumnas) + 1;

        casilla = document.getElementById(`td-${fila}-${columna}`);
        console.log(casilla);

        if (casilla != null) {
            casilla.dataset.mina = "true";
            contador++;
        }
    }
    console.log(contador);
}

function esMina(fila, columna) {
    casilla = document.getElementById(`td-${fila}-${columna}`);

    if (casilla != null && casilla.dataset.mina === "true") {
        return true;
    } else {
        return false;
    }
}

function abrirCasilla(fila, columna) {
    let casilla = document.getElementById(`td-${fila}-${columna}`);
    let imagen = document.getElementById(`img-${fila}-${columna}`);
    let nMinesAdjacentes = 0;

    if (esMina(fila, columna) != true) {
                // Calcular el número de minas adyacentes
                for (let i = fila - 1; i <= fila + 1; i++) {
                    for (let j = columna - 1; j <= columna + 1; j++) {
                        if (i >= 1 && i <= numFilas && j >= 1 && j <= numColumnas && !(i === fila && j === columna)) {
                            let casillaAdyacente = document.getElementById(`td-${i}-${j}`);
                            if (casillaAdyacente != null && casillaAdyacente.dataset.mina === "true") {
                                nMinesAdjacentes++;
                            }
                        }
                    }
                }
        
                // Mostrar el número de minas adyacentes en la casilla
                if (nMinesAdjacentes > 0) {
                    casilla.innerHTML = nMinesAdjacentes;
                } else {
                    casilla.innerHTML = "0"; // Puedes dejarlo vacío si no hay minas adyacentes
                }
        
    } else {
        imagen.src = "./imagenes/mina20px.jpg";
        console.log("Has encontrado una mina");
        return imagen;
    }
}
function setMinesAdjacents(fila, columna, nMinesAdjacentes) {
    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            // Verifica que no estés fuera de los límites de la tabla
            if (i >= 1 && i <= numFilas && j >= 1 && j <= numColumnas) {
                // Verifica si la casilla actual no es la misma que la original
                if (!(i === fila && j === columna)) {
                    // Obtiene la casilla adyacente
                    let casillaAdyacente = document.getElementById(`td-${i}-${j}`);

                    // Verifica si la casilla adyacente es una mina
                    if (casillaAdyacente != null && casillaAdyacente.dataset.mina === "true") {
                        nMinesAdjacentes++;
                    }
                }
            }
        }
    }

}

iniciarPartida();
