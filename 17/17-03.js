const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20
