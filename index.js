const operators = { SUM: 1, SUB: 2, DIV: 3, MULT: 4 };
let mostBeClean = false;
let operator;
let result;

function attach(entry) {
  if (mostBeClean) {
    document.getElementById("tfNumber").value = entry;
    mostBeClean = false;
    return;
  }

  document.getElementById("tfNumber").value += entry;
}

function clean() {
  document.getElementById("tfNumber").value = "";
  operator = undefined;
  result = undefined;
}

function backspace() {
  let element = document.getElementById("tfNumber");
  let length = element.value.length;
  element.value = element.value.substring(0, length - 1);
}

function operate(operation) {
  let element = document.getElementById("tfNumber");

  if (element.value.trim().length == 0 || operator) {
    return;
  }

  operator = operation;
  result = Number(element.value);
  mostBeClean = true;
}

function calculate() {
  if (!operator || !result) return;

  let element = document.getElementById("tfNumber");

  if (element.value.trim().length == 0) return;

  let secondValue = Number(element.value);

  mostBeClean = true;

  if (operator == operators.SUM) {
    result += secondValue;
    element.value = result;
    operator = undefined;
    return;
  }

  if (operator == operators.SUB) {
    result -= secondValue;
    element.value = result;
    operator = undefined;
    return;
  }

  if (operator == operators.MULT) {
    result *= secondValue;
    element.value = result;
    operator = undefined;
    return;
  }

  if (operator == operators.DIV) {
    result /= secondValue;
    element.value = result;
    operator = undefined;
    return;
  }
}
