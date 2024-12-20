// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.

[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스${index}, this: ${JSON.stringify(arr)}`);
});
// 요소값: 1, 인덱스0, this: [1,2,3]
// 요소값: 2, 인덱스1, this: [1,2,3]
// 요소값: 3, 인덱스2, this: [1,2,3]
