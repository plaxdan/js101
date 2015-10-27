

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
