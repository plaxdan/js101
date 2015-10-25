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
- Logical operators: `&& || !`
- Comparison operators: `== === != !== > < >= <=`
- Unary `-`
- Ternary `?`

#### Assignment

Given `a = 3`...

Operator | Desc | Example | Result
- | - | - | -
= | has value | `a = 7` | a is now 7
+= | has current value plus |`a += 2`| a is now 5
-= | has current value minus |`a -= 2`| a is now 1

#### Mathematical

Where `a = 3`...

Operator | Desc | Example | Result
- | - | - | -
+ | plus | `1 + 3 `| 4
- | minus | `3 - 2 `| 1
\ | divide | `12 / 3` | 4
* | multiply | `3 * 9` | 27
% | remainder | `12 % 5` | 2
++ | plus plus | `a++` | a will be 4
 | | `++a` | a is now 4
-- | minus minus | `a--` | a will be 2
 | | `--a` | a is now 2

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
== |	equal to |	`x == 8` |	false
||`x == 5`|	true
|| `x == "5"` |	true
===	| equal value and equal type	|`x === 5` | true
|| `x === "5"` |	false
!= |	not equal	| `x != 8` |	true
!==	| not equal value or not equal type	| `x !== "5"` |	true
|| `x !== 5`	| false
> |	greater than	| `x > 8`	| false
<	| less than	| `x < 8` |	true
>=| greater than or equal to|	`x >= 8`|	false
<=|	less than or equal to|	`x <= 8`|	true

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

JavaScript types:

```javascript
// Primitives
null
undefined
Boolean
Number
String

// Non-primitive
Object
```

#### null and undefined

- can be considered equivalent for the most part
- unassigned variables default to `undefined`

#### Boolean

- `true`/`false`
- as an expression: `1 < 2 // true`, `1 > 2 // false`
- short circuiting operators
  - `false || 'Camel' // 'Camel'`
  - `true || 'Camel' // true`

Falsey:
- `0 || 'Quasar' // 'Quasar'`
- `null || 'Quasar' // 'Quasar'`
- `undefined || 'Quasar' // 'Quasar'`
- `NaN || 'Quasar' // 'Quasar'`
- `"" || 'Quasar' // 'Quasar'`

Truthy (all others):
- `1 || 'Quasar' // 1`
- `'Blanket' || 'Quasar' // 'Blanket'`

#### Number

Mainly used for arithmetic. `1`, `1.2`, `.3`, `2.9e8`

- `NaN`
- `isNan`
- `Infinity`

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

```
var pet = {
  name: 'James',
  age: 8,
  species: 'Cat'
};

pet.name // 'James'
```

## Program Structure

### Expressions

Anything that yields a value.

- `1` // 1
- `2 + 3` // 5
- `(2 + 3) * 2` // 10

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

An expression can be a statement but a statement cannot be an expression.

### Variables and references

- `var` keyword
- point to value (primitives)
- point to reference (objects)

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

Structure:

for (<setup once>; <compare before>; <work after>) {
  <block>
}

Example:

```javascript
for (var i = 0; i < 10; i++) {
  console.log('The value of i is: ' + i); // prints 0..9
}
```

#### Breaking out of a loop

Works the same for all loops:

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








# Intro
JavaScript is case-sensitive

## Variables
- Use Chrome console
  - remember x = 1 from algebra?
  - x is a variable
  - var keyword;
  - var x = 1; var y = 2; x + y;


## Math Operators

- `+, -, /, *, --, ++, %`
- precedence (using parentheses)

## Types
- Use chrome console
- var name = ‘Daniel’
- alert(name);
- var x = 30;
- x + 10;
- var x = “30”; // with quotes
- x + 10;
- JavaScript knows “string” vs number type

> New Types! - `number`, and `string`

## First Program
- prompt()
- var name = prompt(); alert(name);
- var name = prompt(); var lastName = prompt(); alert(name + ‘ ‘ + lastName);
- Assignment

> Make a program that prompts for two numbers and then alerts their sum


# If / else Comparison Operators

Let's switch from the console to Atom...



Negation: the ! symbol

> Make a program that uses prompts, and if/else

# Arrays

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

- forEach function(value, index) {}
forEach is a new method and may not be defined in older browsers...which brings us to loops

> New Type - `array`!

# Loops

- while
- do
- for (setup, compare, change) {} _(more complicated)_
- Now let’s loop through an array!
- Recommend the student saves  a for loop somewhere to copy/paste until they remember it

> Search the array - Log each item in an array but alert a specific one.

================================================================================
LESSON 3
=================================================================================

# Dates

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- var d = new Date
- d.getDay() // day of week

```javascript
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
alert("Today is " + days[d.getDay()]);
```

- d.get* // the other accessor functions

## Calculate your age

```javascript
var dob = new Date(1977, 10, 10); // DOB
var today = new Date();           // TODAY
var millisSince = today - dob;

// Work in milliseconds
var ageInYears = millisSince * 1000 * 60 * 60 * 24 * 365;
```


# Functions
- First let’s move away from the console.
- Put JS in a file….possibly use live reload
- calling a function
- calling multiple times
- arguments
- ignoring arguments
- returning  value
- what happens after return?
- return nothing - undefined (new type)

## Functions homework:
  - make an addition function
  - make a subtraction function
  - make a multiplication function
  - play around with functions. Once you’re comfortable with them we can get into the last lesson before we - start doing useful things on our webpage.

  # Objects
  - literal
  - key (valid keys)
  - access with .syntax
  - access with obj[syntax]
  - the 'this' keyword
  - constructors
