// JavaScript Fundamentals - Part 1
// We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 -10);






// First Part
// JavaScript Fundamentals - Hour 1

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// let lastName = "Sarah";
// let myCurrentJob = "teacher";
// let PIZ = 3.14;

// const country = "Portugal";
// const language = "Portugese";
// const population = 10;

// let ageNow = 25;
// ageNow = 26;

// console.log("=== DATA TYPES ===");
// let age1 = 23;
// console.log(age);
// console.log(typeof age1);

// let firstName1 = "Jonas";
// console.log(firstName1);
// console.log(typeof firstName1);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);







// Second Part
// JavaScript Fundamentals - Hour 2

// Basic Operators
// console.log("=== BASIC OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations;");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multipplication: ", 4 * 7);
// console.log("Division: ", 15/3);
// console.log("Experimentation: ", 2 ** 3);


// //String Concat
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old.");

// // Assignment Operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x*= 4:", x);

// x /= 2;
// console.log("After x /= 2:", 2);

// x ++; 
// console.log("After x++:", x);

// x --;
// x --;
// console.log("After x-- twice:", x);


// // Comparison Operators
// console.log("=== COMPARISON OPERATORS");

// console.log("Age comparison");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);


// const isFullAge1 = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge1);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);


// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);


// Operator Precedence
// console.log("=== Operator Precedence ===");

// const now = 2037;
// const ageJonas = now -1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// // Your code here:
// // 1. Calculate BMIs
// // 2. Create markHigherBMI variable
// // 3. Log results to console

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiMark2 = massMark / (heightMark * heightMark);

// const bmiJohn = massJohn / heightJohn ** 2;
// const bmiJohn2 = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log("Mark's bmi is higher than John:" + markHigherBMI);


// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark21 = massMark2 / heightMark2 ** 2;
// const bmiMark22 = massMark2 / (heightMark2 * heightMark2);

// const bmiJohn21 = massJohn2 / heightJohn2 ** 2;
// const bmiJohn22 = massJohn2 / (heightJohn2 * heightJohn2);

// const markHigherBMI2 = bmiMark21 > bmiJohn21;
// console.log("Mark's bmi is higher than John:" + markHigherBMI2);






// Third Part
// JavaScript Fundamentals - Hour 3

// Strings and Template Literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);


// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3}`);


// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear1 = 2012;

// let century;
// if (birthYear1 <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); // 21


// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));


// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }


// if (height !== undefined) {
//   console.log("Height is defined");
// }



// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }







// Fourth Part
// javascript Fundamentals - Hour 4

// Type Conversion and Coercion

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Type Coercion (Automatic)
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

// Guess the output
let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

// Exercise 1: Conversion Detective
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");
console.log("5" / "2");

const userAge =  "18"
const userScore = 95;

console.log(Number(userAge));
console.log(String(userScore));

// Exercise 2: Fix the Bug
// const num1 = prompt("Enter first number:");
// const num2 = prompt("Enter the second numnber:");
// const sum = num1 + num2;

// console.log(`Sum: ${sum}`);

// const num1 = Number (prompt("First number:")); // Returns string!
// const num2 = Number (prompt("Second number:")); // Returns string!
// const sum = num1 + num2; // Bug: adds as strings!
// console.log(`Sum: ${sum}`);

// Equality Operators
// const age = "18";
// if (age === 18) console.log("You just became an adult! :D (strict");
// if (age == 18) console.log("You just became an adult! :D (loose)");

console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9")
}

if (favourite !== 23) console.log("Why not 23?");

// Exercie 1
console.log(5 === "5");
console.log(5 == "5");
console.log(true === 1);
console.log(true == 1);
console.log(false === 0);
console.log(false == 0);

// Exercise 2
const username = prompt("Username:");
const password = prompt("Password:");
// if (username && password) {
//     console.log("Welcome admin!");
// } else {
//     console.log("Access denied");
// }

if  (username === "admin" && password === "1234") {
    console.log("Welcome admin!");
} else {
    console.log("Access denied");
}

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

// More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 188 || hasPermission) && hasExperience) {
//     console.log("Approve to drive!");
// } else {
//     console.log("Not approved to drive!");
// }

// Exercise 1: Club Entry System
// const age = 17;
// const hasID = true;
// const isVIP = true;

// if ((age >= 21 && hasID) || isVIP) {
//     console.log(`Welcome to the club!`);
// } else {
//     console.log(`Sorry, you cannot enter`);
// }

// Exercise 2: Weather Advisor:
const temperature = 25;
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 !== isRaining) {
    console.log("Perfect Day!");
} else if (temperature >= 15 && temperature <= 35  !== isRaining) {
    console.log("Good Day!");
} else {
    console.log("Stay inside!");
}

// Condiitional Ternary Operator
const age = 23;
const drink = age >=18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "Wine 🍷";
} else {
    drink2 = "Water 💧";
}

console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "Wine 🍷"  : "Water 💧"}`);

// I just added to test the result
// const score = 99;
// isLoggedIn = true;
// isPremium = true;

// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0;

// if (score >= 90) {
//     console.log("Excellent!");
//     grade = "A";
//     bonus = true;
// } else if (score >= 80) {
//     console.log("Great job!");
//     grade = "B";
// } 

// Excercise 1: Status Messages
const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//     welcomeMessage = "Welcome back!";
// } else {
//     welcomeMessage = "Please log in";
// }

const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(welcomeMessage);


const isPremium = false;
// let price;
// if (isPremium) {
//     price = 100 * 0.8;
// } else {
//     price = 100;
// }

const price = isPremium ? 100 * 0.8 : 100;
console.log(price);


//Exercise 2: Smart Responses
const score = 85;
const weather = "sunny";
const battery = 15;

console.log(`Your score: ${score} (${score === 85 ? "Passed" : "Failed"})`)
console.log(`Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`);
console.log(`Battery is at ${battery}% (${battery <= 15 ? "Low battery warning" : "Battery OK"})`);

// Final Challenge Tip Calculator
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}`);

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value is ${bill2 + tip2}`);

const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`The bill was  ${bill3}, the tip was ${tip3}, and the total value is ${bill3 + tip3}`); 

