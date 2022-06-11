"use strict";
// Author : Nemuel Wainaina
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number : ');
    var operator = (0, readline_sync_1.question)('Enter the operator :');
    var secondStr = (0, readline_sync_1.question)('Enter second number : ');
    var isValid = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isValid) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('[!] INVALID\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var num = parseInt(str);
    var isNum = !isNaN(num);
    return isNum;
}
main();
