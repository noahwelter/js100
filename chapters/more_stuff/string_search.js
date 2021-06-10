// Using for loop
// function allMatches(words, regex) {
//   let found = [];
//   for (let i = 0; i < words.length; i += 1) {
//     if (regex.test(words[i])) {
//       found.push(words[i]);
//     }
//   }
//   return found;
// }

// Using filter
function allMatches(words, regex) {
  return words.filter(word => regex.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']