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
  return (n <= 0) ? 1 : factorial(n-1) * n;
}

// Third suite.
function fib(n) {
  if (n <= 0) return 1;
  else if (n === 1) return 1;
  else return fib(n-1) + fib(n-2);
}

// Fourth suite. 
