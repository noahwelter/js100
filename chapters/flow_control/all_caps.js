function allCaps(phrase) {
  if(phrase.length > 10) phrase = phrase.toUpperCase();
  return phrase;
}

console.log(allCaps('lower'));
console.log(allCaps('upper case, baby!'));