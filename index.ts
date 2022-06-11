// Author : Nemuel Wainaina

import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main() {
    const firstStr: string = question('Enter first number : ');
    const operator: string = question('Enter the operator :');
    const secondStr: string = question('Enter second number : ');

    const isValid: boolean = isNumber(firstStr) && isOperator(operator as Operator) && isNumber(secondStr);

    if (isValid) 
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum)
        console.log(result);
    }
    else
    {
        console.log('[!] INVALID\n');
        main()
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) 
{
    switch(operator)
    {
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

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean
{
    const num = parseInt(str);
    const isNum = !isNaN(num);
    return isNum;
}


main()