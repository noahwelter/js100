/* 
** Noah Welter
** 10 JUN 2021
**
** Maps myArray to a new array containing the sign of the corresponding element.
*/ 

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let myArraySigns = myArray.map(num => num % 2 === 0 ? 'even' : 'odd');

console.log(myArraySigns);