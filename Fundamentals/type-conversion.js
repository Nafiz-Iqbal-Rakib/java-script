// ==========================================
// TYPE CONVERSION
// ==========================================

// Type Conversion:
// Type conversion is changing a value from one data type to another.

// Example:
// String -> Number
// Number -> String
// Boolean -> Number
// Number -> Boolean


// ==========================================
// 1. STRING TO NUMBER
// ==========================================

// Number():
// Number() converts a value into a number.

let age = "24";

console.log(age);
console.log(typeof age); // string

age = Number(age);

console.log(age);
console.log(typeof age); // number


// Another Example

let price = "500";

price = Number(price);

console.log(price);
console.log(typeof price); // number


// ==========================================
// 2. NUMBER TO STRING
// ==========================================

// String():
// String() converts a value into a string.

let number = 100;

console.log(number);
console.log(typeof number); // number

number = String(number);

console.log(number);
console.log(typeof number); // string


// Another Example

let score = 95;

score = String(score);

console.log(score);
console.log(typeof score); // string


// ==========================================
// 3. STRING TO BOOLEAN
// ==========================================

// Boolean():
// Boolean() converts a value into a boolean.

// A non-empty string becomes true.
// An empty string becomes false.

let name = "Nafiz";

console.log(Boolean(name)); // true

let emptyName = "";

console.log(Boolean(emptyName)); // false


// ==========================================
// 4. NUMBER TO BOOLEAN
// ==========================================

// 0 becomes false.
// Any other number becomes true.

let a = 10;

console.log(Boolean(a)); // true


let b = 0;

console.log(Boolean(b)); // false


// ==========================================
// 5. BOOLEAN TO NUMBER
// ==========================================

// true becomes 1.
// false becomes 0.

let isStudent = true;

console.log(Number(isStudent)); // 1


let isWorking = false;

console.log(Number(isWorking)); // 0


// ==========================================
// 6. BOOLEAN TO STRING
// ==========================================

// String() can also convert boolean values into strings.

let isLoggedIn = true;

console.log(String(isLoggedIn));
console.log(typeof String(isLoggedIn)); // string

