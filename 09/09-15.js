// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number("0");
Number(true); // -> 1
Number(false); // -> 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변경 가능)

parseInt("0");

// 3. + 단항 산술 연산자를 이용하는 방법
+"0";
+true; // -> 1

// 4. * 산술 연산자를 이용하는 방법
"0" * 1;
true * 1; // -> 1
