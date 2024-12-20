function convertArgsToArray() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }

  // arguments 객체를 배열로 변환
  // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
  const arr = Array.prototype.slice.call(arguments);
  // const arr =  Array.prototype.slice.apply(arguments);
  console.log(arr); //

  return arr;
}

convertArgsToArray(1, 2, 3); // [1, 2, 3]
