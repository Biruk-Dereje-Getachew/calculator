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
let waitingForSecondInput = true;

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
const buttonsContaniner = document.querySelector(".buttons");

buttonsContaniner.addEventListener(
  "click",
  (evt) => {
    if (clearOnTextInput) {
      display.textContent = "";
      clearOnTextInput = false;
    }

    display.textContent +=
      evt.target.classList.contains("operator") ||
      evt.target.classList.contains("equals")
        ? ""
        : evt.target.textContent;
  },
  true,
);

const operators = document.querySelectorAll(".operator");

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (evt) => {
    if (!operand1 && !operand2) {
      operator = evt.target.textContent;
      operand1 = Number(display.textContent);
      display.textContent = "";
    } else if (!operand2 && operand1) {
      if (display.textContent) {
        operand2 = Number(display.textContent);
        operand1 = operate(operand1, operand2, operator);
        operator = evt.target.textContent;
        display.textContent = operand1;
        clearOnTextInput = true;
        operand2 = null;
      } else {
        operator = evt.target.textContent;
      }
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

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", (evt) => {
  if (operand1 && display.textContent) {
    operand2 = Number(display.textContent);
    const result = operate(operand1, operand2, operator);
    display.textContent = result;
    operand1 = operand2 = null;
    operator = null;
    clearOnTextInput = true;
  }
});

let r, g, b;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("mousedown", (evt) => {
    let target = evt.target;
    let bgColor = window.getComputedStyle(target).backgroundColor;
    [r, g, b] = bgColor.slice(4, -1).split(", ");
    [r, g, b] = [Number(r), Number(g), Number(b)];
    const factor = 0.5;
    [r, g, b] = [r * factor, g * factor, b * factor];
    target.style.backgroundColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseup", (evt) => {
    let target = evt.target;
    let bgColor = window.getComputedStyle(target).backgroundColor;
    [r, g, b] = bgColor.slice(4, -1).split(", ");
    [r, g, b] = [Number(r), Number(g), Number(b)];
    const factor = 0.5;
    [r, g, b] = [r / factor, g / factor, b / factor];
    target.style.backgroundColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  });
});
