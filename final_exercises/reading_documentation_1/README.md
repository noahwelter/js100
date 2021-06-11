# Reading Documentation 1

1. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

2. Yes - [String.prototype.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

3. There is not a built in method for capitalization.

4. `['fish', 'and', 'chips'][1]`

5. It returns `undefined`

6. ```
   let trees = ['birch', 'pine', 'sequoia', 'palm tree'];
 
   trees[trees.length - 1];   // => 'palm tree'
   trees.pop();               // => 'palm tree'
   trees[trees.length - 1];   // => 'sequoia'

7. | Input | Return Value |
   | --- | ---|
   | 23.5 | number |
   | 'Call me Ishmael.'' | string |
   | false | boolean |
   | 0 | number |
   | null | object |
   | undefined | undefined |

8. ```
   typeof tweet;    // => 'string'
   typeof words;    // => 'object'
   typeof isValid;  // 'boolean'
   ```

9. ```
   tweet.split(' ');  // ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']
   tweet.split(' ').reverse();  // ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']
   tweet.split(' ').reverse().join(' ');  // '#launchschool #javascript it... of hang the get to Starting'
   ```

10. ```
    '8' == 8  // true - == operator doesn't check for type (attempts to convert/coerce)
    '8' === 8  // false - === operator checks for type (doesn't attempt to convert/coerce)
    ```