# Functions 2

1. ```js
   function greet(greeting = 'Hello') {
     console.log(greeting + ', world!');
   }  // greet(undefined) logs 'Hello, world!'
   ```

2. ```js
   function greet(greeting = 'Hello', recipient = 'world!') {
     console.log(greeting + ', ' + recipient + '!');
   }
   ```

3. ```js
   function greet() {
     console.log(greeting() + ', ' + recipient() + '!');
   }
   ```

4. ```js
   function calculateBMI(height, weight) {
     return (weight / (height / 100)**2).toFixed(2);
   }
   ```

5. ```js
   function catAge(humanYears) {
     let catYears = 0;
     for (; humanYears > 0; humanYears -= 1) {
       if (humanYears === 1) catYears += 15;
       if (humanYears === 2) catYears += 9;
       if (humanYears > 2) catYears += 4;
     }

     return catYears;
   }
   ```

6. ```js
   function removeLastChar(string) {
     return string.slice(0, string.length - 1);
   }
   ```

7. ```js
   const template = 'I VERB NOUN.';
 
   let sentence = (verb, noun) => template
     .replace('VERB', verb)
     .replace('NOUN', noun);
 
   console.log(sentence('like', 'birds'));
   ```

8. ```js
   let initGame = () => ({
       level: 1,
       score: 0
     });
 
   let game = initGame();
 
   console.log('Level: ' + game.level);
   console.log('Score: ' + game.score);
   ```