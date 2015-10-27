# Lesson 1

## Intro to the Chrome Dev Tools

Download Chrome and open console.

## Values, Types, and Operators

### Values

```javascript
1
10 * 7
2.5 + 3.67
"Hello"
"Hello " + "Daniel"
var year = 2015;
var dob = 1977;
var age = year - dob;
var greeting = "Hello ";
var name = "Daniel"
greeting + name;
```

#### var vs let

```javascript
var // function scope
let // block scope (new in ES6)
```

#### Variable names

- case sensitive
- no spaces
- letters, numbers, dollar, underscore
- Start with: letter, dollar, underscore
- Convention:
  - variable names: `thisIsTheConvention`
  - classes / constructor functions: `ThisIsTheConvention`

### Operators

- Assignment operators: `= += -=`
- Mathematical operators: `- + - \ * % ++ --`
- Logical operators: `&& ||`
- Comparison operators: `== === != !== > < >= <=`
- Unary `- delete void typeof !`
- Ternary `?`
- Spread `...` (see Functions, and Arrays below)

#### Assignment

Given `a = 3`...

Operator | Desc | Example | Result
- | - | - | -
`=` | has value | `a = 7` | a is now 7
`+=` | has current value plus |`a += 2`| a is now 5
`-=` | has current value minus |`a -= 2`| a is now 1
`/=` | has current value minus |`a /= 2`| a is now 1.5
`*=` | has current value minus |`a *= 2`| a is now 6

#### Mathematical

Where `a = 3`...

Operator | Desc | Example | Result
`-` | - | - | -
`+` | plus | `1 + 3 `| 4
`-` | minus | `3 - 2 `| 1
`\` | divide | `12 / 3` | 4
`*` | multiply | `3 * 9` | 27
`%` | remainder | `12 % 5` | 2
`++` | plus plus | `a++` | a will be 4
` |` | `++a` | a is now 4
`--` | minus minus | `a--` | a will be 2
` |` | `--a` | a is now 2

> Note: discuss the order of `++`/`--`

> Note: discuss precedence and the use of parentheses

#### Logical

Given `x = 6` and `y = 3`...

Operator | Desc | Example | Result
- | - | - | -
&& |  and | `(x < 10 && y > 1)` | true
&#124;&#124; |  or | (x == 5 &#124;&#124; y == 5) | false
! |  not | `!(x == y)` | true

#### Comparison

Where `x = 5`...

Operator | Desc | Example | Result
- | - | - | -
`==` |	equal to |	`x == 8` |	false
||`x == 5`|	true
|| `x == "5"` |	true
`===`	| equal value and equal type	|`x === 5` | true
|| `x === "5"` |	false
`!=` |	not equal	| `x != 8` |	true
`!==`	| not equal value or not equal type	| `x !== "5"` |	true
|| `x !== 5`	| false
`>` |	greater than	| `x > 8`	| false
`<`	| less than	| `x < 8` |	true
`>=` | greater than or equal to|	`x >= 8`|	false
`<=` |	less than or equal to|	`x <= 8`|	true

#### Unary

Operator | Desc | Example | Result
- | - | - | -
- |	negative |	`-5` |	-5

#### Ternary

Where `x = 5`...

Operator | Desc | Example | Result
- | - | - | -
? |	ternary |	`x > 2 ? 'apple' : 'banana'` |	'apple'
 |	 |	`x < 2 ? 'apple' : 'banana'` |	'banana'

### Types

JavaScript has _dynamic_ typing:

```javascript
var a = 1
typeof a // "number"
a = "something else"
typeof a // "string"
a = false
typeof a // "boolean"
```

JavaScript has Primitive types and Reference types.

```javascript
// Primitives
null
undefined
Boolean
Number
String

// Reference
Object // Object has many derivatives such as Function, Date, Array etc
```

#### null and undefined

- can be considered equivalent for the most part
- unassigned variables default to `undefined`

#### Boolean

```javascript
 // literal
true; false;

// expressions
1 < 2 // true
1 > 2 // false`

// short circuiting operators
false || 'Camel' // 'Camel'
true || 'Camel' // true
```

Falsey:

```javascript
0 || 'Quasar' // 'Quasar'
null || 'Quasar' // 'Quasar'
undefined || 'Quasar' // 'Quasar'
NaN || 'Quasar' // 'Quasar'
"" || 'Quasar' // 'Quasar'
```

Truthy (all others):

```javascript
1 || 'Quasar' // 1
'Blanket' || 'Quasar' // 'Blanket'
```

#### Number

Mainly used for arithmetic:

```javascript
1
1.2
.3
2.9e8
NaN
isNan
Infinity
```

#### String

- Single / double quotes
- concatenation
- comparison (alphabetical order, Capitals first)
- `\n` new lines
- Escape quotes `\"` and new lines `\\n`
- have properties `'Daniel'.length // 6`
- have function properties `'a'.repeat(3) // 'aaa'`
- reference positions `'Daniel'[2] // 'n'`

