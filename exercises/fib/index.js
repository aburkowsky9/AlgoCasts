// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* //memoized fib
function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[JSON.stringify(args)]) return cache[JSON.stringify(args)];
    const result = fn.apply(this, args);
    cache[JSON.stringify(args)] = result;  
    return result;
  }
}

function slowFib(n) { //recursive
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

var fib = memoize(slowFib);
*/

function fib(n, cache = {}) { //cache as arg
  if (n <= 0) { return 0; }
  if (n === 1) { return 1; }
  if (cache.hasOwnProperty(n)) { return cache[n]; }
  const result = fib(n - 1, cache) + fib(n - 2, cache);
  return cache[n] = result;
}

// function fib(n) { // iterative
//   let prev = 0;
//   let result = 1;
//   let temp;
//   if (n < 1) return 0;
//   for (let i = 2; i <= n; i++) {
//     temp = result;
//     result = result + prev;
//     prev = temp;
//   }
//   return result;
// }

// var fib = (function() { //iffe cache
//   const cache = {};
//   const memo = (n) => {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (cache[n]) return cache[n];
//     const result = memo(n - 1) + memo(n - 2);
//     cache[n] = result;
//     return result;
//   };
//   return memo;
// })();

module.exports = fib;
