/*
Some Javascript DOM events:

- click
- mouseup
- mousedown
- mousenter
- mouseleave
- keydown
- keyup
- blur
- focus

See: https://developer.mozilla.org/en-US/docs/Web/Events
*/

var firstInput  = document.getElementById('first-input');
var secondInput = document.getElementById('second-input');
var result      = document.getElementById('result');
var resetButton = document.getElementById('reset');
var log         = document.getElementById('log');

/**
 * Attaches event listeners to the inputs and buttons.
 */
function attachEventListeners() {
  firstInput.addEventListener('input', onInput);
  secondInput.addEventListener('input', onInput);
  firstInput.addEventListener('keydown', onKeyDown);
  secondInput.addEventListener('keydown', onKeyDown);
  resetButton.addEventListener('click', reset);
}

/**
 * Handles when the user presses a key down.
 */
function onKeyDown(keyboardEvent) {
  if (keyboardEvent.keyIdentifier === 'Enter') {
    writeToLog(firstInput.value, secondInput.value, result.innerText);
    clearForm();
  }
}

/**
 * Handles when the user inputs some text.
 */
function onInput() {
  var one = Number(firstInput.value) || 0;
  var two = Number(secondInput.value) || 0;
  var sum = one + two;
  result.innerText = sum;
}

/**
 * Writes the current calculation to the log.
 */
function writeToLog(first, second, result) {
  first = first || 0;
  second = second || 0;
  result = result || 0;
  var logEntry = document.createElement("li");
  logEntry.className = 'list-group-item list-group-item-success';
  logEntry.innerText = `${first} + ${second} = ${result}`;
  log.appendChild(logEntry);
}

/**
 * Clears the log and resets the form.
 */
function reset() {
  clearLog()
  clearForm();
}

/**
 * Clears the log.
 */
function clearLog() {
  var child = log.childNodes[0];
  while (child) {
    log.removeChild(child);
    child = log.childNodes[0];
  }
}

/**
 * Resets the form.
 */
function clearForm() {
  firstInput.value = '';
  secondInput.value = '';
  result.innerText = '0';
  firstInput.focus();
}

/**
 * Prepares the calculator for first use.
 */
function initialize() {
  attachEventListeners();
  clearForm();
}

// Go!
initialize();

/*
TODO: future exercises / improvements?
  - add validation - make it impossible to enter non-numbers
  - show history
  - clear history
  - allow the user to chooe the +/-*% operator from a list
  - put this logic into a stateful JavaScript object
  - make a calculator with buttons for all the numbers and operators
*/