# Exercises - Flow Control

1. ```
   false || (true && false); // false
   true || (1 + 2);  // true
   (1 + 2) || true;  // 3
   true && (1 + 2);  // 3
   false && (1 + 2); // false
   (1 + 2) && true;  // true
   (32 * 4) >= 129;  // false
   false !== !true;  // false
   true === 4; // false
   false === (847 === '847');  // true
   false === (847 == '847'); // false
   (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  // true
   ```

2. See [even_or_odd.js](even_or_odd.js)

3. See [even_or_odd.js](even_or_odd.js)

4. ```
   Product2
   Product3
   Product not found!
   111
   ```

5. ```
   if (foo()) {
     return 'bar';
   } else {
     return qux();
   }
   ```

6. `Not Empty` - the array exists/is truthy.

7. See [all_caps.js](all_caps.js)

8. See [number_range.js](number_range.js)