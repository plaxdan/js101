

/**
 * Flattening
 */
var flattenize = function(arrays) {
  var reducer = function(prev, next) { return prev.concat(next); };
  return arrays.reduce(reducer, []);
};

/**
 * Mother child age difference
 */
var average = function(array, precision) {
  var plus = function(a, b) { return a + b; }
  return (array.reduce(plus) / array.length)
    .toFixed(precision);
}

var hasKnownMother = function(person) {
  return person.mother in byName;
};

var getAgeDiff = function(person) {
  return person.born - byName[person.mother].born
}

var ageDiffs = ancestry
  .filter(hasKnownMother)
  .map(getAgeDiff);

console.log(average(ageDiffs, 1));


/**
 * Historical life expectancy
 */
var average = function(array, precision) {
  var plus = function(a, b) { return a + b; }
  return (array.reduce(plus) / array.length)
    .toFixed(precision);
}

var groupBy = function(array, groupOf) {
  var reducer = function(prev, next) {
    var groupName = groupOf(next);
    if (groupName in prev) {
      prev[groupName].push(next);
    } else {
      prev[groupName] = [next];
    }
    return prev;
  };
  return array.reduce(reducer, {})
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}
