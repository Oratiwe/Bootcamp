//Simple calculator using JS and Switch case 

//we need this library module to accept user input 

const prompt = require('prompt-sync')();

let results;
//accept the operator input 

const operator = prompt('enter operator(either +,-,* or /):');

//accept an operand input 
const num1=parseFloat(prompt('Enter the first number:'));
const num2=parseFloat(prompt('Enter the second number'));

switch(operator){
    //formular for addition 
    case '+':
    results= num1 + num2;
    console.log(`${num1} +${num2}= ${results}`);
    break
    //formular for subtraction 
    case '-':
    results= num1 - num2;
    console.log(`${num1} -${num2}= ${results}`);
    break
     //formular for division
     case '/':
     results= num1 / num2;
     console.log(`${num1} /${num2}= ${results}`);
     break
      //formular for multiplication
     case '/':
     results= num1 / num2;
     console.log(`${num1} /${num2}= ${results}`);
     break
     case '*':
     results= num1 * num2;
     console.log(`${num1} *${num2}= ${results}`);
     break
}

