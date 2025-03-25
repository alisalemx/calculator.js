const displayElem = document.getElementById("display");
const equalElem = document.getElementById("equal");
const digitElems = document.querySelectorAll(".digit");
const operatorElems = document.querySelectorAll(".operator");
let currentNum = "";
let num1 = null;
let result = null;
let operator = "";


digitElems.forEach(button => {
  button.addEventListener("click", (e) => {
    currentNum += e.target.textContent;
    displayElem.textContent = currentNum;
  });
});

operatorElems.forEach(button => {
  button.addEventListener("click", (e) => {
    if (currentNum != "") {
      num1 = Number(currentNum);
      currentNum = "";
      displayElem.textContent = "";
    }

    operator = e.target.textContent;
  });
});

equalElem.addEventListener("click", () => {
  if (num1 != null && currentNum != "" && operator != "") {
    result = operate(num1, Number(currentNum), operator);
    displayElem.textContent = result;
    num1 = result;
    currentNum = "";
  }
});

function operate(x, y, operator) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      return null;
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}