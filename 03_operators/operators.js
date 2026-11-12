/* // console.log("Day 3: Operators");

// Arithmetic Operators

console.log(10/3);

// Addition also performs string concatenation.

console.log(10 + 5);     // 15
console.log("10" + 5);   // "105"
console.log("Hello " + "World"); // Hello World

// Exponentiation
JavaScript uses ** instead of ^.
//  Shift (⇧) + Option (⌥) + A for a block comment.

console.log(2 ** 4);  


// Increment and decrement

let count = 5;

console.log(count++); // 5 (post-increment)
console.log(count);   // 6

console.log(++count); // 7 (pre-increment)
console.log(count);   // 7


let a = 10;
let b = 3;

console.log(a / b);
console.log(a % b);
console.log(a ** b);

let x = 5;
console.log(x++ + ++x);

// Assignment operators
// Assignment operators assign values to variables or update their existing values.

let score = 100;

score += 20;
console.log(score); // 120

score -= 30;
console.log(score); // 90

score *= 2;
console.log(score); // 180

score /= 3;
console.log(score); // 60

// The + assignment operator can also concatenate strings.

let name = "Java";
name += "Script";

console.log(name); // JavaScript

// Comparison operators
// Comparison operators compare two values and return a Boolean: true or false

// Loose equality (==) performs type coercion when necessary.

console.log(5 == "5");       // true
console.log(10 == "10");     // true
console.log(0 == false);     // true
console.log(null == undefined); // true


// Strict equality (===) compares without converting types.

console.log(5 === "5");      // false
console.log(10 === 10);      // true
console.log(0 === false);    // false
console.log(null === undefined); // false


// Interesting cases

console.log(NaN === NaN); // false

console.log(null === null);         // true
console.log(undefined === undefined); // true


// One more important case: objects are compared by reference, not by their contents.

let a = { age: 20 };
let b = { age: 20 };

console.log(a === b); // false


// Although their properties are identical, they are two different objects in memory.

// But:

let c = a;

console.log(a === c); // true


// Both variables refer to the same object.


// Logical AND (&&)
// Returns the first falsy operand, or the last operand if all are truthy.

console.log(true && true);     // true
console.log(true && false);    // false
console.log("hello" && "world"); // "world"
console.log(0 && 10);          // 0


// Logical OR (||)
// Returns the first truthy operand, or the last operand if all are falsy.

console.log(false || true);    // true
console.log(0 || 10);          // 10
console.log("hello" || "world"); // "hello"
console.log(null || undefined); // undefined

// Logical NOT (!)
// Converts the value to a Boolean and reverses it.

console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true
console.log(!"hello"); // false

// Short-circuit evaluation
// JavaScript stops evaluating as soon as the result is determined.

console.log(false && 10); // 10 is never evaluated
console.log(true || 10);  // 10 is never evaluated

// In JavaScript, && and || can return actual operand values, not necessarily just true or false.

// Nullish coalescing (??)
// Returns the right-hand value only when the left-hand value is null or undefined.

console.log(null ?? "Default");      // "Default"
console.log(undefined ?? "Default"); // "Default"

console.log(0 ?? 100);      // 0
console.log(false ?? true); // false
console.log("" ?? "Hello"); // ""

// Practical use:

let username = null;

let displayName = username ?? "Guest";

console.log(displayName); // Guest

// Ternary operator (?:)

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult

// Nested ternary operator

let marks = 75;

let grade = marks >= 90 ? "A" :
            marks >= 60 ? "B" : "C";

console.log(grade); // B

// Bitwise operators

console.log(12 & 10);
console.log(12 | 10);
console.log(12 ^ 10);
console.log(8 << 1);
console.log(16 >> 2);

//  Relational in operator

// The in operator checks whether a property exists in an object.

// Syntax:
// propertyName in objectName 

let car = {
    brand: "BMW",
    model: "X5",
    year: 2025
};

console.log("brand" in car); // true
console.log("year" in car);  // true
console.log("price" in car); // false

// Grouping and operator precedence
// Grouping uses parentheses () to control the order of evaluation.

let evaluee = 1 + 2 * 3;

console.log(evaluee); // 7



// Multiplication has higher precedence than addition.

// But:

let marks = (1 + 2) * 3;

console.log(marks); // 9


// Parentheses force the grouped expression to evaluate first.

// Remember: When in doubt, use parentheses to make expressions clear.

let student = {
    name: "Sam",
    marks: 0
};

console.log("marks" in student);
console.log("age" in student);
console.log(5 + 2 * 3);
console.log((5 + 2) * 3);

// typeof operator

console.log(typeof "Hello");     // "string"
console.log(typeof 100);         // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof 10n);         // "bigint"
console.log(typeof Symbol());    // "symbol"

// Important JavaScript special cases
// 1. Arrays return "object"

let numbers = [1, 2, 3];

console.log(typeof numbers); // "object"


// To check whether something is an array, use:
console.log(Array.isArray(numbers)); // true


// 2. null returns "object"
console.log(typeof null); // "object"


// This is a historical JavaScript bug that remains for backward compatibility.

// 3. Functions return "function"
function greet() {
    console.log("Hello");
}

console.log(typeof greet); // "function"


// instanceof operator

// The instanceof operator checks whether an object's prototype chain contains the prototype of a specified constructor.

let numbers = [1, 2, 3];

console.log(numbers instanceof Array);  // true
console.log(numbers instanceof Object); // true
console.log(numbers instanceof String); // false

let date = new Date();

console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true


*/






















