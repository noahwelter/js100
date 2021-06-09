1. > 'Noah' + 'Welter'

2. > let num = 4936
   > let ones = num % 10
   > ones
   = 6
   > num = (num - ones) % 10
   = 493
   > let tens = num % 10
   > tens
   = 3
   > num = (num - tens) / 10
   = 49
   > let hund = num % 10
   > hund
   = 9
   > num = (num - hund) / 10
   = 4
   > let thou = num
   > thou
   = 4

3. 'true'        // String
   false         // Boolean
   1.5           // Number
   2             // Number
   undefined     // Undefined
   {foo: 'bar' } // Object

4. console.log('5' + 10); // Logs '510' instead of 15 because the number 10 is coerced to a string before being concatenated to the string '5'.

5. > console.log(Number('5') + 10);
   = 15

6. `The value of 5 + 10 is ${Number('5') + 10}.`;

7. There will not be an error. Accessing an array element with an index that is greater than or equal to the length of the array will return undefined.

8. > let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

9. let pets = { 'astra': 'dog',
                'butterscotch': 'cat',
                'pudding': 'cat',
                'neptune': 'fish',
                'darwin': 'lizard'
   };

10. 'foo' === 'Foo'; // Returns boolean false.

11. parseInt('3.1415'); // Returns number 3.

12. True - strings are evaluated character by character from left to right, so 1 < 9 returns true.
