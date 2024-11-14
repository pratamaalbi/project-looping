const limitInput = document.getElementById('limit-input');
const startButton = document.getElementById('start-btn');
const evenNumbersDiv = document.getElementById('even-numbers');
const oddNumbersDiv = document.getElementById('odd-numbers');

startButton.addEventListener('click', () => {
    const limit = parseInt(limitInput.value);

    //Pastikan input adalah positif
    if (isNaN(limit) || limit <= 0) {
        alert('Please enter a possitive number.');
        return;
    }

    //kosongkan tampilan sebelumnya
    evenNumbersDiv.textContent = 'even numbers: ';
    oddNumbersDiv.textContent = 'odd numbers: ';

for (let i = 1; i <= limit; 1++) {
    if (i % 2 === 0) {
        evenNumbersDiv.textContent += i + '';
    } else {
        oddNumbersDiv.textContent += i + '';
    }
}

});

