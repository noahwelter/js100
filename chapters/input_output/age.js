let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you?\n'));  // current age
const INTERVAL = 10;  // interval in years

console.log(`You are ${age} years old.`);

for (let i = 1; i <= 4; i++) {
  let addYears = i * INTERVAL;
  console.log(`In ${addYears} years, you will be ${age + addYears} years old.`);
}