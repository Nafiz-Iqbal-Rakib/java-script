// ==========================================
// OPERATORS
// ==========================================

// Operator:
// An operator is a symbol used to perform an operation on values.


// ==========================================
// 1. ARITHMETIC OPERATORS
// ==========================================

// Arithmetic Operators:
// Arithmetic operators are used to perform mathematical calculations.

// +  -> Addition
// -  -> Subtraction
// *  -> Multiplication
// /  -> Division
// %  -> Remainder
// ** -> Exponent (Power)


let a = 10;
let b = 5;


// Addition
console.log(a + b); // 15


// Subtraction
console.log(a - b); // 5


// Multiplication
console.log(a * b); // 50


// Division
console.log(a / b); // 2


// Remainder
console.log(a % b); // 0


// Exponent
console.log(a ** b); // 100000



// ==========================================
// 2. ASSIGNMENT OPERATORS
// ==========================================

// Assignment Operator:
// An assignment operator is used to assign or update a value in a variable.


// =  -> Assign
// += -> Add and assign
// -= -> Subtract and assign
// *= -> Multiply and assign
// /= -> Divide and assign
// %= -> Remainder and assign


// Assignment
let age = 24;

console.log(age);


// Add and assign
age += 1;

console.log(age); // 25


// Subtract and assign
age -= 5;

console.log(age); // 20


// Multiply and assign
age *= 2;

console.log(age); // 40


// Divide and assign
age /= 4;

console.log(age); // 10


// Remainder and assign
age %= 3;

console.log(age); // 1


// ==========================================
// 3. COMPARISON OPERATORS
// ==========================================

// Comparison Operator:
// A comparison operator is used to compare two values.

// The result is usually true or false.


// >   -> Greater than
// <   -> Less than
// >=  -> Greater than or equal
// <=  -> Less than or equal
// ==  -> Equal (loose comparison)
// === -> Equal (strict comparison)
// !=  -> Not equal
// !== -> Not equal (strict comparison)


console.log(10 > 5);       // true

console.log(10 < 5);       // false

console.log(10 >= 10);     // true

console.log(5 <= 10);      // true


// Loose equality
console.log(5 == "5");     // true


// Strict equality
console.log(5 === "5");    // false


// Not equal
console.log(10 != 5);      // true


// Strict not equal
console.log(5 !== "5");    // true



// ==========================================
// 4. LOGICAL OPERATORS
// ==========================================

// Logical Operator:
// A logical operator is used to combine or reverse conditions.

// && -> AND
// || -> OR
// !  -> NOT


// ==========================================
// AND (&&)
// ==========================================

// Both conditions must be true.

console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false
console.log(false && false);   // false


// Example

let age = 24;
let hasID = true;

console.log(age >= 18 && hasID === true); // true


// ==========================================
// OR (||)
// ==========================================

// At least one condition must be true.

console.log(true || true);     // true
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false


// Example

let hasCash = false;
let hasCard = true;

console.log(hasCash || hasCard); // true


// ==========================================
// NOT (!)
// ==========================================

// NOT reverses a boolean value.

console.log(!true);     // false
console.log(!false);    // true


// Example

let isLoggedIn = true;

console.log(!isLoggedIn); // false


// ==========================================
// 5. INCREMENT & DECREMENT OPERATORS
// ==========================================

// Increment:
// Increment increases a value by 1.

// Decrement:
// Decrement decreases a value by 1.

// ++ -> Increment
// -- -> Decrement


// ==========================================
// Increment
// ==========================================

let count = 5;

count++;

console.log(count); // 6


// Same as:
// count = count + 1;


// ==========================================
// Decrement
// ==========================================

count--;

console.log(count); // 5


// Same as:
// count = count - 1;


// ==========================================
// Pre-Increment
// ==========================================

let x = 5;

console.log(++x); // 6


// ==========================================
// Post-Increment
// ==========================================

let y = 5;

console.log(y++); // 5
console.log(y);   // 6


// ==========================================
// Pre-Decrement
// ==========================================

let a = 5;

console.log(--a); // 4


// ==========================================
// Post-Decrement
// ==========================================

let b = 5;

console.log(b--); // 5
console.log(b);   // 4