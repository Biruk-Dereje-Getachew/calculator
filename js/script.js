function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let operand1, operator, operand2;
let clearOnTextInput = false;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener(
  "click",
  (evt) => {
    if (clearOnTextInput) {
      display.textContent = "";
      clearOnTextInput = false;
    }

    display.textContent += evt.target.classList.contains("operator")
      ? ""
      : evt.target.textContent;
  },
  true,
);

const operators = document.querySelectorAll(".operator");

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (evt) => {
    operator = evt.target.textContent;
    if (!operand1 && !operand2) {
      operand1 = Number(display.textContent);
      display.textContent = "";
    } else if (!operand2 && operand1) {
      operand2 = Number(display.textContent);
      operand1 = operate(operand1, operand2, operator);
      display.textContent = operand1;
      clearOnTextInput = true;
      operand2 = null;
      debugger;
    }
  });
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (evt) => {
  // Clear display
  display.textContent = "";
  // Update variables
  operand1 = null;
  operator = null;
  operand2 = null;
  clearOnTextInput = false;
});
