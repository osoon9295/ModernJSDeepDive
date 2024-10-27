// if... else
var x = 0;

// if...else문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다. 
var result = if (x%2){result="홀수"} else {result="짝수"} // SyntaxError : Unexpected token if

//-------------------------------------
// 삼항 조건 연산자

var y = 10

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x%2 ? "홀수" : "짝수";
console.log(result)