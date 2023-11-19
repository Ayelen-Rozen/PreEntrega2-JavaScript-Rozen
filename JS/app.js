const operacionesMatematicas = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b,
};

function realizarOperacion(operacion) {
    let num1 = parseInt(document.getElementById("num1").value, 10);
    let num2 = parseInt(document.getElementById("num2").value, 10);

    let resultado = operacionesMatematicas[operacion](num1, num2);
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    let resultadoValor = document.getElementById("resultadoValor");
    resultadoValor.textContent = "El resultado es: " + resultado;
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";
}

function limpiarResultado() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "none";
}



// function sumar() {
//     let num1 = parseInt(document.getElementById("num1").value, 10);
//     let num2 = parseInt(document.getElementById("num2").value, 10);
//     let resultado = num1 + num2;
//     document.getElementById("resultado").innerText = resultado;
//     alert("El resultado es " + resultado);
// }

// function restar() {
//     let num1 = parseInt(document.getElementById("num1").value, 10);
//     let num2 = parseInt(document.getElementById("num2").value, 10);
//     let resultado = num1 - num2;
//     document.getElementById("resultado").innerText = resultado;
// }

// function multiplicar() {
//     let num1 = parseInt(document.getElementById("num1").value, 10);
//     let num2 = parseInt(document.getElementById("num2").value, 10);
//     let resultado = num1 * num2;
//     document.getElementById("resultado").innerText = resultado;
// }

// function dividir() {
//     let num1 = parseInt(document.getElementById("num1").value, 10);
//     let num2 = parseInt(document.getElementById("num2").value, 10);
//     let resultado = num1 / num2;
//     document.getElementById("resultado").innerText = resultado;
// }


