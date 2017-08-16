// First suite
function doubler(value) {
  return value * 2;
}

function map(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Second suite
function filter(arr, callback) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Third suite
function contains(obj, target) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      // this is good practice because you don't want to pull properties from the prototype chain.
      if (obj[prop] === target) {
        return true;
      }
    }
  }
  return false;
}

// Fourth suite
function countWords(sentence) {
  return sentence.split(' ').length;
}

function countWordsInReduce(total, sentence) {
  return total = total + countWords(sentence);
}

// Fifth suite
function reduce(arr, result, callback) {
  for (var i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}

// Sixth suite
function sum(arr) {
  return reduce(arr, 0, function(a, b) {
    return a + b;
  });
}

// Seventh suite
function every(arr, callback) {
  // By using an anonymous function, I can now get access to each element in the array.
  return reduce(arr, true, function(testResult, element) {
    // very cool way to not use a break statment inside of a functional loop upon failed cases! :o
    return testResult && callback(element);
  });
}

// Eighth suite
function any(arr, callback) {
  return reduce(arr, false, function(testResult, element) {
    return testResult || callback(element);
  });
}
