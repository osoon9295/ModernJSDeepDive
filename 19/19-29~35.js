function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person("Lee");

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty("name")); // true

Object.getPrototypeOf(me) === Person.prototype; // -> true
Object.getPrototypeOf(Person.prototype) === Object.prototype; // -> true

// hasOwnProperty는 Object.prototype의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색해서 사용한다.
me.hasOwnProperty("name"); // -> true

Object.prototype.hasOwnProperty.call(me, "name");

console.log(me.foo); // undefined

me.hasOwnProperty("name");
