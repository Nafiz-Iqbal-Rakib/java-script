// ==========================================
// LOOPS
// ==========================================

// Loop:
// A loop is used to repeat a block of code multiple times.


// ==========================================
// 1. FOR LOOP
// ==========================================

// for loop:
// A for loop repeats a block of code while a condition is true.

// Syntax:
// for (initialization; condition; update) {
//     // code
// }


// Print numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ==========================================
// 2. WHILE LOOP
// ==========================================

// while loop:
// A while loop repeats a block of code while a condition is true.


// Print numbers from 1 to 5

let i = 1;

while (i <= 5) {
    console.log(i);

    i++;
}


// Print numbers from 10 to 1

let j = 10;

while (j >= 1) {
    console.log(j);

    j--;
}

// ==========================================
// 3. DO...WHILE LOOP
// ==========================================

// do...while loop:
// A do...while loop runs the code at least once,
// then checks the condition.


// Print numbers from 1 to 5

let i = 1;

do {
    console.log(i);

    i++;
} while (i <= 5);


// Example:
// The code runs once even when the condition is false.

let number = 10;

do {
    console.log(number);
} while (number <= 5);

// ==========================================
// 4. BREAK
// ==========================================

// break:
// break stops the loop immediately.


for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// ==========================================
// 5. CONTINUE
// ==========================================

// continue:
// continue skips the current iteration
// and moves to the next iteration.


for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}