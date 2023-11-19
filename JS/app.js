function sumar() {
    let num1 = parseInt(document.getElementById("num1").value, 10);
    let num2 = parseInt(document.getElementById("num2").value, 10);
    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = resultado;
}

function restar() {
    let num1 = parseInt(document.getElementById("num1").value, 10);
    let num2 = parseInt(document.getElementById("num2").value, 10);
    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = resultado;
}

function multiplicar() {
    let num1 = parseInt(document.getElementById("num1").value, 10);
    let num2 = parseInt(document.getElementById("num2").value, 10);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = resultado;
}

function dividir() {
    let num1 = parseInt(document.getElementById("num1").value, 10);
    let num2 = parseInt(document.getElementById("num2").value, 10);
    let resultado = num1 / num2;
    document.getElementById("resultado").innerText = resultado;
}


