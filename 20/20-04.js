function foo() {
  x = 10;
  ("use strict");
}
foo();
console.log(x); // 에러를 발생시키지 않는다.
