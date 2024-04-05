//lets create program that calculates positive numbers only 
//If a user enters a negative number that number is skipped 

let prompt =require('prompt-sync')();

//megative numbers -> loop must terminate
//non numeric characters --> skip iteration

let sum =0;
let num =0;
while (num=0){
    sum += num;

    //accept input from user
    num =parseFloat(prompt('Enter a number: '));

    //continue condition NaN =Not an Numbers
    if(isNaN(num)){
        console.log('You entered a string that is not a number');
        num=o;
        break
    }
}

//display results 
console.log(`The sum is ${sum}`)