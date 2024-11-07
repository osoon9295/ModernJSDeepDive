function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

add(2, 5);

console.log(x, y); // ReferenceError: x is not defined
