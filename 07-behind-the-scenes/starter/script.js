'use strict';
// Behind the Scenes Development Hour 1 - Scoping & Hoisting
console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// Global Execution Context
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace();
}

outerFunction();

const globalVar = 'I am global';
function anyFunction() {
  console.log(globalVar);
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar);
}

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out';
}

console.log(notBlockScoped);

// const outer = 'global';
// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope();

const name = 'GlobalName';
function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name);
  }
  b();
}

a();

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX);
console.log(letX);
console.log(constX);

console.log(addDecl(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

const apiUrl = 'https://example.com';
console.log(apiUrl);

// Hoisting expectation
let title = 'Behind the Scenes';
// Scope chain expectation
function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label);
  }
  inner();
}
outer();

// Call stack expectation
function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();

// The this Keyword & Arrow Functions
// console.log('=== THE THIS KEYBOARD & ARROW FUNCTIONS ===');

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Method borrowing
const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

// Detached function call
const greetFunction = person.greet;
// greetFunction();

// This breaks in event handlers
// const button = document.querySelector('button');
//button.addEventListener('click', person.greet);

// Fix: use arrow function wrapper
// button.addEventListener('click', () => person.greet());
// Or bind the method
// button.addEventListener('click', person.greet.bind(person));

const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name);
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod();
quiz.arrowMethod();

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // Modern approach with arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],

  // BROKEN: arrow function loses `this`
  // printHobbiesBad: () => {
  //   this.hobbies.forEach(hobby => {
  //     console.log(`${this.name} likes ${hobby}`);
  //   });
  // },

  // FIXED: regular function preserves `this`
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

// user.printHobbiesBad();
user.printHobbiesGood();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

const userCard = {
  name: 'Sarah',
  // element: document.querySelector('.user-card'), // Commented for demo

  setupEvents() {
    // BROKEN: this becomes the button element
    // this.element.addEventListener('click', function() {
    //   console.log('Clicked user:', this.name); // this = button element!
    // });

    // FIXED: arrow function preserves outer this
    // this.element.addEventListener('click', () => {
    //   console.log('Clicked user:', this.name); // this = userCard object!
    // });

    console.log('Event setup for:', this.name);
  },
};

userCard.setupEvents();

// Array methods with this context
const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers());

const myTimer = {
  name: 'My Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    // Arrow function preserves "this" from startCountdown
    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};

myTimer.startCountdown();

// Primitives vs Objects, Copying & Strict Mode
console.log('=== PRIMITIVES VS OBJECTS, COPYING & STRICT MODE ===');

// PRIMITIVES IN STACK
let age = 30;
let oldAge = age;
age = 31;

console.log('age:', age);
console.log('oldAge:', oldAge);

// OBJECTS IN HEAP
const me = { name: 'Jonas', age: 30 };
const friend = me;

friend.age = 27;

console.log('me:', me);
console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

// But nested objects are still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

// Modern deep copy with structuredClone
const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address);
console.log('copy hobbies:', deepCopy.hobbies);

// const problemObject = {
//   name: 'Test',
//   date: new Date(),
//   method: function () {
//     return 'hello';
//   },
//   undefinedValue: undefined,
// };

// // BROKEN: JSON method loses data
// const brokenCopy = JSON.parse(JSON.stringify(problemObject));
// console.log('Broken copy:', brokenCopy);

// // FIXED: structuredClone preserves most types
// const workingCopy = structuredClone(problemObject);
// console.log('Working copy:', workingCopy);

const userManager = {
  users: [],

  addUser: function (userData) {
    // Deep copy userData so changes to the original don't leak in
    const deepCopy = JSON.parse(JSON.stringify(userData));
    this.users.push(deepCopy);
  },

  getUsers: function () {
    // Shallow copy the array so external code can't mutate the original
    return [...this.users];
  },
};

// Test your implementation
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

// Mutate the original after adding
originalUser.name = 'Modified';

console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]);

// 1. Hoisting and TDZ (Hour 1)
// Without strict mode: undeclaredVar = 'This would create a global variable!';
// With strict mode: throws ReferenceError
// undeclaredVar = 'This throws an error in strict mode';

// 2. This keyword (Hour 2)
function demonstrateThis() {
  console.log('this in strict mode:', this); // undefined (not global object)
}
demonstrateThis();

// 3. Object mutation prevention attempts
const readOnlyObj = Object.freeze({ name: 'Frozen' });

try {
  readOnlyObj.name = 'Changed'; // Throws error in strict mode
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}