const Foo = () => {};

// 화살표 함수는 prototype프로퍼티가 없다.
Foo.hasOwnProperty("prototype"); // -> false
