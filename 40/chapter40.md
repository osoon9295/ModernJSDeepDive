### 마우스 이벤트

- click : 마우스 버튼을 클릭했을 때
- ablclick : 마우스 버튼을 더블 클릭했을 때
- mousedown: 마우스 버튼을 눌렀을 때
- mouseup : 누르고 있던 마우스 버튼을 놓았을 때
- mousemove : 마우스 커서를 움직였을 때
- mouseenter : 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링 되지 않음)
- mouseover : 마우스 커서를 HTML 요소 안으로 이동했을 때 (버블링 됨)
- mouseleave : 마우스 커서를 HTML 요소 밖으로 이동했을 때 (버블링 되지 않음)
- mouseout : 마우스 커서를 HTML 요소 밖으로 이동했을 때
  (버블링된다)

### 키보드 이벤트

- keydown : 모든 키를 눌렀을 때 발생
  - control,option,shift,tab,delete,enter,방향 키와 문자, 숫자, 특수 문자 키를 눌렀을 때 발생.
  - 문자, 숫자, 특수 문자, enter 키를 눌렀을 때는 연속적으로 발생하지만 그 외의 키를 눌렀을 때는 한 번만 발생
- keypress : 문자 키를 눌렀을 때 연속적으로 발생
  - control,option,shift,tab,delete, 방향 키 등을 눌렀을 때는 발생하지 않는다.
  - 문자, 숫자, 특수 문자, enter 키를 눌렀을 때만 발생
  - 폐지 되었으므로 사용하지 않을 것을 권장
- keyup : 누르고 있던 키를 놓았을 때 한 번만 발생
  - keydown 이벤트와 마찬가지로 control,option,shift,tab,delete,enter,방향 키와 문자, 숫자, 특수 문자 키를 놓았을 때 발생

### 포커스 이벤트

- focus : HTML 요소가 포커스를 받았을 때 (버블링되지 않음)
- blur : HTML 요소가 포커스를 잃었을 때 (버블링되지 않음)
- focusin : HTML 요소가 포커스를 받았을 때 (버블링됨)
- focusout : HTML 요소가 포커스를 잃었을 때 (버블링됨)

### 폼 이벤트

- submit
  1. form 요소 내의 input(text,checkbox,radio), select 입력 필드(textarea제외)에서 엔터키를 눌렀을 때
  2. form 요소 내의 submit 버튼(`<button>`,`<input type="submit">`)을 클릭했을 때
     - submit 이벤트는 form 요소에서 발생한다.
- reset : form 요소 내의 reset 버튼을 클릭했을 때 (최근에는 사용 안 함)

### 뷰 이벤트

- resize : 브라우저 윈도우의 크기를 리사이즈할 때 연속적으로 발생
  - 오직 window 객체에서만 발생
- scroll : 웹페이지(document)또는 HTML 요소를 스크롤할 때 연속적으로 발생

### 이벤트 객체의 공통 프로퍼티

- type : 이벤트 타입 (string)
- target : 이벤트를 발생시킨 DOM 요소 (DOM 요소 노드)
- currentTarget : 이벤트 핸들러가 바인딩된 DOM 요소 (DOM 요소 노드)
- eventPhase : 이벤트 전파 단계 (number)
  - 0 : 이벤트 없음
  - 1 : 캡쳐링 단계
  - 2 : 타깃 단계
  - 3 : 버블링 단계
- bubbles : 이벤트를 버블링으로 전파하는지 여부 (boolean)
  - 다음 이벤트는 bubbles : false로 버블링 하지 않음
    - 포커스 이벤트 : focus/blur
    - 리소스 이벤트 : load/unload/abort/error
    - 마우스 이벤트 : mouseenter/mouseleave
- cancelable : preventDefault 메서드 호출하여 이벤트의 기본동작을 취소할 수 있는지 여부 (boolean)
  - 다음 이벤트는 cancelable : false로 취소할 수 없다.
    - 포커스 이벤트 : focus/blur
    - 리소스 이벤트 : load/unload/abort/error
    - 마우스 이벤트 : mouseenter/mouseleave
- defaultPrevented : preventDefault 메서드를 호출하여 이벤트 취소했는지 여부 (boolean)
- isTrusted : 사용자의 행위에 이해 발생한 이벤트인지 여부 (false)
- timeStamp : 이벤트가 발생한 시각 (number)
