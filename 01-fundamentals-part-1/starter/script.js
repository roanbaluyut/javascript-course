// JavaScript Fundamentals - Part 1
// We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 -10);


// First Part
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

// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3}`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear1 = 2012;

let century;
if (birthYear1 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); // 21


const score = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));


const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


if (height !== undefined) {
  console.log("Height is defined");
}



// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

