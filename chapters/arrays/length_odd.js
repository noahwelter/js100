/*
** Noah Welter
** 10 JUN 2021
**
** Determines the length of all elements in an array of strings and discards
** the even values.
*/

// USING MAP AND FILTER
// function oddLengths(arr) {
//   arr = arr.map(num => num.length);
//   return arr.filter(num => num % 2 !== 0);
// }

// USING REDUCE
// My attempt...
// function oddLengths(arr) {
//   let newArr = Array();
//   arr.reduce((acc, ele) => {
//     if (ele.length % 2 !== 0) {
//       newArr.push(ele.length);
//     }
//   }, newArr);
//   return newArr;
// }

// Refactored
function oddLengths(arr) {
  return arr.reduce((newArr, ele) => {
    length = ele.length;
    if (length % 2 !== 0) {
      newArr.push(length);
    }
    return newArr;
  }, []);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]