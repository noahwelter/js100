# Reading Documentation 2

1. From: 
   ```javascript
   let ice_cream_taste = 'chocolate'
   let ice_cream_density = 10
   
   while(ice_cream_density > 0)
   {
       console.log('Drip...');
       ice_cream_density -= 1;
   }
   
   console.log('The '+ ice_cream_taste +' ice cream melted.');
   ```
   To:
   ```javascript
   let iceCreamTaste = 'chocolate';
   let iceCreamDensity = 10;
   
   while (iceCreamDensity > 0) {
     console.log('Drip...');
     iceCreamDensity -= 1;
   }
   
   console.log('The ' + iceCreamTaste + ' ice cream melted.');
   ```

2. 1. Number
   2. String
   3. Boolean
   4. null
   5. Undefined
   6. Symbol
   7. BigInt

3. `Number.MAX_VALUE;`

4. `4 * 5 + 3 ** 2 / 10` evaluates to `20.9`. `(4 * 5) + ((3 ** 2) / 10)`

5. `Date.now()` returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

6. ```
   today.getYear()  // returns the year of the given date, according to local time, minus 1900 (121 for 2021), function is deprecated.
   today.getFullYear()  // returns 2021
   ```

7. `Array.prototype.join()` can take up to 1 argument, separator. Separator is the string used to separate each pair of adjacent elements of the array. If omitted, ',' is used for separator. If >1 argument is passed to .`join()`, the excess arguments are ignored.

8. ```javascript
   let joined = 'This' + ' ' + 'that';
   let more = joined + ' the other one';
   // Could also use String.prototype.concat(), but + is preferred.
   ```

9. The parenthesis are not properly formatted within the `if` condition. See below for correction:
   ```javascript
   let speedLimit = 60;
   let currentSpeed = 80;
 
   if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
     console.log('"People are so bad at driving cars ' +
       'that computers don\'t have to be that good to be much better." ' +
       '-- Marc Andreessen');
   }

10. `length` is a property of `String` objects. It is used as a method `tweet.length()` in the provided code, which produces a `TypeError`.