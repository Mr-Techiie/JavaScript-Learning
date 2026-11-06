
const fruits = ["Mango", "Kiwi", "Apple"];
// console.log(fruits);

fruits.push("Banana");  // Pushes "Banana" to the end of the array
// console.log(fruits);

const lastFruit = fruits.pop();  // Removes the last element ("Banana") from the array
// console.log(lastFruit);
// console.log(fruits);

// unshift() - Adds an element to the beginning of the array
fruits.unshift("Pineapple");
// console.log(fruits);

// shift() - Removes the first element from the array
const firstFruit = fruits.shift();
// console.log(firstFruit);
// console.log(fruits);

// push, pop, unshift, and shift change the original array.

fruits.includes("Kiwi");  // Returns true if "Kiwi" is in the array, otherwise false
// console.log(fruits.includes("Kiwi"));

// indexOf() — get an item’s position
// console.log(fruits.indexOf("Kiwi"));

const numbers = [4, 11, 18, 23, 40];
const firstBigNumber = numbers.find(number => number > 25);  // Returns the first number greater than 25
// console.log(firstBigNumber);

// filter() returns a new array containing every item that passes the test. The original array stays the same.

const bigNumbers = numbers.filter(number => number > 10);
// console.log(bigNumbers);
// console.log(numbers);  // Original array remains unchanged

const doubled = numbers.map(number => number * 2);
// console.log(doubled);

const names = ["Zoe", "Xia", "Alex"];
names.sort();  // Sorts the array in alphabetical order
// console.log(names);

// For numbers, provide a comparison function. Without one, sort() sorts values like strings:

const scores = [12, 100, 25, 35, 121];
