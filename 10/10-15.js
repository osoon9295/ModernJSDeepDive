var person = {
  "last-name": "Lee",
  1: 10,
};

// console.log(person.'last-name') // SyntaxError: Unexpected string
// console.log(last - name); // Node.js -> ReferenceError: last is not defined 브라우저 -> NaN
// console.log(person[last - name]); // ReferenceError: last is not defined
console.log(person["last-name"]); // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
// console.log(person.1) // SyntaxError: missing ) after argument list
// console.log(person. "1"); // SyntaxError: Unexpected string
console.log(person[1]); // -> 10 : person[1] -> person['1']
console.log(person["1"]); // -> 10
