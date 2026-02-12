document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const numbersDisplay = document.getElementById('numbers-display');

  const generateTotoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  };

  generateBtn.addEventListener('click', () => {
    const totoNumbers = generateTotoNumbers();
    numbersDisplay.innerHTML = ''; // Clear previous numbers

    totoNumbers.forEach(number => {
      const numberCircle = document.createElement('div');
      numberCircle.classList.add('number-circle');
      numberCircle.textContent = number;
      numbersDisplay.appendChild(numberCircle);
    });
  });
});