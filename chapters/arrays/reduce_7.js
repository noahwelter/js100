function sumOfSquares(arr) {
  return arr.reduce((acc, ele) => acc + ele ** 2, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83