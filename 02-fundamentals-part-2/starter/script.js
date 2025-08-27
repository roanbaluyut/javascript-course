console.log("Fundamentals Part 2");

// JavaScript Fundamentals Part 2 - Hour 1
// Functions - Declarations and Expressions
console.log(`=== FUNCTIONS ===`);

function  logger() {
    console.log("This function is working");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const juice1 = `Juice with 5 apples and 0 oranges.`;
const juice2 = `Juice with 2 apples and 4 oranges.`;
const juice3 = `Juice with 3 apples and 2 oranges.`;

const calAge = function (birthYear) {
    return 2037 - birthYear;
};

const age1 = calAge(2000);
console.log(age1);

function calAge2 (birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

const myAge = calAge2(2004, 2025);
const someoneAge = calAge2(1999, 2025);

console.log(`I am ${myAge} years old.`);
console.log(`She is ${someoneAge} years old.`);

function introduce(firstName, lastName, age) {
    const introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
    return introduction;
}

console.log(introduce("John", "Doe", 30));
console.log(introduce("Sarah"));


function calcAge3(birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}

console.log(yearsUntilRetirement(2004, "Roan"));
console.log(yearsUntilRetirement(1940, "Agnes Tachyon"));


const globalVar = `I am global!`;

function testScope() {
    const localVar = `I am local!`;
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);


const userName = "Jonas";

function createWelcomeMessage( user) {
    const message = `Welcome ${user}!`;
    const timestamp = new Date().toLocaleTimeString();
    return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));


// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No team wins.. (${avgDolphins} vs ${avgKoalas})`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));




