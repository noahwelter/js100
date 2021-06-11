# Loops

1. ```js
   for (let i = 0; i <= 10; i += 2) {
     console.log(i);
   }
   ```
   Output is:
   ```js
   0
   2
   4
   6
   8
   10
   ```

2. ```js
   for (let i = 10; i > 0; i -= 1) {
     console.log(i);
     if (i === 1) console.log('Launch!');
   }
   ```

3. ```js
   let greeting = 'Aloha!';

   for (let i = 1; i <= 3; i += 1) {
     console.log(greeting);
   }
   ```

4. ```js
   for (let i = 1; i <= 100; i += 1) {
     console.log(i * 2);
   }
   ```

5. ```js
   let array = [1, 2, 3, 4];
   let index = 0;

   while(index < array.length ) {
     console.log(array[index]);
     index += 1;
   }
   ```

6. ```js
   let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

   for (let i = 0; i < cities.length; i += 1) {
     if (cities[i] === null) continue;

     console.log(cities[i]);
   }
   ```

7. There is no stopping condition in the `for` loop. To stop after the first iteration:
   ```js
   for (let i = 0; i < 1; i += 1) {
     console.log("and on");
   }
   ```

8. ```js
   let counter = 1;
   
   while (counter <= 40) {
     console.log(counter);
     counter += 2;
   }
   ```

9. ```js
   let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

   for (let i = 0; i < fish.length; i += 1) {
     console.log(fish[i]);
     if (fish[i] === 'Nemo') break;
   }
   ```

10. The `while` loop will not log anything, as the condition (`0 > 0`) returns `false`. The `do...while` loop will log `Woooot!` once before decrementing `counter` to `-1` and evaluating `-1 < 0` as `false` in the `do...while` condition.