// http://markdalgleish.com/presentations/gettingclosure/
function test() {
  var a = 10;

  return function() {
    return a;
  };
}
console.log('invoking a function expression', test()());

console.log(
  'IIFE- Immediately invoking function expression',
  (function test() {
    var a = 10;

    return function() {
      return a;
    };
  })()()
);

//currying
function sum(input) {
  return function(input2) {
    return function(input3) {
      return input + input2 + input3;
    };
  };
}

// function
const sum2 = input => input2 => input3 => input + input2 + input3;

console.log({ sum: sum(1)(2)(3), sum2: sum2(1)(2)(3) });
