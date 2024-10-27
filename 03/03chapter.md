# 🌵03장 자바스크립트 개발 환경과 실행 방법

## 3.1 자바스크립트 실행 환경

### [브라우저]

- ECMAScript 지원
- 클라이언트 사이드 Web API 지원 : DOM, BOM, Canvas XMLHttpRequest, fetch, requestAnimation Frame, SVG, Web Storage, Web Component, Web Worker...
- 브라우저 화면에 렌더링하는 것이 주된 목적

### [Node.js]

- ECMAScript 지원
- Node.js 고유의 API 지원
- 브라우저 외부에서 자바스크립트 실행 환경을 제공하는 것이 주된 목적

## 3.2 웹 브라우저

- 크롬 : ECMAScript 사양 준수 + 시장 점유율도 가장 높음
- 크롬 추천

### 3.2.1 [개발자 도구]

- 개발자 도구 Dev Tools는 브라우저 기본 내장
- 다양한 기능 제공

> **단축키**  
> 윈도우 : F12 또는 Ctrl + Shift + I  
> macOS : command + option + I

**기능**

    - Elements : 로딩된 웹페이지의 DOM과 CSS를 편집해서 렌더링 뷰 확인 가능. 편집 내용이 저장되진 않지만 이 패널을 확인해서 렌더링 문제에 대한 힌트를 얻을 수 있음
    - Console : 로딩된 웹페이지의 에러를 확인하거나 자바스크립트 소스코드에 작성한 console.log메서드의 실행 결과를 확인할 수 있음
    - Sources : 로딩된 웹페이지의 자바스크립트 코드를 디버깅 가능
    - Network : 로딩된 웹페잊에 관련된 네트워크 요청 정보와 성능 확인 가능
    - Application : 웹 스토리지, 세션, 쿠키 확인하고 관리 가능

### 3.2.2 [콘솔]

- console.log 메소드를 사용하여 간편하게 코드의 실행 결과를 확인 가능
- REPL환경 사용 가능 : 직접 입력해서 결과 확인 가능  
   \*\* REPL(Read Eval Print Loop : 입력 수행 출력 반복)
- 프롬프트에 자바스크립트 코드를 입력하면 다음 줄에 실행 결과 표시
- 줄바꿈이 필요하면 `shift + Enter`

### 3.2.3 [브라우저에서 자바스크립트 실행]

- 브라우저는 HTML파일을 로드하면 script태그에 포함된 자바스크립트 코드 실행
- 자바스크립트 코드내에 console.log 메서드가 호출되었다면 콘솔에 실행 결과 출력

🚀 01.html 파일 참고

### 3.2.4 디버깅

1. Sources 패널로 이동
2. 에러가 발생한 위치에 빨간 밑줄
3. 에러 확인 : Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
4. 에러가 발생한 코드 왼쪽의 라인 번호를 클릭 (브레이크포인트 걸기)
5. 다시 더하기 버튼 클릭
6. 디버깅 모드로 전환
7. 브레이크포인트의 변수에 마우스 커서를 올리면 변수의 값을 확인 할 수 있다.

## 3.3 Node.js

- 브라우저에서 동작하는 간단한 웹 애플리케이션은 브라우저만으로도 개발 가능
- 규모가 커지면서 다양한 프레임워크, 라이브러리, 도구를 사용할 때 Node.js와 npm 필요

### 3.3.1 [Node.js와 npm소개]

**Node.js**

- 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경
- 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행 환경

**npm**

- 자바스크립트 패키지 매니저
- Node.js에서 사용할 수 있는 모듈들을 패키지화해서 모아둔 저장소 역할
- 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공

### 3.3.2 [Node.js 설치]

- Node.js의 웹사이트 접속
- http://nodejs.org
- LTS버전 : Long Term Support. 장기적으로 안정된 지원 보장
- Current버전 : 최신 기능 제공, 업데이트가 발생하는 버전, 안정적이지 않음

=> 학습을 위해 Current버전 추천

> **설치 확인**  
> <터미널>  
> node -v  
> npm -v

### 3.3.3 [Node.js REPL]

**REPL(Read Eval Print Loop)사용 방법**

- 실행하기 : <터미널> node
- 자바스크립트 파일 실행 : node 뒤 파일이름 입력
- 종료하기 : Ctrl + C 두 번 입력

## 3.4 비주얼 스튜디오 코드

### 3.4.1 [비주얼 스튜디오 코드 설치]

### 3.4.2 [내장 터미널]

- 비주얼 스튜디오 코드에는 내장 터미널이 있다.

🚀 02.js 파일 참고

### 3.4.3 [Code Runner 확장 플러그인]

- 현재 표시 중인 자바스크립트 파일을 간단하게 실행할 수 있다.

1. 확장에서 설치
2. 단축키 사용  
   윈도우 : Ctrl + Alt + N  
   macOS : control + Option + N

### 3.4.4 [Live Server 확장 플러그인]
