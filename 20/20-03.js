function foo() {
  "use strict";

  x = 10;
}
foo();
console.log(x); // ReferenceError: x is not defined
