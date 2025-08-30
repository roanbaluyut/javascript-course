//console.log("Fundamentals Part 2");

// JavaScript Fundamentals Part 2 - Hour 1
// Functions - Declarations and Expressions
// console.log(`=== FUNCTIONS ===`);

// function  logger() {
//     console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

// const calAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age1 = calAge(2000);
// console.log(age1);

// function calAge2 (birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }

// const myAge = calAge2(2004, 2025);
// const someoneAge = calAge2(1999, 2025);

// console.log(`I am ${myAge} years old.`);
// console.log(`She is ${someoneAge} years old.`);

// function introduce(firstName, lastName, age) {
//     const introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
//     return introduction;
// }

// console.log(introduce("John", "Doe", 30));
// console.log(introduce("Sarah"));


// function calcAge3(birthYear) {
//     return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge3(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} has already retired.`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "Roan"));
// console.log(yearsUntilRetirement(1940, "Agnes Tachyon"));


// const globalVar = `I am global!`;

// function testScope() {
//     const localVar = `I am local!`;
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);


// const userName = "Jonas";

// function createWelcomeMessage( user) {
//     const message = `Welcome ${user}!`;
//     const timestamp = new Date().toLocaleTimeString();
//     return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));


// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team wins.. (${avgDolphins} vs ${avgKoalas})`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// //Exercise 1: Personal Greeting
// function greetStudent(name) {
//     return `Hello, ${name}, welcome to JavaScript!`;
// }

// const name1 = "Roan";
// console.log(greetStudent(name1));






// JavaScript Fundamentals Part 2 - Hour 2
// Arrays and Data Manipulation

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// console.log("=== ARRAYS ===");


// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Roan", 21, "Male", true];
// console.log(mixed);

// const friends = ["Michael", "Steven", "Peters"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);

// friends[0] = "Reinne";
// console.log(friends[0]);


// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);

// ages[1] = calcAge(1800);
// console.log(ages);


// //Array Methods
// const friends2 = ["Michael", "Steven", "Peter"];

// const newLength = friends2 .push("Quagmire");
// console.log(friends2);
// console.log(newLength);

// friends2.unshift("John");
// console.log(friends2);

// const popped = friends2.pop();
// console.log(friends2);

// const shifter = friends2.shift();
// console.log(friends2);


// console.log(friends2.indexOf("Michael"));
// console.log(friends2.indexOf("Reinne"));

// console.log(friends2.includes("Steven"));
// console.log(friends2.includes("Bob"));

// for (let i = 0; i < friends2.length; i++) {
//     console.log(friends2[i]);
// }

// friends2.forEach(function(friend, index) {
//     console.log(`Friend ${index + 1}: ${friend}`);
// })

// const grades2 = [85, 92, 72, 96, 88];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passCount = 0;

// grades2.forEach((grades) => {
//     if (grades >= 70) passCount++;
// });

// console.log(`${passCount} out of ${grades.length} students passed.`);


// // Challenge #2
// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];
// let total3 = 0;

// // Function to calculate average
// function calculateAverage(grades) {
//     for (let i = 0; i < grades3.length; i++) {
//         total3 += grades[i];
//     }
//     return total3/grades3.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades3) {
//     checking1 = 0;
//     for (let i = 0; i < grades3.length; i++) {
//         if (grades3[i] > checking1) {
//             checking1 = grades3[i];
//         }
//     }
//     return checking1;
// }

// // Function to find lowest grade
// function findLowestGrade(grades3) {
//     checking2 = 100;
//     for (let i = 0; i < grades3.length; i++){
//         if (grades3[i] < checking2) {
//             checking2 = grades3[i];
//         }
//     }
//     return checking2;
// }

// // Function to count passing students
// function countPassing(grades3, passingGrade) {
//     counter3 = 0;
//     for (let i = 0; i < grades3.length; i++){
//         if (grades3[i] >= passingGrade) {
//             counter3++;
//         }
//     }
//     return counter3;
// }

// // Generate complete report
// const average3 = calculateAverage(grades3);
// const highest = findHighestGrade(grades3);
// const lowest = findLowestGrade(grades3);
// const passing = countPassing(grades3, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average3.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades3.length}`);






// JavaScript Fundamentals Part 2 - Hour 3
// Objects and Data Structures 

