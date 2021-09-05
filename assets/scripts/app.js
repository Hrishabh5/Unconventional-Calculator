let currentResult = 0;

// let calculationDescription = "(" + currentResult + " + 10) * 3/2 - 1";
// let calculationDescription = `(${currentResult} + 10) * 3/2 - 1`;
// currentResult = currentResult + (10 * 3) / 2 - 1;
// let errorMsg = "An error \n" + "occurred!";
// outputResult(currentResult, calculationDescription);

// function add(num1, num2) {
//   let result = num1 + num2;
//   alert("Your Result: " + result);
// }

let logEntries = [];

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, operationNumber, newResult) {
  const logEntry = {
    oper: operation,
    number1: prevResult,
    number2: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.opertation);
  console.log(logEntries);
}

function add() {
  let enteredNumber = +userInput.value;
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
  // const logEntry = {
  //   operation: "ADD",
  //   number1: initialResult,
  //   number2: enteredNumber,
  //   result: currentResult,
  // };
  // logEntries.push(logEntry);
  // console.log(logEntry.opertation);
  // console.log(logEntries);
  // logEntries.push(enteredNumber);
  // console.log(logEntries);
}

function subtract() {
  let enteredNumber = +userInput.value;
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  let enteredNumber = +userInput.value;
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("x", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  let enteredNumber = +userInput.value;
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
