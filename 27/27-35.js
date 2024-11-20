const arr = [0];

arr[100] = 100;

console.log(arr); // [ 0, <99 empty items>, 100 ]
console.log(arr.length); // 101
