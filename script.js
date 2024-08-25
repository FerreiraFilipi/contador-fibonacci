function generateFibonacci() {
    const numTerms = parseInt(document.getElementById('termInput').value);
    if (isNaN(numTerms) || numTerms < 1) {
        document.getElementById('result').innerHTML = "Por favor, insira um número válido.";
        return;
    }
    
    let a = 0;
    let b = 1;
    let fibonacciSequence = [];
    
    for (let i = 1; i <= numTerms; i++) {
        fibonacciSequence.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    
    document.getElementById('result').innerHTML = fibonacciSequence.join(', ');
}

function clearResult() {
    document.getElementById('termInput').value = '';
    document.getElementById('result').innerHTML = '';
}
