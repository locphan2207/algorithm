**ReSTful API:**
- API that use HTTP request to get, create, update, or delete data from server to client.

**Closure**
- A function inside another function that can have access to variables declared from the outer functions
- Closure can update the outer variables

**Hoisting**
- Variables are in scope of the closest outer function, NOT in scope of the block.  
Ex: If we declare a variable inside for loop, it is not in scope of that for only,
it is still in scope the the function that contains the for loop.
- Re-define the variable in different blocks inside the same function is the same as
re-assigning same variable with new value in a function.

**Class**
- Declare a class as a function with Capitalize name
- To create instance variable, use `this.<variable>`
- To create methods, use `<Class>.prototype = function() {...}` because when we put methods into `prototype`, it will be only create one instance of that method inside its `prototype`. Every instances of the class will look to that `prototype` to search for/use that method
- `static` method is same as Class method, it can be called without the need of creating class instances
- Ex:
```javascript
  function Kitten(name, age) {
    this.name = name;
    this.age = age;
  }

  Kitten.prototype.meow = function () {
    console.log(this.name + ' says "meow!"');
  };

  k1 = new Kitten("Earl", 2);
  k2 = new Kitten("Houdini", 1);
```

**`Undefined` vs `null` vs undecleared**
- Undecleared: Never decleare a name of a variable
- Undefined: Just decleare a variable, but no assign it to a value or function
- Null: variable with a value `null` means nothing in general.