// Array Limitation Problem
// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);

// // Object Creation wit Object Literal Syntax
// console.log("=== OBJECTS ===");

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// console.log(jonas["firstName"]);
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);


// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.jasDriversLicense = true;
// console.log(jonas);


// Exercise 1: Personal Object
// const book = {
//     title: "Alice's Adventures in Wonderland",
//     author: "Lewis Carroll",
//     pages: 149,
//     isRead: true,
// };

// const playlist = {
//     name: "Eight Beats of Soliloques",
//     creator: "Astraea",
//     songs: ["Synchronizer", "Alice in Reitouko", "Kaisei"],
//     genre: "J-Pop",
// }

// console.log(book.title);
// console.log(playlist["creator"]);

// book.synopsis = "The story follows a young girl named Alice who, feeling bored and sleepy while sitting by a riverbank, encounters a White Rabbit and follows it down a rabbit hole, plunging into a fantastical world filled with curious creatures and whimsical adventures. ";
// book["yearPublished"] = 1866;

// playlist.yearCreated = 2015;
// playlist["description"] = "Relaxing mixed of j-pop and vocaloid to sooth oneself.";

// book.yearPublished = 1866;
// playlist["yearCreated"] = 2025;

// console.log(book);
// console.log(playlist);

// const student = {
//     name: "Sarah",
//     grades: [85, 92, 78],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//     },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);


// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,
//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     },
// };

// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge(jonas.birthYear));

// const jonasImproved = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         console.log(this);
//         return 2037 - this.birthYear;
//     },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//     firstname: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this. age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstname} is a ${this.calcAge()}-year old ${
//             this.job
//         }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//     },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());


// // Exercise 2: Calculator Object
// const calculator = {
//     num1: 10,
//     num2: 5, 
//     operator: "+",
//     add: function () {
//         this. res = this.num1 + this.num2;
//         return this.res;
//     }, 
//     subtract: function () {
//         this. res = this.num1 - this.num2;
//         return this.res;
//     },
//     multiply: function () {
//         this.res = this.num1 * this.num2;
//         return this.res;
//     },
//     divide: function () {
//         this.res = this.num1 / this.num2;
//         return this.res;
//     },

//     calculate: function () {
//         if (this.operator === `+`) {
//             return this.add();
//         } else if (this.operator === `-`) {
//             return this.subtract();
//         } else if (this.operator === `*`) {
//             return this.multiply();
//         } else if (this.operator === `/`) {
//             return this.divide();
//         } else {
//             console.log("Invalid operator");
//         }
//     },

//     getResult: function () {
//         return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//     }
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());


// // Challenge 3
// const user  = {
//     firstName: "Sarah",
//     lastName: "Johnson",
//     birthYear: 1995,
//     location: "New York",
//     interests: ["photography", "travel", "coding"],
//     friends: [
//         {name: "Michael", status: "active"},
//         {name: "Emma", status: "inactive"},
//         {name: "David", status: "active"},
//     ],
//     isActive: true,

//     calcAge: function () {
//         this.age = new Date().getFullYear() - this.birthYear;
//         return this.age;
//     },

//     addFriend: function (name, status = "active") {
//         this.friends.push({name,status});
//         return this.friends;
//     },

//     getActiveFriends: function () {
//         return this.friends.filter (friend => friend.status === "active");
//     },

//     toggleStatus: function () {
//         this.isActive = false;
//         return this.isActive;
//     },

//     getSummary: function () {
//         return ` 
//             Name: ${this.firstName} ${this.lastName}
//             Status: ${this.isActive ? "Active": "Inactive"}
//             Has ${this.friends.length} friends

//             About:
//             Age: ${this.calcAge()} years old
//             Birth Year: ${this.birthYear}
//             Location: ${this.location}
//             Interest: ${this.interests}

//             Active Friends:
//             ${this.getActiveFriends().map(f => `${f.name} (${f.status})`).join("\n            ")}

            
//         `;
//     }, 
// };

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());






// JavaScript Fundamentals Part 2 - Hour 4

// const message = document.querySelector(".message");
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);

// document.querySelector(".className");
// document.querySelector("#idName");
// document.querySelector("tagName");
// document.querySelector(`[type="text"]`);
// document.querySelector("div p");

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// Exercise 1: Element Selection Practice

// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// const buttonQuery = document.querySelector("#btn");
// const buttonById = document.getElementById("btn");
// console.log(buttonQuery === buttonById);

// const allSpans = document.querySelectorAll("span");
// console.log(allSpans);

// const firstSpan = document.querySelector("span");
// console.log(firstSpan.textContent);

// const message = document.querySelector(".message");
// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// console.log(message.innerText);

// const input = document.querySelector(".guess");
// input.value = "Default text";
// input.placeholder = "Type here: ";

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRdius = "10px";

// Exercise 2: Content and Style Practice
// const heading = document.querySelector("h1");
// heading.textContent = "Roan";

// const button = document.querySelector("#btn");
// button.style.backgroundColor = "#19b3e7ff";
// button.style.color = "white";

// const input = document.querySelector(".guess");
// input.placeholder = "Enter something here";

// const message = document.querySelector(".message");
// message.style.fontWeight = "bold";

// const scoreValue = document.querySelector(".score-value");
// scoreValue.style.fontSize = "3rem";
// scoreValue.style.color = "blue";


// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");
// button.addEventListener("click", function () {
//     console.log("Button was clicked!");
//     message.textContent = "You clicked the button!";
//     message.style.color = "green";
// });


// let clickCount = 0;

// button.addEventListener("click", function () {
//     clickCount ++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });


// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//     const userText = input.value;
//     message.textContext = `You typed: ${userText}`;
//     message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//     console.log(`Key pressed: ${event.key}`);

//     if (event.key === "Enter") {
//         message.textContent = `You pressed Enter! Text was: ${input.value}`;
//         input.value ="";
//     }
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Escape") {
//         message.textContent = "Reset with Escape key!";
//         input.value = "";
//         clickCount = 0;
//         button.textContent = "Click Me!";
//     }
// });

// Exercise 3: Event Listener Practice
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// heading.addEventListener("click", function (event) {
//     heading.style.color = "lightblue";
// });

// input.addEventListener("input", function (event) {
//     const count = input.value.length;
//     message.textContent = `Character count: ${count}`;
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === " ") {
//         message.textContent = "Spacebar pressed!";
//     }
// });

// button.addEventListener("mouseover", function () {
//     button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//     button.textContent = "Click Me!";
// });

// heading.addEventListener("dblclick", function () {
//     heading.textContent = "Double-clicked!";
//     heading.style.backgroundColor = "gray";
// });

const score1 = document.querySelector("#score-1");
const score2 = document.querySelector("#score-2");
const reset = document.querySelector("#btn-reset")
const adding = document.querySelectorAll(".btn-add");
const winningScore = document.querySelector("#winning-score");
const displayWinner = document.querySelector(".winner");
const winnerName = document.querySelector(".winner-name");

const gameState= {
    scores: {1: 0, 2:0},
    winningScore: 0,
    gameOver: false,
    addPoint: function(player) {
        if (this.gameOver) return;

        player = Number(player);
        this.scores[player]++;
        this.updateDisplay(player);
        this.checkWinner(player);  // <-- separated winner check
    },

    updateDisplay: function(player) {
        if (player === 1) score1.textContent = this.scores[player];
        else if (player === 2) score2.textContent = this.scores[player];
    },

    checkWinner: function(player) {
        if (this.scores[player] >= Number(winningScore.value)) {
            this.showWinner(player);
        }
    },

    showWinner: function (player) {
        displayWinner.classList.remove("hidden");
        winnerName.textContent = `Player ${player}`;
        this.gameOver = true;
    },

    resetGame: function () {
        this.scores = {1: 0, 2: 0};
        this.gameOver = false;
        score1.textContent = "0";
        score2.textContent = "0";
        winningScore.value = 5;
        displayWinner.classList.add("hidden");
    }
};


adding.forEach(button => {
    button.addEventListener("click", function () {
        const player = button.dataset.player;
        gameState.addPoint(player);
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "R") {
        gameState.resetGame();
    }
    if (event.key === "1") {
        gameState.addPoint(1);
    }
    if (event.key === "2") {
        gameState.addPoint(2);
    }
});

reset.addEventListener("click", function () {
    gameState.resetGame();
});




