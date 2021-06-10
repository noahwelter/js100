/*
** Computes and returns the factorial of a number by using a for loop.
*/

// USING FOR LOOP
// function factorial(input) {
//   let result = 1;
//   for (let i = input; i > 0; i -= 1) {
//     result *= i;
//   }
//   return result;
// }

// USING RECURSIVE CALL
function factorial(input) {
  if(input === 1) {
    return 1;
  }
  return input * factorial(input - 1);
}

for (let i = 1; i < 9; i += 1) {
  console.log(factorial(i));
}

