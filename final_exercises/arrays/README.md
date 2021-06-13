# Arrays

1. ```js
   function firstElement(arr) {
     return arr[0];
   }  // Returns undefined if array is empty.
   ```

2. ```js
   function lastElement(arr) {
     return arr[arr.length - 1];
   }  // Returns undefined if array is empty.
   ```

3. ```js
   let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

   energy.splice(0, 1);
   energy.push('geothermal');
   ```

4. ```js
   let alphabet = 'abcdefghijklmnopqrstuvwxyz';

   let alphaArr = alphabet.split('');
   ```

5. ```js
   let scores = [96, 47, 113, 89, 100, 102];
   const reducer = (acc, val) => {
     if (val >= 100) acc += 1;
     return acc;
   }

   scores.reduce(reducer, 0);
   ```

6. ```js
   let vocabulary = [
   ['happy', 'cheerful', 'merry', 'glad'],
   ['tired', 'sleepy', 'fatigued', 'drained'],
   ['excited', 'eager', 'enthused', 'animated']
   ];
   
   for (let i = 0; i < vocabulary.length; i += 1) {
     for (let j = 0; j < vocabulary[i].length; j += 1) {
       console.log(vocabulary[i][j]);
     }
   }
   ```

7. `false` - Arrays are `Object` types. When comparing two objects, they must both point to the same memory location to return `true`.

8. `input.isArray();`

9. ```js
   let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome', 'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro', 'Marrakesh', 'New York City'];

   function validDestination(searchCity, cityList) {
     return !!cityList.filter(city => city === searchCity).length;
   }
   ```

10. `passcode.join('-');`

11. ```js
    let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

    while (groceryList.length > 0) {
      console.log(a.shift());
    }
    ```