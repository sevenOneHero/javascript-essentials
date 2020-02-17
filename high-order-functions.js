const numbers = [1, 2, 3, 45, 6, 5];

function affirmative(numbers, ...conditions) {
  return numbers.filter(number => conditions.every(c => c(number)));
}

function greaterThan2(number) {
  return number > 2;
}

function smallerThan30(number) {
  return number < 30;
}

console.log(affirmative(numbers, greaterThan2, smallerThan30));
