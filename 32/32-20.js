const str = "Hello";

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // H e l l o
}

// 인덱스가 문자열의 범위(0~str.length-1)를 벗어난 경우 빈 문자열을 반환한다.
console.log(str.charAt(5)); // ""