#### Object

Essentially bags of key value pairs. We'll visit them in more detail later:

```javascript
var pet = {
  name: 'James',
  age: 8,
  species: 'Cat',
  predator: true
};

pet.name // 'James'
pet.name = 'Archibald';
pet.name // 'Archibald'
```

## Program Structure

### Expressions

Anything that yields a value.

```javascript
1 // 1
2 + 3 // 5
(2 + 3) * 2 // 10
```

### Statements

Combinations of expressions. End in semi-colons.

```javascript
// Simplest forms
1; // 1
2 > 3; // false
(1 > 0) && (4 > 3); // true
```

A program is just a list of statements:

```javascript
var age = 27; // undefined
var isOver21 = age > 21; // undefined
console.log("The age is over 21: " + isOver21); // undefined
```

> An expression can be a statement but a statement cannot be an expression.

### Variables

- `var` keyword

#### Primitive and Reference Types

A primitive value may only have one variable attached to it (one string per balloon, where the ballon is the data).
A reference value may have multiple variables attached to it (multiple strings per balloon, where the ballon is the data).

```javascript
// Primitives get one string per ballon
var age = 10;
var newAge = age; // a new 10 was created for newAge. newAge does not point to age's 10.
newAge = 100;
age;    // 10
newAge; // 100

// Reference types can have multiple strings per balloon.
var pet = {name: "James", age: 8, species: 'Cat'};  // object literal is a Reference type.
var anotherReferenceToPet = pet;

// The object now has two variables pointing at it. Either can be used to manipulate it.
pet.age = 10;
anotherReferenceToPet.age; // 10

anotherReferenceToPet.species = 'Reptile';
pet.species; // 'Reptile'
```

### Environment

- JavaScript (language)
- Chrome (window)
- NodesJS (global)
- `alert, prompt, confirm, console`

Exercise:

- prompt()
- var name = prompt(); alert(name);
- var name = prompt(); var lastName = prompt(); alert(name + ‘ ‘ + lastName);
- Make a program that prompts for two numbers and then alerts their sum

### Control Flow

#### if / else

```javascript
var age = 16;

if (age < 16) {
  alert(‘You can not drive.’);
}
if (age > 16) {
  alert('You can drive!');
}

// Discuss: <, >, <=, >=, ===, !=

if (age < 16) {
  alert(‘You can not drive.’);
} else if (age == 16) {
  alert(‘You can drive FINALLY!’);
} else {
  alert(‘You probably already drive.’);
}
```

#### switch statement

```javascript
var age = 22;
if (age < 21) {
  alert("Lemonade.");
} else if (age == 21) {
  alert('Jager!');
} else {
  alert('Whiskey.');
}

switch(age) {
  case (age < 21):
    console.log('milk');
    break;
  case (age === 21):
    console.log('jager');
    break;
  default:
    console.log('Whiskey');
    break;
}
```

#### while / do

While loop runs zero or more times:

```javascript
console.log('Starting while');
var total = 0;

while (total <= 5) {
  console.log('The total is: ' + total);
  total += 1;
}

console.log('Finished while');
```

Do loop runs AT LEAST ONCE or more times:

```javascript
console.log('Starting do');
var total = 0;

do {
  console.log('The total is: ' + total);
  total += 1
} while (total <= 5);

console.log('Finished do');
```

#### for loops

```javascript

/**
 * for loop - specific order
 */
for (let i = 0; i < 10; i++) {
  console.log('The value of i is: ' + i); // prints 0..9
}

var pet = {
  name: 'James',
  age: 8,
  species: 'Cat'
};

/**
 * for..in with objects - arbitrary order
 * Iterates over an object's keys.
 */
for (let key in pet) {
  console.log(`${key} has a value of: ${pet[key]}`);
}

/**
 * for..of with objects - arbitrary order
 * Iterates over an object's values.
 */
for (let val of pet) {
  console.log(`Value is: ${val}`);
}

/**
 * for..in and for..of with arrays - arbitrary order
 */
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs keys "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs values "3", "5", "7"
}
```

> Note: `for--in` loops through keys, `for..of` loops through values.

#### Array.prototype..forEach

Functional looping. Order is guaranteed.

```javascript
let arr = [3,5,7];
arr.foo = 'hello';

// inline...
arr.forEach(function(item) {
  console.log(`The item is ${item}`);
});

// passing function variable...
let printItem = function(item) {
  console.log(`The item is ${item}`);
};
arr.forEach(printItem);

// or with Object.keys()
Object.keys(arr).forEach(function (element, index) {
    console.log(arr[element]); // logs "3", "5", "7", "hello"
    console.log(arr[index]);   // logs "3", "5", "7", undefined
});
```

#### Breaking out of a loop

Works the same for all loops except forEach:

