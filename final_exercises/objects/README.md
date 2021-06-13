# Objects

1. `student.courses;`

2. `jane.location.country;`

3. ```js
   let fido = {
     name: 'Fido',
     species: 'Labrador Retriever',
     color: 'brown',
     weight: 16,
   };

   fido.age = undefined;
   fido.['favorite food'] = undefined;
   ```

4. ```js
   let jane = {
     firstName: 'Jane',
     lastName: 'Harrelson',
     age: 32,
     location: {
       country: 'Denmark',
       city: 'Aarhus'
     },
     occupation: 'engineer',
     greet: (name) => console.log(`Hej, ${name}!`)
   };
   ```

5. Snippet 1 will return `{ prefix: 'Pacific' }`
   Snippet 2 will return `{ Indian: 'Pacific' }`

6. The conditional `prop === true` is comparing the string property names to the boolean `true`. This will never evaluate to `true`, and `'It's true!'` will never be logged.

7. `let keys = Object.keys(vehicle);`

8. `let nestedPerson = Object.entries(person);`

9. ```js
   let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
   let object = {};

   for (let i = 0; i < nestedArray.length; i += 1) {
     object[nestedArray[i][0]] = nestedArray[i][1];
   }
   ```

10. ```js
    function clone(obj) {
      return Object.assign({}, obj);
    }
  
    let person = {
      title: 'Duke',
      name: {
        value: 'Nukem',
        isStageName: true
      },
      age: 33
    };
  
    let clonedPerson = clone(person);
    person.age = 34;
  
    console.log(person.age);       // 34
    console.log(clonedPerson.age); // 33
  
    person.name.isStageName = false;
    console.log(person.name.isStageName);       // false
    console.log(clonedPerson.name.isStageName); // false
    ```