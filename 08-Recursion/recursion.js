// First suite
function factorialIterative(n) {
  var product = 1;
  for (var i = n; i > 1; i--) {
    product *= i;
  }
  return product;
}

// Second suite.
function factorial(n) {
  return (n <= 0) ? 1 : factorial(n - 1) * n;
}

// Third suite.
function fib(n) {
  if (n <= 0) return 1;
  if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

// Fourth suite.
function type(expression) {
  return Object.prototype.toString.call(expression)
    .replace(/[\[\]']+/g, '') // remove the brackets.
    .replace(/\b(object )\b/, ''); // remove the pattern 'object '.
}

// Fifth suite.
function stringify(obj) {

  if (type(obj) === 'Array') {
    var result = obj.map(function(element) {
      return stringify(element);
    });
    // some next level recursion, I cheated for this bit ...
    return '[' + result.join(',') + ']'; // <-- join will take the array elements and convert it to a string.
  }

  if (type(obj) === 'Object') {
    var result = [];

    for (var key in obj) {
      debugger;
      let val = stringify(obj[key]);
      result.push('"' + key + '": ' + val);
    }
    return "{" + result.join(",") + "}";

  }

  if (type(obj) === 'Undefined' || type(obj) === 'Null') {
    return type(obj).toLowerCase();
  }

  if (type(obj) === 'String') {
    return '"' + obj + '"';
  }

  return "" + obj;
}
