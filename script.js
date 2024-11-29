const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      // Clear the display and reset variables
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    } else if (value === '=') {
      // Perform the calculation
      if (currentInput && previousInput && operator) {
        try {
          const result = eval(`${previousInput} ${operator} ${currentInput}`);
          display.value = result;
          previousInput = result;
          currentInput = '';
          operator = '';
        } catch (error) {
          display.value = 'Error';
        }
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Set the operator
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      // Append to the current input
      currentInput += value;
      display.value = currentInput;
    }
  });
});
