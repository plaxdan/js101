// This is a comment. Uncomment the code below to make it run!

var Person = function(newName, newAge, newSport) {
  this.name = newName;
  this.age = newAge;
  this.sport = newSport;
  this.description = function() {
    return "Hi my name is " +
      this.name +
      ", I'm " +
      this.age +
      " years old, and I love " +
      this.sport;
  }
  return this;
}


// var cart = {
//   cart: function() { return this; },
//   items: [
//     {name: "Tarp Tent", price: 200},
//     {name: "DT Swiss Wheel", price: 2000}
//   ],
//   addItem: function(newName, newPrice) {
//     var newItem = {name: newName, price: newPrice};
//     this.items.push(newItem)
//   },
//   clearCart: function() {
//     this.items = [];
//   },
//   calculateTotal: function() {
//     var total = 0;
//     for (var i = 0; i < this.items.length; i++) {
//       total = total + this.items[i].price;
//     }
//     return total;
//   }
// }

// var person = {
//   name: "Daniel",
//   age: 37,
//   sport: "cycling",
//   description: function() {
//     return "Hi, my name is " +
//       this.name +
//       ". I'm " +
//       this.age +
//       " years old and I love " +
//       this.sport;
//   }
// };



// var printNumber = function(num) {
//   console.log("The number is: " + num);
// };
//
// var alertNumber = function(num) {
//   alert("Alert the number is: " + num);
// }
//
// var oneToFive = [1,2,3,4,5];
//
// // could use for loop...
// itemsInBasket.forEach(function(item) {
//   var price = item.price;
//   bankingSystem.charge(price);
// });
//
// // var myOwnThing = {
// //
// // };
//



// console.log(addsFifteen(5));
//
// function adder(a, b) {
//   return a + b;
// };
//
// function addsTen(num) {
//   return adder(num, 10);
// };
//
// function addsFifteen(num) {
//   return 5 + addsTen(num);
// }

//
// var friendlyMessage = function() {
//   return "Why hello ";
// };
//
// var angryMessage = function() {
//   return "Get lost ";
// }
//
// var getName = function() {
//   return prompt("What is your name?");
// };
//
// var greet = function(messageMaker, nameGetter) {
//   alert(messageMaker() + nameGetter());
// };
//
// greet(angryMessage, getName);
//


// var printType = function(x, y) {
//   console.log("The type of x is: " + typeof x);
//   console.log("The type of y is: " + typeof y);
// };

// printType(2, 1 < 2);

// var adder = function(x, y) {
//   var sum = x + y;
//   return sum;
// };
//
// var firstNum = prompt("Please enter a number");
// var secondNum = prompt("Please enter another number");
// alert("The sum is: " + adder(firstNum, secondNum));







//
// var printDaysOfTheWeek = function() {
//   var days = ["S", "M", "T", "W", "T", "F", "S"];
//   var daysLength = days.length;
//
//   while (daysLength >= 0) {
//     console.log("Current day is: " + days[daysLength--]);
//   }
// }
