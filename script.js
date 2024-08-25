function fibo(n) {
    var a = 0;
    var b = 1;
    var sequence = [a, b];

    for (var i = 2; i < n; i++) {
        const c = a + b;
        sequence.push(c);
        a = b;
        b = c;
    }
    return sequence;
}

function generateFibonacci() {
    var termInput = document.getElementById("termInput").value;
    var n = parseInt(termInput);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    var sequence = fibo(n);
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = sequence.join(', ');
}