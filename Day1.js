// Day 1 of Javascript challenge

/* ---------------------------------------------------------------------------------------*/

/* Activity 1 Variable Declaration
Task1: Declare a variable using var, assign it a number, and log the value to the console
*/
var randomNum;
randomNum = 10;
console.log("Task1 Activity1 Variable Declaration = ",randomNum);

/* Activity 1 Variable Declaration
Task2: Declare a variable using let, assign it a string, and log the value to the console
*/
let randomStr;
randomStr = "I like javascript nvm";
console.log("Task2 Activity1 String Declaration = ",randomStr);

/* ---------------------------------------------------------------------------------------*/

/* Activity 2 Constant Declaration 
Task3: Declare a variable using const, assign it a boolean value, and log the value to the console
*/

// const boolValue;
// boolValue = true;

// as we cannot declare a const without intializing at the same time, it makes sense So
const boolValueWithDeclaration = true;
console.log("Task3 Activity2 constant Declaration = ",boolValueWithDeclaration);

/* ---------------------------------------------------------------------------------------*/

/* Activity 3 
Task4: Create variables of different types (number,string,boolean,object,array) and log each variable's type using typeof operator
*/

// Number Variable
const numberVar = 66;
console.log("Task4.1 Activity3 Number Declaration = ",numberVar);
console.log("type is = ",typeof numberVar);

// String Variable
const stringVar = "I like 025";
console.log("Task4.2 Activity3 String Declaration = ",stringVar);
console.log("type is = ",typeof stringVar);

// Boolean Variable
const booleanVar = false;
console.log("Task4.3 Activity3 Bool Declaration = ",booleanVar);
console.log("type is = ",typeof booleanVar);

// Object Initialization
const ObjectDec = {type: "Tower", generation:"9th", psu: "460watts", gpu: "1080ti 12GB", ram : "16GB DDR4"}
console.log("Task4.4 Activity3 Object Declaration = ",ObjectDec);
console.log("type is = ",typeof ObjectDec);

// Array Initialization
const ArrayDec = ["I was failed to confess her 😔", "But now i became programmer 👨‍💻", "Choices have consequences 🗿"]; 
console.log("Task4.5 Activity3 Array Declaration = ",ArrayDec);
console.log("type is = ",typeof ArrayDec);
// as array is a type of object, when we will use typeof on an array it will return (object) so for confirming that we can do this instead -->
console.log("Array Type checking = " ,Array.isArray(ArrayDec));

/* ---------------------------------------------------------------------------------------*/

/* Activity 4
Task5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. 
*/

let someFirstValue;
someFirstValue = 200;
someFirstValue = 1000;
console.log("Task5 Activity4 Reassigning a value to const, and observing it = ", someFirstValue );

/* ---------------------------------------------------------------------------------------*/

/* Activity 5 Understanding const
Task6: Try reassigning a variable declared with const and observe an error
*/

const someConst = 10;
// someConst = 20;
console.log("Task6 Activity5 Understanding const = ",someConst)
