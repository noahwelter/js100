/* 
** Noah Welter
** 10 JUN 2021
**
** Takes an array argument and returns an array that contains only the integers
** from the input array.
*/

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);

function findIntegers(arr) {
  return arr.filter(num => Number.isInteger(num));
}