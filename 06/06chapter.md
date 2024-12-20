# 🌵06장 데이터 타입

- 데이터 타입 = 타입
- 원시타입
  - 숫자number 타입
  - 문자열string 타입
  - 불리언boolean 타입
  - undefined 타입
  - null 타입
  - 심벌symbol 타입 : ES6에서 추가
- 객체 타입

## 6.1 숫자 타입

- 다른 언어와 다르게 정수,실수 구분 없이 number
- 배정밀도 64비트 부동소수점 형식
- 모든 수를 실수로 처리
- 숫자 타입은 추가적으로 세가지 특별한 값도 표현 가능
  - Infinity : 양의 무한대
  - -Infinity : 음의 무한대
  - NaN : 산술 연산 불가 (not-a-number)
    - 자바스크립트는 대소문자를 구별하기 때문에 NaN을 nan같이 표현한다면 에러 발생

🚀 01.js 참고

## 6.2 문자열 타입

- 텍스트 데이터를 나타내는 데 사용
- 문자열은 작은 따옴표(''), 큰따옴표(""), 백틱(``) 으로 텍스트를 감싼다.
- 일반적으론 작은 따옴표를 사용한다.
- 따옴표를 사용하는 이유는 키워드나 식별자 같은 토큰과 구분하기 위해서
- 스페이스 같은 공백 문자도 포함하기 위해서
- 일반 문자열에선 줄바꿈이 허용되지 않는다. -> 이스케이프 시퀀스 사용

## 6.3 템플릿 리터럴

- ES6부터 도입
- 멀티라인 문자열, 표현식 삽입, 태그드 템플릿등 편리한 문자열 처리 기능 제공
- 템플릿 리터럴은 런타임에 일반 문자열로 변환되어 처리

## 6.4 불리언 타입

- 참true 거짓false
- 조건문에서 자주 사용

## 6.5 undefined 타입

- 개발자가 의도적으로 할당하기 위한 값이 아니라 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값
- 초기화되지 않은 변수라는 것을 알 수 있다.
- 개발자가 의도적으로 변수에 값이 없다는 것을 명시하고 싶을 땐 null을 사용

## 6.6 null 타입

- 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
- 함수가 유효한 값을 반환할 수 없는 경우도 명시적으로 null을 반환

🚀 02.js 참고

## 6.7 심벌 타입

- ES6에서 추가된 7번째 타입
- 변경 불가능한 원시 타입
- 다른 값과 중복되지 않는 유일무이한 값
- 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용
- 심벌은 Symbol 함수를 호출해 생성
- 외부에 노출되지 않는다.

🚀 03.js 참고

## 6.8 객체 타입

- 원시타입과 근본적으로 다르다.
- 자바스크립트를 이루고 있는 거의 모든 것은 객체

## 6.9 데이터 타입의 필요성

- 값을 저장할 때 확보해야하는 메모리 공간의 크기를 결정하기 위해
- 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

## 6.10 동적 타이핑

- 자바스크립트에서 변수는 타입을 갖지 않는다.
- 값은 타입을 갖는다.

### 6.10.1 [동적 타입 언어와 정적 타입 언어]

#### 정적 타입언어

- 변수의 타입을 변경할 수 없다.
- 변수에 선언한 타입에 맞는 값만 할당
- 컴파일 시점에 타입 체크(선언한 데이터 타입에 맞는 값을 할당했는지 검사 처리)를 수행
- 타입 체크가 통과하지 못했다면 에러를 발생시키고 프로그램 실행을 막는다.
- 타입의 일관성 강제 -> 안정적인 코드 구현 -> 런타임 에러 감소
- C, C++, 자바, 코틀린, 고, 하스켈, 러스트, 스칼라...

#### 동적 타입 언어

- 변수를 선언할 때 타입을 선언하지 않는다.
- 어떤 데이터 타입의 값도 자유롭게 할당 가능
- 값을 할당하는 시점(할당)에 변수의 타입이 동적으로 결정(타입 추론)
- 변수의 타입을 언제든지 자유롭게 변경 가능
- 자바스크립트, 파이썬, PHP, 루비, 리스프, 펄...

### 6.10.2 [동적 타입 언어와 변수]

- 편리하지만 위험하다.
- 복잡한 프로그램에서는 변화하는 변수 값을 추적하기 어렵다.
- 값의 변경에 의해 타입도 언제든지 변경 될 수다 -> 값을 확인하기 전에는 타입을 확신할 수 없다.
- 잘못된 예측은 오류로 연결
- 동적 타입 언어는 유연성은 높지만 신뢰성은 떨어진다.

- 변수를 사용할 때 주의할점
  - 변수는 꼭 필요한 경우에 한해 제한적으로 사용. 변수의 개수가 많을 수록 오류 확률도 상승.
  - 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용 억제.
  - 전역 변수는 최대한 사용하지 않는다. 전역 변수는 프로그램의 복잡성 증가, 처리 흐름 추적을 어렵게 만들고 오류의 원인을 특정하기 어렵게 만든다.
  - 변수보단 상수를 사용
  - 변수의 목적이나 의미를 파악하도록 네이밍

=> 사람이 이해할 수 있는 코드. 즉 가독성이 좋은 코드가 좋은 코드다.
