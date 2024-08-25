function generateFibonacci() {
    const termInput = document.getElementById('termInput').value;
    fetch('/fibonacci', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ terms: termInput }),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Sequência: ${data.join(', ')}`;
    })
    .catch(error => console.error('Erro:', error));
}

function clearFields() {
    document.getElementById('termInput').value = '';
    document.getElementById('result').innerHTML = '';
}
