const defaultResult = 0;
let currentResult = defaultResult;
let enteredNumber = 0;

function getUserNumberInput() {
  enteredNumber = parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  calcDescription = `${resultBeforeCalc} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult = currentResult + parseInt(enteredNumber);
  createAndWriteOutput("+", initialValue, enteredNumber);
}

function subtract() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult = currentResult - parseInt(enteredNumber);
  createAndWriteOutput("-", initialValue, enteredNumber);
}

function multiply() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult = currentResult * parseInt(enteredNumber);
  createAndWriteOutput("*", initialValue, enteredNumber);
}
function divide() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult = currentResult / parseInt(enteredNumber);
  createAndWriteOutput("/", initialValue, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
