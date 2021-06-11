# Conditionals

1. 1. false
   2. 0
   3. -0
   4. undefined
   5. null
   5. NaN
   7. ''
   8. 0n

2. ```js
   let randomNumber = Math.round(Math.random());

   if (randomNumber) {
     console.log('Yes!');
   } else {
     console.log('No.');
   }
   

3. ```js
   console.log(randomNumber ? 'Yes!' : 'No.');
   ```

4. ```js
   let weather = 'sunny';
   
   if (weather === 'sunny') {
     console.log('It\'s a beautiful day!');
   } else if (weather === 'rainy') {
     console.log('Grab your umbrella.');
   } else {
     console.log('Let\'s stay inside.');
   }
   ```

5. There are no `break;` statements, so the code will fall through to any subsequent cases after the initial match (until end or `break;`).
   ```js
   'neigh'
   'tweet tweet'
   'cricket*'
   ```

6. ```js
   let weather = 'sunny';

   switch (weather) {
     case 'sunny':
       console.log('It\'s a beautiful day!');
       break;
     case 'rainy':
       console.log('Grab your umbrella.');
       break;
     default:
       console.log('Let\'s stay inside.');
   }
   ```
7. `'Yes!'`

8. `'No...'`

9. `$3.99`

10. `true` - Parentheses are needed to produce this result since `&&` has higher operator precedence than `||`.