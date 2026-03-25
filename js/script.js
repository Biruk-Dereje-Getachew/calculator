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

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (evt) => {
  display.textContent = evt.target.classList.contains("operator")
    ? ""
    : display.textContent + evt.target.textContent;
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (evt) => {
    operand1 = Number(display.textContent);
    operator = evt.target.textContent;
    display.textContent = "";
  });
});
