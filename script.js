'use strict';
/*
function calAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variables
      const firstName = 'Steven';
      // Reassigning Outer Scope's Variable
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output';
    }
    // console.log(str); does not work out here - out of scope
    console.log(millenial);
    // console.log(add(2, 3)); Can not be used when strict mode is active
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calAge(1991);
*/

//---------- Variable TDZ ------------
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Milton';
let job = 'Software Developer';
const year = 1994;

// ---------- functions TDZ -----------
console.log(addDec1(2, 3));
//console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDec1(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;


//------------- THIS. Method Example ----------
/*
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

// method borrowing. Copy method form one object to the other
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
*/
// var firstName = 'Matila'; <-- do not use it makes global scope variables
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //------ Solution 1 ------
    // console.log(this);
    // console.log(2037 - this.year);
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);

    // };
    //------ Solution 2 ------ Arrow function inherits (this.) from previous parent scope hence this solution works
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// --------- Arguments keyword- available in function expression and function declaration NOT Arrow Function -------
/*
const addExpr = function (a, b){
console.log(arguments);
return a + b;
}

addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
  console.log()arguments;
  return a + b
}
addArrow (2,5,8)*/
/*
// --------- Primitive Types ---------
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// ---------- Reference types -------------
const jessica = {
  firstName: 'Jessica',
  lastName: ' Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log();
console.log();

// ---------- Copying Objects ----------
const jessica2 = {
  firstName: 'Jessica',
  lastName: ' Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');
*/

// ------- Destructuring Arrays --------
/*
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const hours = {
  //Example of es6 computing property name
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenue: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literal. (old way - hours: hours -)
  hours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },

  // Modern way of writing method
  order(starterIndex, mainIndex) {
    return [this.starterMenue[starterIndex], this.mainMenu[mainIndex]];
  },
  // Modern way of writing method
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenue[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // Old way of writing method
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...OtherIngredients) {
    console.log(mainIngredient);
    console.log(OtherIngredients);
  },
};

// ----- Looping Objects: Object Keys, Values, and Entries -----

// Property NAMES - also called keys.

const properties = Object.keys(hours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES

const values = Object.values(hours);
console.log(values);

// Property ENTRIES = Name(index[key] + Value(element) - this is looping over an Object. Need x2 steps

const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`); // key + value
}
*/
//---------Optional Chaining (?.) -------//
/*
if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);
// console.log(restaurant.hours.mon.open);

// WITH optional chaining
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Optional chaining on Methods

console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisoto?.(0, 1) ?? `Method does not exist`);

// ----- Optional chaining on Arrays -----

const users = [
  {
    name: 'Jonas',
    email: 'hello@milton.com',
  },
];
// Modern way WITH Optional chaining

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');
// OldSchool way - WITHOUT Optional chaining

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/
// ---------- OR || AND && ---------------
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0, // falsy value
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Milton Sanchez',
};

// OR assignment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND && returns 1st falsy

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
////////////////////////////////////////////
// The Nullish Coalescing Operator
/*
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish Value principles: null and undefine (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*
restaurant.orderDelivery({
  time: '23:30',
  address: ' Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenue: starters = [] } = restaurant;
console.log(menu, starters); 
*/
/*

// Mutating Variables
/*
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
// -- Destructuring (Manually/1 by 1) --
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// -- Destructuring (Multiple/Array) --
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// ------Switching variables -------
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// ---- Receive 2 return values from a function ----
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter.mainCourse);

// ---- Nested destructuring  ----
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested
const [i, , [j, k]] = nested;
console.log(i, j, k);

// ---- Default values ----
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); //ES6 approach
//above is same as writing  - console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
*/
/*
'Spread operator - (...example)' takes all elements from the array but does not create new variables - we can only use it in places where we would otherwise write values 
*/

//Copy array
/*
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menue = [...restaurant.starterMenue, ...restaurant.mainMenu];
console.log(menue);
*/
// Iterables: arrays, strings, maps, sets. NOT Object
/*

const str = 'Milton';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
/*
/* console.log(`${...str}` Schmedtmann); <- does not expect multiple values separated by a comma. So you get unexpected token.

 Multiple values separated by a comma are ususally only expected we we pass arguments into a Function or build a New Array */
