function isNotANumber(number) {
  return number !== number;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber('not NaN :)'));