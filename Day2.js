// Day 2 Operators, Javascript challenge
const prompt=require("prompt-sync")({sigint:true});
/* ---------------------------------------------------------------------------------------*/

/* Activity 1 Arithmetic Operators
Task1: Write a program to add two numbers and log the result to the console
*/
const addToNumbers = () => {
    const num1 = 10;
    const num2 = 20;
    const addition = num1 + num2;
    console.log("The addition of two numbers = ",addition);
}
addToNumbers();

/*
Task2: Write a program to subtract two numbers and log the result to the console
*/
const subToNumbers = () => {
    const num1 = 10;
    const num2 = 20;
    const subtract = num1 - num2;
    console.log("The subtraction of two numbers = ", subtract);
}
subToNumbers();

/*
Task3: Write a program to multiply two numbers and log the result to the console
*/
const multiplyToNumbers = () => {
    const num1 = 10;
    const num2 = 20;
    const multiply = num1 * num2;
    console.log("The multiplication of two numbers = ",multiply);
}
multiplyToNumbers();

/*
Task4: Write a program to divide two numbers and log the result to the console
*/
const divideToNumbers = () => {
    const num1 = 10;
    const num2 = 20;
    const divide = num1 / num2;
    console.log("The division of two numbers = ",divide);
}
divideToNumbers();

/*
Task5: Write a program to find the remainder when one number is divided by another and log the result to the console
*/
const remainderFinder = () => {
    const num1 = 10;
    const num2 = 20;
    const remainder = num1 % num2;
    console.log("The remainder is = ",remainder);
}
remainderFinder();

/* ---------------------------------------------------------------------------------------*/

/* Activity 2 Assignment Operators
Task6: Use the += operator to add a number to the variable and log the result to the console
*/
var plusMinusOperatorNum1 = 10;
plusMinusOperatorNum1 += 50;
// plusMinusOperatorNum1 = plusMinusOperatorNum1 + 50 
// and we cannot use const due to redeclaration of number to the previous number, so it make sense
console.log("The addition using '+=' is = ", plusMinusOperatorNum1); 

/* 
Task7: Use the -= operator to subtract a number to the variable and log the result to the console
*/
var numberX = 25;
numberX -= 20;
console.log("The subtraction using '-=' is = ",numberX);

/* ---------------------------------------------------------------------------------------*/

/* Activity 3 Comparison Operators 
Task8: Write a program to compare two numbers using > and < and log the result to the console
*/
// comparison operators in Javascript are used to compare two values and return a boolean result( either true or false )
let X = 20;
let Y = 30;
console.log(X>Y);
console.log(X<Y);

/*
Task9: Write a program to compare two numbers using >= and <= and log the result to the console
*/
let baseSalary = 10000;
let annualBonus = 9000;
console.log(baseSalary >= annualBonus);
console.log(baseSalary <= annualBonus);

/*
Task10: Write a program to compare two numbers using == (loose equality) and === (strict equality operator) and log the result to the console
*/
let herSmileCost = 100000;
let herCost = 100000;
console.log(herSmileCost == herCost);

let str1 = "I love zinger";
let number = 9;
console.log(str1 === number);

let str2 = "Im falling for burgir";
console.log(str1 === str2);

let str3 = "I love zinger";
console.log(str1 === str3);
// === strict equality operator checks the every single character by character with type of certain variable if matches everything exact like that the it will return true 

/* ---------------------------------------------------------------------------------------*/

/* Activity 4 Logical Operators
Task11: Write a program that uses && operator to combine two conditions and log the result to the console
*/
const value = 10;
const value2 = 40;
console.log("Logical AND",value > value2 && value > 1);
// as the one condition becomes flase so it is returning false, it will only return true on such cases where both conditions becomes true (1)

/*
Task12: Write a program that uses the || operator to combine two conditions and log the result to the console
*/
const value3 = 100;
const value4 = 40;
console.log("Logical OR",value3 > value4 || value3 > 2);
// it just returns true, when atleast one condition remains true

/*
Task13: Write a program that uses the ! operator to combine two conditions and log the result to the console
*/
const amIGraduate = false;
console.log("Logical NOT ",!(amIGraduate));

/* Activity 5 Ternary Operator 
Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
*/
let numFromUser = parseInt(prompt("Enter any number to check : "));
console.log(numFromUser > 0 ? "The number is positive" : "The number is NOT positive");
