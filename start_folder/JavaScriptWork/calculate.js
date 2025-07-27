const val1input = document.getElementById("value1");
const val2input = document.getElementById("value2");
const operatorSelect = document.getElementById("choice");
const formulaArea = document.getElementById("formula");
const resultArea = document.getElementById("result");

val1input.addEventListener("input", calculate);
val2input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);

function calculate() {
    const val1 = parseFloat(val1input.value); //文字型を数字型に変換
    const val2 = parseFloat(val2input.value);
    const operator = operatorSelect.value;

    if (isNaN(val1) || isNaN(val2)) {
        formulaArea.textContent = "計算式：";
        resultArea.textContent = "両方の値を入力してください";
        return
    }

    let result;
    let symbol;

    if (operator === "addition") {
        result = val1 + val2;
        symbol = "+";
    } else if (operator === "subtraction") {
        result = val1 - val2;
        symbol = "-";
    } else if (operator === "multiplication") {
        result = val1 * val2;
        symbol = "×";
    } else if (operator === "division") {
        if (val2 === 0) {
            formulaArea.textContent = "計算式：";
            resultArea.textContent = "0で割ることはできません";
            return
        }
        result = val1 / val2;
        symbol = "÷";
    }
    else {
        formulaArea.textContent = "計算式：";
        resultArea.textContent = "演算子が正しくありません"
    }

    formulaArea.textContent = `計算式： ${val1} ${symbol} ${val2}`;
    resultArea.textContent = `計算結果： ${result}`

}
