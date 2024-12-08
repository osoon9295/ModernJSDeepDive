### HTML 요소

```html
<div class="greeting">Hello</div>
```

- `<div>` : 시작 태그
- `class` : 어트리뷰트 이름
- `"greeting"` : 어트리뷰트 값
- `Hello` : 콘텐츠
- `</div>` : 종료 태그
  => div 요소 노드 아래 "Hello" 텍스트 노드

### 노드 종류

총 12개의 노드 타입이 존재

- 문서 노드

  - document 객체
  - 브라우저가 렌더링한 HTML 문서 전체
  - DOM 트리의 루트 노드
  - DOM 트리의 노드들에 접근하기 위한 진입점 역할

- 요소 노드

  - HTML 요소를 가리키는 객체
  - 부자 관계를 통해 정보를 구조화

- 어트리뷰트 노드

  - HTML 요소의 어트리뷰트를 가리키는 객체
  - 부모 노드와 연결되어 있지 않고 요소 노드에만 연결
  - 부모 노드가 없으므로 요소 노드의 형제 노드는 아님

- 텍스트 노드
  - HTML 요소의 텍스트를 가리키는 객체
  - 문서의 정보를 표현
  - 요소 노드의 자식 노드
  - 리프 노드 (더이상 자식 노드를 가질 수 없는 노드)
  - DOM 트리 최종단

### css 선택자와 id 선택자

- querySeletor, querySelectorAll 메서드는 getElementById, getElementsBy... 메서드보다 다소 느리지만 좀 더 구체적인 조건으로 요소 노드를 취득하능하고 일관된 방식으로 요소 노드를 취득할 수 있다는 장점이 있다.
  =>
- id 어트리뷰트가 있는 요소 노드를 취득하는 경우 -> getElementsById
- 그 외의 경우 -> querySelector, querySelectorAll

## 문제

innerText 프로퍼티를 사용하면 안되는 이유?

- css에 순종적이다. (visibility:hidden 인경우 지정된 요소 노드의 텍스트를 반환하지 않는다.)
- css를 고려해야하므로 textContent 프로퍼티보다 느리다.
