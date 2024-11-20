const arr = [];

console.time("Array Performance Test");

for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}

console.timeEnd("Array Performance Test");
// 124.711ms

const obj = {};

console.time("Object Performance Test");

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd("Object Performance Test");
// 157.628ms
