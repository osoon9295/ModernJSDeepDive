const person = { name: "Lee" };

console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
console.log(person.hasOwnProperty("toString")); // false
