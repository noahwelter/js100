/* 
** Loops through an array containing nested arrays
** and returns the even values.
*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(arr) {
  arr.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray[i].length; j++) {
//     if (myArray[i][j] % 2 === 0) {
//       console.log(myArray[i][j]);
//     }
//   }
// }