let rlSync = require('readline-sync');

function getName(nameType) {
  return rlSync.question(`What is your ${nameType}?\n`);
}

let nameFirst = getName('first name');
let nameLast = getName('last name');

console.log(`Hello, ${nameFirst} ${nameLast}!`);