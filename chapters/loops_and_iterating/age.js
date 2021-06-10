let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you?\n'));  // current age

console.log(`You are ${age} years old.`);

for (let interval = 10; interval <= 40; interval += 10) {
  console.log(`In ${interval} years, you will be ${age + interval} years old.`);
}