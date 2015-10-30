
/**
 * Minimum
 */
var min = function(a, b) {
  return a < b ? a : b
};

/**
 * Recursion
 */
var isEven = function(num) {
  var abs = Math.abs(num);
  if (abs <= 1) return abs === 0;
  return isEven(abs -2);
};


/**
 * Count Bs
 */
var countBs = function(word) {
  var total = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === 'B') total++;
  }
  return total;
};

/**
 * Count chars
 */
var countChars = function(word, char) {
  var total = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === char) total++;
  }
  return total;
};
