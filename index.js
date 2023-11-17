function iniciarPartida() {
    let valorMinimo = 10;
    let valorMaximo = 30;

    let numFilas = parseInt(prompt("Introduce el número de filas:"));
    if (numFilas < valorMinimo) {
        numFilas = valorMinimo;
    } else if (numFilas > valorMaximo) {
        numFilas = valorMaximo;
    }

    let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
    if (numColumnas < valorMinimo) {
        numColumnas = valorMinimo;
    } else if (numColumnas > valorMaximo) {
        numColumnas = valorMaximo;
    }

    return { numFilas, numColumnas };
}

// function crearTabla(numFilas, numColumnas) {
//     const tabla = document.createElement("table");

//     for (let i = 1; i <= numFilas; i++) {
//         const fila = document.createElement("tr");
//         for (let j = 1; j <= numColumnas; j++) {
//             const celda = document.createElement("td");
//             // celda.textContent = `${i}, ${j}`;
//             //propiedad data para la imagen 

//             celda.setAttribute("data-mina", "false");
//             celda.style.backgroundImage = 'url("/imagenes/fons20px.jpg")';
//             // celda.style.backgroundSize = "cover"; 
//             // celda.style.backgroundRepeat = "no-repeat"; // Evita la repetición de la imagen

//             //evento 
//             celda.addEventListener("click", abrirCasilla);

//             fila.appendChild(celda);
//             celda.style.border = "1px solid black";

//         }

//         fila.style.border = "1px solid black";
//         tabla.appendChild(fila);
//     }

//     document.body.appendChild(tabla);

// }
function crearTabla(numFilas, numColumnas) {
    let tablaHTML = `<table border = "1px solid black">`;
    for (let i = 1; i <= numFilas; i++) {
        tablaHTML += '<tr>';

        for (let j = 1; j <= numColumnas; j++) {
            tablaHTML += `<td data-mida ="false"> <img onclick="abrirCasilla()"src="/imagenes/fons20px.jpg"> </td>`;
        }

        tablaHTML += '</tr>';
    }

    tablaHTML += '</table>';
    document.body.innerHTML += tablaHTML

}

function abrirCasilla(){
    console.log("estas haciendo cosas")
}

function setMinas() {
    let totalCeldas = numColumnas * numFilas;
    let numMinas = totalCeldas * 0.17;

    for (let x = 1; x <= numMinas; x++) {
        const weno = Array[i];
        let i = Math.random();

        const weno2 = Array[j];
        let j = Math.random();    

    }
}

function calculaAdjacents() {
}

// Llamar a las funciones en el orden adecuado
const { numFilas, numColumnas } = iniciarPartida();
crearTabla(numFilas, numColumnas);
setMinas();
calculaAdjacents();
