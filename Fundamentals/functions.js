// ==========================================
// FUNCTIONS
// ==========================================

// Function:
// A function is a reusable block of code
// that performs a specific task.


// ==========================================
// FUNCTION DECLARATION
// ==========================================

function sayHello() {
    console.log("Hello Nafiz");
}


// ==========================================
// FUNCTION CALL
// ==========================================

sayHello();
sayHello();
sayHello();

// ==========================================
// 2. PARAMETERS & ARGUMENTS
// ==========================================

// Parameter:
// A parameter is a variable defined inside a function
// to receive a value.

// Argument:
// An argument is the actual value passed to a function
// when calling it.


// Example with one parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Nafiz");


// Example with multiple parameters

function introduce(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}

introduce("Nafiz", 24);


// Example with calculation

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// ==========================================
// 3. RETURN
// ==========================================

// return:
// return sends a value from a function back
// to the place where the function was called.


// Example

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// Returned value can be used again

console.log(result * 2);


// Another example

function multiply(a, b) {
    return a * b;
}

let answer = multiply(5, 4);

console.log(answer);


// Code after return does not execute

function test() {
    return 10;

    console.log("Hello");
}

console.log(test());


// ==========================================
// 4. DEFAULT PARAMETERS
// ==========================================

// Default Parameter:
// A default parameter is a default value used when
// no argument is provided.


// Example

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Nafiz");
greet();


// Example with multiple parameters

function introduce(name = "Unknown", age = 0) {
    console.log("Name:", name);
    console.log("Age:", age);
}

introduce("Nafiz", 24);

introduce();

// ==========================================
// 5. FUNCTION EXPRESSION
// ==========================================

// Function Expression:
// A function expression is a function stored inside a variable.


// Basic Function Expression

const greet = function () {
    console.log("Hello");
};

greet();


// Function Expression with parameter

const sayHello = function (name) {
    console.log("Hello " + name);
};

sayHello("Nafiz");


// Function Expression with return

const add = function (a, b) {
    return a + b;
};

let result = add(10, 20);

console.log(result);

// ==========================================
// 6. ARROW FUNCTION
// ==========================================

// Arrow Function:
// An arrow function is a shorter syntax for writing a function.


// Normal Function Expression

const add1 = function(a, b) {
    return a + b;
};

console.log(add1(10, 20));


// Arrow Function

const add2 = (a, b) => {
    return a + b;
};

console.log(add2(10, 20));


// Short Arrow Function

const add3 = (a, b) => a + b;

console.log(add3(10, 20));


// One parameter

const greet = name => {
    console.log("Hello " + name);
};

greet("Nafiz");


// No parameter

const sayHello = () => {
    console.log("Hello");
};

sayHello();