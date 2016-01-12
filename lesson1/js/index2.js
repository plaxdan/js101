
// TODAY
// flow control (if/else switch )
// Looping (for, while, do)
// functions
// arrays / objects

// Next time



// Strings are immutable (they never change)



// Functions - behavior

// take arguments
// optionally affect the world around them (inpure)
// optionally return a value

// Pure function (takes input, returns output)
var exclamationProvider = function() {
  return "muahahahaha";
}

// PURE!
var exclaimer = function(wordOrSentence) {
  return wordOrSentence + "!";
}

var shouty = function(input) {
  return input.toUpperCase();
}

// Composing functions
var theResult = shouty(exclaimer("I think I get it"));


var myThing = "I think I get it";
var exclamation = exclaimer(myThing);
var theResult = shouty(exclamation);

console.log(theResult);
