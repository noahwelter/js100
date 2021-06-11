# Variable Scope

1. `undefined` - Initializations using `var` are hoisted (does not include any assignments). `let` and `const` are not hoisted, and would result in an error message.

2. `ReferenceError` - `let` and `const` are not hoisted, so `greeting` has not been initialized before being passed to `console.log(greeting);`

3. `ReferenceError` - `myValue` is scoped to the `if` block.

4. `1` - `a` is accessable in the `if` block.

5. `ReferenceError` - the program 'knows' there is a new variable `a` scoped to the `if` block, however it is not initialized during the first `console.log(a)` call.

6. `false` - the first `b` variable is the only one accessible to the `console.log(b)` statement.

7. `1` - `a` is accessible to `myFunction`.

8. `2` - the variable `b` is passed to `myFunction` with a value of `2`. The parameter `a` is assigned this value and used in `console.log(a)`

9. `TypeError` - `a` can't be reassigned to a new value since it was declared using `const`.

10. `{firstName: 'Jane', lastName: 'Doe'}` - Object key/values can be modified, even when declared using `const`. Use `Object.freeze(obj)` to prevent modification.