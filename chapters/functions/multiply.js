let multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}

let getInput = prompt => {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}
let firstNumber = getInput('Enter the first number:\n');
let secondNumber = getInput('Enter the second number:\n');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
