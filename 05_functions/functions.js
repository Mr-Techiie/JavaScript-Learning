/* 

function greet(){
    console.log("Hello World");
}

greet();
greet();

// Now let's learn another way of creating functions.

const greet = function(){
    console.log("Hello");
};

greet();

const greeting = function() {
    console.log("Hello");
    // return "Hello";     // return prints nothing when greeting() is called.
};

greeting();

console.log(greeting);

// Using return

const greet = function() {
    return "Hello";
};

console.log(greet);         // [Function: greet]
console.log(greet());       // Hello
console.log(typeof greet);  // function


// Using console.log()

const greets = function() {
    console.log("Hello");
};

console.log(greets);
console.log(greets());
console.log(typeof greets);

/* 
Here's what happens:
1. greet → prints the function definition itself.
2. greet() → executes the function. Its internal console.log() prints "Hello".
3. But the function doesn't explicitly return anything, so JavaScript automatically returns undefined.
4. The outer console.log() therefore prints undefined.
5. typeof greet → prints "function". 

Think of it this way:
- console.log() = Show me the result.
- return = Give the result back so I can use it somewhere else.


// Parameters and Arguments

function sum(a, b){
    console.log(a + b);
}

sum(24, 12);
sum(20, 30);


// Return Values with Parameters

function sum(x, y){
    return x + y;
}

const result = sum(20, 30);

console.log(result);

console.log(result + 50);
console.log(result * 5);


function calculate(a, b) {
    const result = a * b;
    return result;
}

const answer = calculate(5, 4);

console.log(answer);
console.log(answer + 10);
console.log(calculate(2, 3));


// Default Parameters

// JavaScript allows us to assign default values to function parameters.


function calculate(a, b = 0) {
    return a + b;
}

console.log(calculate(5, 10)); 
console.log(calculate(5));

// First call: a = 5, b = 10. The passed argument overrides the default.
// Second call: a = 5, b = 0. Since no second argument was passed, the default value is used.


// Rest Parameters (...)

// What if you don't know how many arguments will be passed to a function?

// It collects all remaining arguments into an array.

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40, 50);  // [ 10, 20, 30, 40, 50 ]


// One rule: Rest parameter must always be the last parameter.

// function test(a, b, ...rest) { } // Valid


// function test(...rest, a) { } // Invalid


// Sum of numbers using REST parameter

function add(...numbers){

    let sum = 0;

    for (let number of numbers ){
        sum += number;
    }

    return sum;
}

console.log(add(10, 20, 30));
console.log(add(5, 5, 5, 5));


// Predict the output:

function calculate(a, ...numbers) {
    console.log(a);
    console.log(numbers);
}

calculate(10, 20, 30, 40);

// a gets the first argument: 10.

// ...numbers collects all remaining arguments into an array.


// Nested Functions


function outer(){
    console.log("outer function");

    function inner(){
        console.log("inner function");
    }

    inner();
}

outer(); 

// NOTE: An inner function defined inside an outer function cannot normally be accessed directly from outside that outer function.


// Returning an Inner Function

// Previously, we learned that an inner function cannot normally be accessed outside its outer function.

// But JavaScript gives us a way to make it accessible: return the inner function.


function outer() {
    console.log("Outer");

    function inner() {
        console.log("Inner");
    }

    return inner;
}

const result = outer();

result();   

// outer() gets called.
// "Outer" is printed.
// inner is defined.
// return inner returns the function itself.
// result now holds the returned function.
// result() executes that inner function.


function outer() {
    function inner() {
        return "Hello";
    }

    return inner;
}

const result = outer();

console.log(result);    // prints the function itself because result holds the inner function.

console.log(result());  // executes the inner function, which returns "Hello".


// result → function reference.
// result() → function execution.


// Callback Functions

// A callback function is a function passed as an argument to another function, which is then called inside that function.


function greet(callback) {
    console.log("Hello");

    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet(sayBye);


function first(callback) {
    console.log("A");
    callback();
    console.log("C");
}

function second() {
    console.log("B");
}

first(second);

// second is passed as an argument to first
// the callback parameter now holds the second function
// first prints A
// callback executes second function and prints B
// control returns to the first function
// now first prints C


// Anonymous Functions in Callbacks

// Previously, we passed a named function as a callback. But what if we don't want to create a separate function just to pass it as a callback?

// We can directly pass an anonymous function.


function greet(callback){
    console.log("Hello");

    callback();
}

greet(function() {
    console.log("Goodbyee");
});


// function() creates an anonymous function (a function without a name).
// This function is passed directly as an argument to greet.
// The callback parameter holds that function.
// callback() executes it.
















*/















