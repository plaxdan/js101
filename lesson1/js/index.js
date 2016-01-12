

// Expressions - are things that yield values and can nest other expressions
4     // 4
1 + 1 // 2
1 > 3 // false

var answer = (1 + 2) + (3 - 4) // 2
// console.log("The answer is: ", answer);

// Control FLOW

// if
// var age = 21;
//
// if (age < 21) {
//   console.log("Milk");
// } else if (age === 21) {
//   console.log("Jager");
// } else {
//   console.log("Wine");
// }

// Switch statement - testing multiple cases
// If a case matches - then do all the things.

// While loop - run zero or more times

while (false) {
  console.log("While loop happened");
  console.log("While loop happened");
  console.log("While loop happened");
  console.log("While loop happened");
  console.log("While loop happened");
  console.log("While loop happened");
  break;
}

// Do loop - run one or more times ...always once
// do {
//   console.log("Do loop happened");
// } while (false);


// For loop - needlessly complex

// for (SETUP ONCE; EVALUATE BEFORE WORK; INCREMENT AFTER WORK;) {
//   DO WORK;
// }

// var cats = ["Bob", "Finn", "Izzy", "undefined", "Bowie"];
// for (var num = 0; num < 10; num++) {
//   if (cats[num]) {
//     cats[num] += " is hungry";
//   }
// }
// console.log("after the loop: ", cats);

// var cats = ["Bob", "Finn", "Izzy", "undefined", "Bowie"];
// var i = 0;
// while (i < 10) {
//   if (cats[i]) {
//     cats[i] += " is tired";
//   }
//   i++;
// }
// console.log("after the loop: ", cats);



// Objects
var cat = {
  name: "Finn",
  species: "Tiger"
};

// What is an array?

var numbers = [1, 2, 3, 4];
var cats = ["Bob", "Finn", "Izzy"];

var mixed = [1, false, "Banana", ['a', 'b', 'c']];
















// var printName, somThingElse, yetAnother;
//
// // function printName(name) {
// //   console.log(`The name is ${name}`);
// // }
//
// printName = function(name) {
//   console.log(`The name is ${name}`);
// }
// printName("Daniel");

// var printStuff = function(firstThing, secondThing, thirdThing) {
//   console.log(firstThing);
//   console.log(secondThing);
//   console.log(thirdThing);
// };
//
// var arr = ["this", "that", "the other", 3, true, {}];
// printStuff(...arr);
// // printStuff("this", "that", "the other", 3, true, {});

//
// for (var num = 10000; num >= 1; num--) {
//   console.log(`The number is ${num}`);
// }


/**
 * This is a recursive function.
 */
// var printAndSubtract = function(num) {
//   if (num < 1) {
//     return;
//   }
//   console.log(`The number is ${num--}`);
//   printAndSubtract(num);
// };
//
// printAndSubtract(10000);

// var landscape = function() {
//   var result = "";
//   var flat = function(size) {
//     for (var count = 0; count < size; count++)
//       result += "_";
//   };
//   var mountain = function(size) {
//     result += "/";
//     for (var count = 0; count < size; count++)
//       result += "'";
//     result += "\\";
//   };
//
//   flat(3);
//   mountain(4);
//   flat(6);
//   mountain(1);
//   flat(1);
//   return result;
// };
//
// console.log(landscape());

// var englishGreeter = function() { return "Why hello there, "; };
// var frenchGreeter = function() { return "Ahh... bonjour, "; };
//
// var sayHello = function(name, greeter) {
//   if (typeof greeter !== "function") {
//     alert("Hey! " + greeter + " is not a function");
//     return;
//   }
//   console.log(greeter() + name);
// };
//
// var name = "Daniel";
// sayHello(name, englishGreeter, "lemme tell you about a man named joe"); // "Why hello there, Daniel"
// // sayHello(name, frenchGreeter);  // "Ahh... bonjour, Daniel"
// // sayHello(name, "banana");  // "Ahh... bonjour, Daniel"

printItem = function(item) {
  console.log("Item: "  + item);
}

var WishList = function() {
  var items = [];
  this.addToWishList = function(newItem) {
    items.push(newItem);
  }
  this.printWishList = function() {
    items.forEach(printItem);
  }
};

var myWishList = new WishList();
var wifesWishList = new WishList();
