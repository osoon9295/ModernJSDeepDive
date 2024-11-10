const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(2); // -> "1111"
// 문자열 "1111"을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x.toString(2), 2); // -> 15

// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(8); // -> "17"
// 문자열 "17"을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x.toString(8), 8); // -> 15

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
x.toString(16); // -> "f"
// 문자열 "f"를 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x.toString(16), 16);

// 숫자값을문자열로 반환한다.
x.toString(); // -> "15"
// 문자열 "15"를 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
parseInt(x.toString()); // -> 15