```javascript
var a = 0;

// while
while (a < 10) {
  if (a === 8) {
    break; // stop at eight
  }
  a++;
}

// do
a = 0;
do {
  if (a === 8) {
    break; // stop at eight
  }
  a++;
} (while a < 10);

// for
for (a= 0; a < 10; a++) {
  if (a === 8) {
    break; // stop at eight
  }
  a++;
}

// for in
for (prop in pet) {
  if (prop === 'name') {
    break;
  }
  console.log(`${prop} has a value of: ${pet[prop]}`);
}
```

#### detecting evens / odds

Remainder operator `%` is often used for this:

```javascript
var a = 0;
while (a <= 10) {
  if (a % 2) { // DISCUSS WHY THIS WORKS
    console.log('a is odd: ' + a);
  } else {
    console.log('a is even: ' + a);
  }
  a++;
}
```

# Lesson 2

## Functions

### defining and calling
### arguments
- single, multiple arguments
- the arguments variable
- passing or not passing

#### spread operator

```javascript
var myFunction = function(x, y, z) { };
var args = [0, 1, 2];
myFunction(...args);

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
```

### return
- In absence of `return` function expressions evaluate to `undefined`.
- What happens after `return`?

### call stack

### recursion

### scope

```javascript
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};
```

### functions as values

```javascript
var englishGreeter = function() { return "Why hello there, "; };
var frenchGreeter = function() { return "Ahh... bonjour, "; };

var sayHello = function(name, greeter) {
  console.log(greeter() + name);
};

var name = "Daniel";
sayHello(name, englishGreeter); // "Why hello there, Daniel"
sayHello(name, frenchGreeter);  // "Ahh... bonjour, Daniel"
```

### function declarations and variable hoisting

```javascript
// Create a function value f
var f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// This will work
sayHello();
function sayHello() {
  console.log('Hello!');
}

// It is the equivalent of:
function sayHello() {   // function declarations are hoisted to the top
  console.log('Hello!');
}
sayHello();

// This will fail due to variable hoisting
greetings();
var greetings = function() {
  console.log('Greetings!');
};

// It is the equivalent of:
var greetings = undefined;  // variable declarations are also hoisted to the top
greetings();
greetings = function() {
  console.log('Greetings!');
};
```

## Data Structures: Objects and Arrays

### Arrays

Array literals

- array literal
- array indexes (from 0)
- add element after the fact
- change element in place

Array methods

- pop
- push
- shift
- unshift
- slice
- split
- join
- splice

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
// removes 0 elements from index 2, and inserts 'DRUM'
var removed = myFish.splice(2, 0, 'DRUM');
//=> ['angel', 'clown', 'DRUM', 'mandarin', 'surgeon'];
```

Array constructor

- forEach function(value, index) {}
forEach is a new method and may not be defined in older browsers.

> Search the array - Log each item in an array but alert a specific one.

### Objects
- literal
- key (valid keys)
- access with .syntax
- delete properties
- access with obj[syntax]
- the 'this' keyword
- constructors

```javascript
var cart = {
  cart: function() { return this; },
  items: [
    {name: "Tarp Tent", price: 200},
    {name: "DT Swiss Wheel", price: 2000}
  ],
  add: function(newName, newPrice) {
    var newItem = {name: newName, price: newPrice};
    this.items.push(newItem)
  },
  clear: function() {
    this.items = [];
  },
  total: function() {
    return this.items.reduce(function(prev, curr) { return prev + curr.price; }, 0);
  }
}
```

### Constructor functions

Creating new objects from scratch each time is laborious. Better to use constructor functions.

```javascript
var Cart = function() {
  var items = []; // private
  this.add = function(newName, newPrice) {
    var newItem = {name: newName, price: newPrice};
    items.push(newItem);
  };
  this.clear = function() {
    items = [];
  };
  this.total = function() {
    return items.reduce(function(prev, curr) { return prev + curr.price; }, 0);
  };
};

var myCart = new Cart();
myCart.add({name:'Tarp Tent', price: 200});
myCart.add({name:'DT Swiss Wheels', price: 3500});
myCart.total(); // 350
myCart.clear();
myCart.total(); // 0
```

### The Math Object

```javascript
Math.random();
Math.max(1, 2); // Try implementing this yourself.
Math.min(1, 2); // Try implementing this yourself.
Math.floor(1.999); // 1
Math.ceil(1.0001); // 2
Math.random(); // 0.9858470233157277
Math.PI

Math.round(1.3);  // 1
Math.round(1.6);  // 2

Math.round(Math.random()) ? 'heads' : 'tails'; // coin flip
```

### The Date Object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- var d = new Date
- d.getDay() // day of week

```javascript
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
alert("Today is " + days[d.getDay()]);
```

- d.get* // the other accessor functions

Calculate your age

```javascript
var dob = new Date(1977, 10, 10); // DOB
var today = new Date();           // TODAY
var millisSince = today - dob;

// Work in milliseconds
var ageInYears = millisSince * 1000 * 60 * 60 * 24 * 365;
```
