
/* 

const items = [10, "Gurii", null, true, {age: 21}];

console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items.length);

const a = new Array(10);  // creates an array with 10 empty slots. It does not create an array containing the number 10.

const b = new Array(10, 20, 30);   // [10, 20, 30]


// ---- Zero Based indexing. --------

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
console.log(fruits[3]); // undefined


const arr = new Array(3);

console.log(arr.length);  // 3
console.log(arr[0]);      // undefined
console.log(arr === []);  // false


// push() — Add at the end

const fruits = ["Apple", "Banana"];

const result = fruits.push("Mango");

console.log(fruits);   // [ 'Apple', 'Banana', 'Mango' ]
console.log(result);   // 3 (returns new array length)


// pop() — Remove from the end

const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.pop();

console.log(fruits);   //  [ 'Apple', 'Banana' ]
console.log(result);   //  Mango (returns the removed element)


// unshift() — Add at the beginning

const fruits = ["Apple", "Banana"];

const result = fruits.unshift("Mango");

console.log(fruits);  // [ 'Mango', 'Apple', 'Banana' ]
console.log(result);  // 3


// shift() — Remove from the beginning

const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.shift();

console.log(fruits);  //  [ 'Banana', 'Mango' ]
console.log(result);  //  Apple


const numbers = [10, 20, 30];

const a = numbers.push(40);
const b = numbers.shift();
const c = numbers.pop();

console.log(numbers);
console.log(a);
console.log(b);
console.log(c);


// slice() -- extracts a portion of an array and returns it as a new array without modifying the original.

// array.slice(start, end);     // (included, excluded)

const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);    // [ 20, 30, 40 ]
console.log(numbers);   // [ 10, 20, 30, 40, 50 ]

// Important: slice() does not mutate the original array.


// Array.isArray()

// A simple static method that checks whether a value is an actual array.

console.log(Array.isArray([10, 20]));       // true
console.log(Array.isArray(("Gurii")));      // false
console.log(Array.isArray({age: 21}));      // false

console.log(Array.isArray([]));             // true
console.log(Array.isArray(null));           // false
console.log(Array.isArray(new Array(5)));   // true


// Array Destructuring

// Destructuring lets you extract array elements into separate variables.

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);


// Skipping elements , ---- Use commas to skip elements.

const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);


// Default values
// If an element is undefined, you can provide a default value.

const numbers = [10];

const [a, b = 50] = numbers;

console.log(a);   // 10
console.log(b);   // 50


const student = ["Guri", 20, ["CSE", "BCA"]];

const [name, age, [course1, course2]] = student;

console.log(course1);   // CSE
console.log(course2);   // BCA


const data = [100, [200, 300]];

const [a, [b, c]] = data;

console.log(a, b, c);    // 100 200 300


// Rest Operator — Collect elements
// Rest collects remaining elements into a new array.


const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);        // 10
console.log(second);       // 20
console.log(remaining);    // [ 30, 40, 50 ]























*/

// Spread Operator — Expand elements
// Spread expands an array into individual elements.

const a = [10, 20];
const b = [30, 40];

const combined = [...a, ...b];

console.log(combined);     // [ 10, 20, 30, 40 ]








