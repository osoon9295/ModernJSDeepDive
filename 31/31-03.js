const target = "Is this all there is?";

// /**
//  * pattern:정규 표현식 패턴
//  * flags:정규 표현식의 플래그(g,i,m,u,y)
//  */

// new RegExp(pattern[,flag])

const regexp = new RegExp(/is/i);

console.log(regexp.test(target)); // true
