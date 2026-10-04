// ==========================================
// SCOPE
// ==========================================

// Scope:
// Scope determines where a variable can be
// accessed in a program.


// ==========================================
// 1. GLOBAL SCOPE
// ==========================================

let name = "Nafiz";

console.log(name);

function testGlobal() {
    console.log(name);
}

testGlobal();


// ==========================================
// 2. FUNCTION SCOPE
// ==========================================

function testFunction() {

    let age = 24;

    console.log(age);
}

testFunction();


// This will NOT work:
// console.log(age);


// ==========================================
// 3. BLOCK SCOPE
// ==========================================

if (true) {

    let department = "CSE";
    const university = "AIUB";

    console.log(department);
    console.log(university);
}


// These will NOT work:
// console.log(department);
// console.log(university);


// ==========================================
// var vs let
// ==========================================

if (true) {

    var city = "Dhaka";
    let country = "Bangladesh";
}

console.log(city);

// This will NOT work:
// console.log(country);