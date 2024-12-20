### 파싱

- 파싱(구문분석syntax analysis)은 프로그래밍 언어의 문법에 맞게 작성된 텍스트 문서를 읽어들여 샐행하기 위해 텍스트 문서의 문자열을 토큰으로 분해(어휘 분석lexical analysis)하고, 토큰에 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 파스 트리를 생산하는 일련의 과정
- 파싱이 완료된 후 파스 트리를 기반으로 중간언어인 바이트코드를 생성하고 실행

### 렌더링

- HTML, CSS, 자바스크립트로 작성된 문서를 파싱하여 브라우저에 시각적으로 출력하는 것

### 렌더링 과정

1. 브라우저는 HTML,CSS,자바스크립트, 이미지, 폰트 파일 등 렌더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.
2. 브라우저의 렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하고 이들을 결합하여 렌더 트리를 생성한다.
3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST를 생성하고 바이트 코드로 변환하여 실행한다. 이때 자바스크립트는 DOM API를 통해 DOM이나 CSSOM을 변경할 수 있다. 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합된다.
4. 렌더 트리를 기반으로 HTML 요소의 레이아웃(위치와 크기)를 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.

## 문제

다음은 렌더링 과정입니다. 올바른 순서로 나열해주세요.

a. 렌더 트리를 기반으로 HTML 요소의 레이아웃을 계산한다.
b. 렌더트리를 생성한다.
c. HTML,CSS,자바스크립트,이미지,폰트 파일등 렌더링에 필요한 리소스를 서버에 요청
d. 자바스크립트를 파싱한다.
e. DOM과 CSSOM을 생성한다.
f. HTML과 CSS를 파싱한다.
g. 변경된 DOM과 CSSOM을 렌더 트리로 결합한다.
h. AST를 생성하고 바이트 코드로 변환한다.
i. DOM API를 통해 DOM이나 CSSOM을 변경한다.

답 : c-f-e-b-d-h-i-g-a
