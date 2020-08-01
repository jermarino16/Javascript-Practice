const defaultResult = 0;
let currentResult = defaultResult;
let enteredNumber = 0;
let logEntries = [];

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
  currentResult += parseInt(enteredNumber);
  createAndWriteOutput("+", initialValue, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult -= parseInt(enteredNumber);
  createAndWriteOutput("-", initialValue, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function multiply() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult *= parseInt(enteredNumber);
  createAndWriteOutput("*", initialValue, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}
function divide() {
  getUserNumberInput();
  const initialValue = currentResult;
  currentResult /= parseInt(enteredNumber);
  createAndWriteOutput("/", initialValue, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
