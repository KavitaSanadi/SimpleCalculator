let result = document.getElementById("result");

function insertValue(value) {
    result.value += value;
}

function insertOperator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = "Error";
    }
}
