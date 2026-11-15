// -------- conditionals -------- 

/* let catchingBus = true;

if (catchingBus) {
    console.log("I will reach home on time");
} else {
    console.log("I will be late to reach");
}


let age = 17;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// --------- Independent if vs if-else if --------------

let x = 0;

if (x === 0) {
    console.log("Zero");
}

if (x >= 0) {
    console.log("Greater than or equal to zero");
}

if (x <= 0) {
    console.log("Less than or equal to zero");
}

let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}

//  Nested if-else

let condition = true;
let innerCondition = false;

if (condition) {
    console.log("Outer if");

    if (innerCondition) {
        console.log("Inner if");
    } else {
        console.log("Inner else");
    }

} else {
    console.log("Outer else");
}

// ------- Fall through in switch-case ---------

let city = "Bangalore";

switch (city) {
    case "Bangalore":
    case "Kolkata":
    case "Agra":
    case "Jaipur":
        console.log("All these are in India");
        break;

    case "New York":
        console.log("This is in USA");
        break;

    default:
        console.log("Unknown city");
}


let weekday = 5;
switch(weekday){
    case 1: 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 : 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7 : 
        console.log("Sunday");
        break;
    
default : 
         console.log("Invalid day number");
} */



/* // -------- LOOPS -------- 


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum); // 2550

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i));
}


// ------- break — exits the loop immediately ---------

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}

// ------- continue — skips the current iteration ----------

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}


// JavaScript allows us to use multiple counters in a single for loop.

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log(i, j);
}

// -------- Pyramid ---------

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}


// Fix: Build each row as a string


for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
    }
    
    
// ------ While loop
    
    let counter = 1;
    
    while (counter <= 5) {
        console.log(counter);
        counter++;
    }
    
// ------ do - While loop
    
    let variable = 1;
    
    do {
        console.log(variable);
        variable++;
    } while (variable <= 5);
    
    let x = 10;
    
    do {
        console.log(x);
    } while (x < 5);














 */


/*
    Infinite for loop
    
    for (;;) {
    console.log("Hello");
} */


/*
    Infinite while loop
    while (true) {
    console.log("Hello");
}
 */


/*
    Infinite do-while loop
    do {
    console.log("Hello");
} while (true);
 */













