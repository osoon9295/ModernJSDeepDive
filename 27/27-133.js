const arr = ["hello", "world"];

// map과 flat을 순차적으로 실행
const myMap = arr.map((x) => x.split("")).flat();

console.log(myMap); // [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]

// flatMap은 map을 통해 생성된 새로운 배열을 평탄화한다.
const myFlatMap = arr.flatMap((x) => x.split(""));

console.log(myFlatMap); // [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]
