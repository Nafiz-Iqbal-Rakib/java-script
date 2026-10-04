// ==========================================
// ARRAYS
// ==========================================

// Array:
// An array is a data structure used to store multiple values
// in a single variable.


// ==========================================
// 1. CREATE ARRAY
// ==========================================

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);


// ==========================================
// 2. INDEX
// ==========================================

// Array index starts from 0.

// Apple  → index 0
// Mango  → index 1
// Banana → index 2


// ==========================================
// 3. ACCESS ARRAY ELEMENT
// ==========================================

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// ==========================================
// 4. UPDATE ARRAY ELEMENT
// ==========================================

fruits[1] = "Orange";

console.log(fruits);


// ==========================================
// 5. LENGTH
// ==========================================

console.log(fruits.length);

// ==========================================
// 6. push()
// ==========================================

// push():
// The push() method adds one or more elements
// to the end of an array.

let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);


// ==========================================
// 7. pop()
// ==========================================

// pop():
// The pop() method removes the last element
// from an array.

let removedFruit = fruits.pop();

console.log(removedFruit);
console.log(fruits);
// ==========================================
// 8. shift()
// ==========================================

// shift():
// The shift() method removes the first element
// from an array.

let fruits = ["Apple", "Mango", "Banana"];

let removedFruit = fruits.shift();

console.log(removedFruit);
console.log(fruits);


// ==========================================
// 9. unshift()
// ==========================================

// unshift():
// The unshift() method adds one or more elements
// to the beginning of an array.

fruits.unshift("Orange");

console.log(fruits);

// ==========================================
// 10. includes()
// ==========================================

// includes():
// The includes() method checks whether an array
// contains a specific value.

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Orange"));


// ==========================================
// 11. indexOf()
// ==========================================

// indexOf():
// The indexOf() method returns the index of
// a specific value in an array.

console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Orange"));

// ==========================================
// 12. slice()
// ==========================================

// slice():
// The slice() method returns a portion of an array
// without changing the original array.

let fruits = ["Apple", "Mango", "Banana", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
console.log(fruits);


// ==========================================
// 13. splice()
// ==========================================

// splice():
// The splice() method can add, remove,
// or replace elements in an array.

fruits.splice(1, 2);

console.log(fruits);


// Add element using splice()

let colors = ["Red", "Blue"];

colors.splice(1, 0, "Green");

console.log(colors);

// ==========================================
// 14. forEach()
// ==========================================

// forEach():
// The forEach() method executes a function once
// for each element in an array.


let fruits = ["Apple", "Mango", "Banana"];


// Print every element

fruits.forEach((fruit) => {
    console.log(fruit);
});


// Print element and index

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// ==========================================
// 15. map()
// ==========================================

// map():
// The map() method creates a new array
// by transforming each element of an existing array.


// Example

let numbers = [1, 2, 3, 4];

let doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);


// Short version

let tripled = numbers.map(number => number * 3);

console.log(tripled);


// Using index

let fruits = ["Apple", "Mango", "Banana"];

let result = fruits.map((fruit, index) => {
    return index + " - " + fruit;
});

console.log(result);

// ==========================================
// 16. filter()
// ==========================================

// filter():
// The filter() method creates a new array
// containing elements that pass a condition.


// Example 1

let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(number => number > 20);

console.log(result);


// Example 2: Even numbers

let values = [1, 2, 3, 4, 5, 6];

let evenNumbers = values.filter(number => number % 2 === 0);

console.log(evenNumbers);


// Example 3: String

let fruits = ["Apple", "Mango", "Banana", "Orange"];

let longFruits = fruits.filter(fruit => fruit.length > 5);

console.log(longFruits);

// ==========================================
// 17. find()
// ==========================================

// find():
// The find() method returns the first element
// that passes a condition.


let numbers = [10, 15, 20, 25, 30];

let result = numbers.find(number => number > 20);

console.log(result);


// If no element matches

let value = numbers.find(number => number > 50);

console.log(value);


// find() with objects

let users = [
    { id: 1, name: "Nafiz" },
    { id: 2, name: "Rahim" },
    { id: 3, name: "Karim" }
];

let user = users.find(user => user.id === 2);

console.log(user);

// ==========================================
// 18. reduce()
// ==========================================

// reduce():
// The reduce() method reduces an array to a single value
// by applying a function to each element.


// Sum

let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);


// Multiplication

let values = [2, 3, 4];

let result = values.reduce((total, number) => {
    return total * number;
}, 1);

console.log(result);

// ==========================================
// 19. sort()
// ==========================================

// sort():
// The sort() method sorts the elements of an array.


// String sorting

let fruits = ["Banana", "Apple", "Orange", "Mango"];

fruits.sort();

console.log(fruits);


// Number sorting: ascending

let numbers = [10, 5, 20, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);


// Number sorting: descending

numbers.sort((a, b) => b - a);

console.log(numbers);