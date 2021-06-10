# Exercises - Objects

1. `person.name` or `person['name'];`

2. They are all valid.

3. ```
   let myArray = {
     0: 'This',
     1: 'is',
     2: 'an',
     3: 'array',
     length: 4,
   };
 
   for (let i = 0; i < myArray.length; i += 1) {
     console.log(myArray[i]);
   }
   ```

4. ```
   let objKeys = Object.keys(obj);

   // Using forEach
   objKeys = objKeys.forEach((val, i) => objKeys[i] = val.toUpperCase());

   // Using map
   objKeys = objKeys.map(val => val.toUpperCase());
   ```

5. `let myObj = Object.create(myProtoObj);`

6. | Value | Description |
   | --- | --- |
   | "foo" | Primative |
   | 3.1415 | Primative |
   | [ 'a', 'b', 'c' ] | Object |
   | false | Primative |
   | foo | Neither |
   | function bar() { return "bar"; } | Object |
   | undefined | Primative |
   | { a: 1, b: 2 } | Object |

7. `myObj.qux = 3;`
   The two code snippits will not produce the same output - `Object.keys(myObj);` doesn't show prototype properties, while the for/let snippet will show inherited properties from `myProtoObj`.

8. See [object_copy.js](object_copy.js)

9. ```
   hi
   hello
   ```

10. Number of primatives: 6 (1, 2, "a", "b", false, null)
    Number of objects: 4 (three arrays, 1 object)

11. `obj['bar'][3]['xyz'] = 606`