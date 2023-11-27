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
    casilla = document.getElementById(`td-${fila}-${columna}`);
    let imagen = document.getElementById(`img-${fila}-${columna}`);

    if (esMina(fila,columna)) {
        imagen.src = "./imagenes/mina20px.jpg";
        console.log("has encontrado una mina");
    } else {
        casilla.innerHTML="0";
        console.log("eres aweonao")
    }
}
function setMinesAdjacents(fila,columna,nMinesAdjacentes){

}

iniciarPartida();
