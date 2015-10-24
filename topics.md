# Intro
JavaScript is case-sensitive

## Variables
- Use Chrome console
  - remember x = 1 from algebra?
  - x is a variable
  - var keyword;
  - var x = 1; var y = 2; x + y;
- Variable names:
  - case sensitive
  - no spaces
  - letters, numbers, dollar, underscore
  - Start with: letter, dollar, underscore
  - Convention: thisIsTheConvention

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
