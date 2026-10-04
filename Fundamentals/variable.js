// Variable:
// A variable is a named place used to store a value.

// let:
// let is used to create a variable whose value can be changed.

// const:
// const is used to create a variable whose value cannot be reassigned.

// var:
// var is an older way to create a variable.
// It is mostly replaced by let and const in modern JavaScript.


// Scope:
// Scope defines where a variable can be accessed in a program.

// var:
// var has function scope.

// let and const:
// let and const have block scope.


// ************************************************************


// var is used in older JavaScript

var name = "Nafiz";
var age = 24;

console.log(name);
console.log(age);

// var value can be changed
age = 25;

console.log(age);


// *** let and const are used in modern JavaScript ***

// Task 1
let name = "Nafiz Iqbal";
let age = 24;
let department = "CSE";

console.log(name);
console.log(age);
console.log(department);


// Task 2
let num1 = 50;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


// Task 3
let balance = 1000;

balance = balance + 500;

console.log(balance);


// Task 4
const university = "AIUB";
const country = "Bangladesh";

console.log(university);
console.log(country);