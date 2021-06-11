# Functions 1

1. ```js
   function sum(firstVal, secondVal) {
     return firstVal + secondVal;
   }
   ```

2. ```js
   function brendanEichQuote() {
     console.log('Always bet on JavaScript.');
   }  // returns undefined
   ```

3. ```js
   function cite(author, quote) {
     console.log(author + ' said: "' + quote + '"');
   }
   ```

4. ```js
   function squaredNumber(num) {
     return num ** 2;
   }
   ```

5. An error message will be generated because the attempted function call does not use `()`. Instead, the function should be called using `multiplesOfThree();`. This will log a series of phrases, for example `3 / 1 = 3` or `6 / 2 = 3`, through `30 / 10 = 3`.

6. ```js
   function compareByLength(str1, str2) {
     let diff = str1.length - str2.length;

     return diff ? diff / Math.abs(diff) : 0;
   }
   ```
   or
   ```js
   function compareByLength(str1, str2) {
     return Math.sign(str1.length - str2.length);
   }
   ```

7. ```js
   'Captain Ruby'.split(' ')[0] + ' JavaScript';
   ```
   or
   ```js
   'Captain Ruby'.replace('Ruby', 'JavaScript');
   ```

8. ```js
   function greet(code) {
     switch (code) {
       case 'en': return 'Hi!';
       case 'fr': return 'Salut!';
       case 'pt': return 'Olá!';
       case 'de': return 'Hallo!';
       default: return 'We haven\'t added that code yet. Sorry!';
     }
   }
   ```

9. ```js
   function extractLanguage(locale) {
     return locale.slice(0, 2);
   }
   ```

10. ```js
    function extractRegion(locale) {
      return locale.slice(3, 5);
    }
    ```

11. See [greetings.js](greetings.js). Code was modified to use the new object `greetList` in the function `greet` to store the various greetings. Function `greet` checks to see if the region exists. If yes, it will return the regional greeting. If no, it will return the default greeting for the associated language. This assumes that the input language exists in `greetList`.