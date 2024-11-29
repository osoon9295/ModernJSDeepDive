const str = "Hello world";

// 문자열 str에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
console.log(str.search(/o/)); // 4
console.log(str.search(/x/)); // -1
