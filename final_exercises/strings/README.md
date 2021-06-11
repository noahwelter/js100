# Strings

1. `"These aren't the droids you're looking for.".length;  // 43`

2. `'confetti floating everywhere'.toUpperCase();`

3. ```js
   function repeat(count, string) {
     let repeatString = '';
     for (; count > 0; count -= 1) {
       repeatString += string;
     }
     console.log(repeatString);
   }
   ```

4. `let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'`

5. `string1.toLowerCase() === string2.toLowerCase();`

6. `byteSequence.includes('x');`

7. ```js
   function isBlank(string) {
     return string.length === 0;
   }
   ```

8. ```js
   function isBlank(string) {
     return string.trim().length === 0;
   }
   ```

9. ```js
   let string = 'launch school tech & talk';

   string = string.split(' ');

   for (let i = 0; i < string.length; i += 1) {
     string[i] = string[i][0].toUpperCase() + string[i].slice(1);
   }

   string.join(' ');
   ```