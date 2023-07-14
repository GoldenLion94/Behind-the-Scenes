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
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenue: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenue[starterIndex], this.mainMenu[mainIndex]];
  },
};

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
