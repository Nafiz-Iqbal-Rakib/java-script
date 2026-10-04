// ==========================================
// CONDITIONAL STATEMENTS
// ==========================================

// if statement:
// An if statement runs a block of code when a condition is true.


// Basic if statement

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}


// Example with marks

let marks = 80;

if (marks >= 40) {
    console.log("Pass");
}


// Example with boolean

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
}


// ==========================================
// 2. ELSE STATEMENT
// ==========================================

// else statement:
// An else statement runs a block of code when
// the if condition is false.


let age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}


// Example with marks

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// Example with boolean

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please login first.");
}


// ==========================================
// 3. ELSE IF STATEMENT
// ==========================================

// else if:
// else if is used to check another condition
// when the previous condition is false.


let marks = 75;

if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 70) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("B");
}
else if (marks >= 50) {
    console.log("C");
}
else {
    console.log("Fail");
}


// Example with age

let age = 15;

if (age >= 18) {
    console.log("Adult");
}
else if (age >= 13) {
    console.log("Teenager");
}
else {
    console.log("Child");
}


// ==========================================
// 4. NESTED IF
// ==========================================

// Nested if:
// A nested if is an if statement inside another if statement.


let isLoggedIn = true;
let age = 24;

if (isLoggedIn) {

    if (age >= 18) {
        console.log("You can access the website.");
    }

}


// Example

let username = "Nafiz";
let password = "1234";

if (username === "Nafiz") {

    if (password === "1234") {
        console.log("Login successful");
    }

}


// ==========================================
// 5. TERNARY OPERATOR
// ==========================================

// Ternary Operator:
// A ternary operator is a short way to write an if-else statement.

// Syntax:
// condition ? valueIfTrue : valueIfFalse;


// Example

let age = 20;

let result = age >= 18 ? "Adult" : "Not Adult";

console.log(result);


// Example with marks

let marks = 75;

let passStatus = marks >= 40 ? "Pass" : "Fail";

console.log(passStatus);


// Example with login

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome!" : "Please login.";

console.log(message);


// ==========================================
// 6. SWITCH STATEMENT
// ==========================================

// switch:
// A switch statement is used to choose one block of code
// from multiple possible cases.

// case:
// A case defines a possible value.

// break:
// break stops the switch after a matching case.

// default:
// default runs when no case matches.


let day = 2;

switch (day) {

    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;

    case 4:
        console.log("Tuesday");
        break;

    case 5:
        console.log("Wednesday");
        break;

    case 6:
        console.log("Thursday");
        break;

    case 7:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}


// ==========================================
// 7. TRUTHY & FALSY
// ==========================================

// Truthy:
// A value is truthy when JavaScript treats it as true in a condition.

// Falsy:
// A value is falsy when JavaScript treats it as false in a condition.


// Truthy values

if ("Nafiz") {
    console.log("String is truthy");
}

if (100) {
    console.log("Number is truthy");
}


// Falsy values

if (0) {
    console.log("This will not run");
} else {
    console.log("0 is falsy");
}


if ("") {
    console.log("This will not run");
} else {
    console.log("Empty string is falsy");
}


// Important falsy values:
// false
// 0
// ""
// null
// undefined
// NaN