/*
// Real World Example

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Object

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Geuiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
if (restaurant.orderPizza) {
  restaurant.orderPizza(' mushroom', 'spinach');
}
// Looping Arrays: The for-of Loop ---------------

const menu = [...Restaurant.starterMenu, ...Restaurant.mainMenu];
for (const item of menu) console.log(item);

//Destructuring approach
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// Old School way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
*/
/*
// ------(Part 1)---------DESTRUCTURING

// ----- SPREAD, because on RIGHT side of = [Values]
const arr = [1, 2, ...[3, 4]];

// ----- REST, because on LEFT side OF = [Variables]

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenue,
];
console.log(pizza, risotto, otherFood);

//-- Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // sat & thur

// ------(Part 2)---------DESTRUCTURING

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

console.log(`------ OR ------`); // Truthy
//------------- Short Circuiting (&& and ||)

// can use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jones');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`------ AND ------`); // Falsy
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

}
*/
/*
// CODE CHALLENGE #1 & #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// CODE CHALLENGE #1 ANSWERS

//1.
const [player1, player2] = game.players;
console.log(player1, player2);

//2.
const [gk, ...fieldPlayers] = player1; //REST
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...player1, ...player2]; //SPREAD
console.log(allPlayers);

//4.
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Periscic']; //SPREAD

//5.
const {
  odds: { team1, x: draw, team2 },
} = game; //Nested Detructuring

console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'kimmich');
// printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// CODE CHALLENGE #2 ANSWERS

//1

let x = game.scored.entries();
console.log(x);
for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}`);

//2
//Interested only in the values for the average.

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3 to use entries in an object you first need to write Object.entries function and pass Object into it
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/
/*
// --------------------- SETS ---------------------
// A collection of unique values. A set can never have a duplicates.

const ordersSet = new Set([
  'pasta',
  'pizza',
  'risotto',
  'pizza',
  'pasta',
  'pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size); // returns number of unique object in set
console.log(ordersSet.has('pizza')); // Boolean Confirms true/False
console.log(ordersSet.has('bread')); // Boolean Confirms true/False
ordersSet.add('bread');
ordersSet.add('bread');
console.log(ordersSet);
ordersSet.delete('risotto');
console.log('--------------');
// ordersSet.clear();
console.log(ordersSet);
console.log(`--------------`);
for (const order of ordersSet) console.log(order);

//--- Example ---

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const uniqueStaff_Set = new Set(staff);
console.log(uniqueStaff_Set);
const converting2Array = [...new Set(staff)];
console.log(converting2Array); // finds out how many unique positions.
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
console.log(new Set('Milton'));

// ---------------------- MAPS --------------------------
// A DATA STRUCTURE TO MAP VALUES TO KEYS [DATA STORED IN KEY VALUE PAIRS] UNLIKE OBJECTS KEYS CAN BE ANY TYPE NOT JUST STRINGS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are opem :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
// Using objects as map keys
const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// MAPS: ITERATIONS

const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);

// CODE CHALLENGE #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁mSubstitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
// extra.
const timee = [...gameEvents.keys()].pop();
console.log(timee);
console.log(`
An event happened, on average, every ${timee / gameEvents.size} minutes
`);

//4.
for (const [min, eventt] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${eventt}`);
}
*/
/*
// ---------- WORKING WITH STRINGS - PART 1 --------------

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('potugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B & C are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky! 🤩');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
/*
// ---------- WORKING WITH STRINGS - PART 2 --------------
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fixing capitalization in name
const passenger = 'mIlTon';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check email / comparing emails
const email = 'milton@gmail.com';
const loginEmail = ' Milton@Gmail.Com  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annoucement = 'All passengers come to boarding door 23. Boarding door 23';

console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replaceAll('door', 'gate'));
// regular expression
console.log(annoucement.replace(/door/g, 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage(' I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snack and a gun for protection');
*/
/*
// ---------- WORKING WITH STRINGS - PART 3 --------------

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Milton Sanchez'.split(' '));
const [firstName, lastName] = 'Milton Sanhcez'.split(' ');

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('milton antonio sanchez de la rosa');
capitalizeName('manuela yakaira lebron reyes sanchez');

// Padding
const message = 'Go to gate 23'; 
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Milton'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234567890));
console.log(maskCreditCard('1090234567890'));

// repeat
const message2 = 'Bad weather.. All departures delayed...';
console.log(message2.repeat(4));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planeInLine(5);
planeInLine(3);
planeInLine(12);
*/
/*
//Challenge #4

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
/*
// Extra String Practice 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru09433484722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)}${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/
