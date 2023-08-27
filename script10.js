'use strict';

/*
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // ES5
  // numPassangers = numPassangers || 1;
  // price =  price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
*/
/*
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const milton = {
  name: 'Milton Sanchez',
  passport: 123434245333,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr.` + passenger.name;

  if (passenger.passport === 123434245333) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, milton);
console.log(flight);
console.log(milton);

// Passing a primitive type into a function is the same as doing the below. (Copying an Object)

// const flightNum = flight;
// const passenger = milton;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
// after passing name through newPassport function - It will declares 'Wrong password'
newPassport(milton);
checkIn(flight, milton);
*/

// First-Class and Higher-Order Functions

/*
              First -Class Functions [Abstract Thought a feature]
 Javascript treats functions as first-class citizens
 This means that functions are simply VALUES
 functions are just another 'Type' of Object

            Higher-Order Functions
A function that received another function as an argument, that returns a new function, or Both  
This is only possible because of first-class functions

Callback & Return functions are called by the Higher-Order function
*/
/*
// Functions Accepting Callback Functions

// Low level functions - they get passed into higher level functions
const oneWord = function (str) {
  return str.replace(/ /g, ''.toLowerCase());
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}
  `);

  console.log(`Transformed by: ${fn.name}`);
};

transformer(`Javascript is the best!`, upperFirstWord);

transformer(`Javascript is the best!`, oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log(`✋`);
};

document.body.addEventListener('click', high5);

['Milton', 'Manuela', 'Adam'].forEach(high5);
*/
/*
// Functions Returning Functions
const greet = function (greetting) {
  return function (name) {
    console.log(`${greetting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Milton');
greeterHey('Manuela');

greet('Hello')('Milton');

// Chanllenge Arrow function returning Arrow function
const myfunction = greeting => name => console.log(`${greeting} ${name}`);

myfunction('Hi')('Milton');
*/
/*
// The CALL & APPLY Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function (){}  or
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, ' Milton Sanchez');
lufthansa.book(635, 'Manuela Reyes-Sanchez');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does NOT work
// book(23, 'Antonio Sanchez')

book.call(eurowings, 23, ' Tito Gomez');
console.log(eurowings);

book.call(lufthansa, 342, 'Ada de La Rosa');

console.log(lufthansa);

const swiss = {
  airline: ' Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 523, 'Marry Cooper');
console.log(swiss);

//APPLY METHOD

const flightData = [583, ' George Washington'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // <- CALL Method is preferable over Apply method

// The BIND METHOD

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Mateo Gotier');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Milton Sanchez');
bookEW23('Monkey D. Luffy');

// WITH EVENT LISTENERS

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// PARTIAL APPLICATION (pre-set parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // 0.23 is the rate( the null is standard since there is no 'this' in the first parameter)
// addVAT = value => + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
*/
/*
// CODE CHALLENGE #1

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/
/*
// Immediately Invoked Function Expressions (IIFE)

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 45;
}
console.log(notPrivate);
console.log();
*/
/*
// Closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// More Closure Examples

// Example One

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigned f function
h();
f();
console.dir(h);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are noe boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/
/*
// Coding Challenge # 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
