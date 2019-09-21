class Calculate {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const CalculateOpject = new Calculate();
const calmultiply = new Calculate();
console.log(Calculate.sum(1, 2));
console.log(CalculateOpject.sum2(2, 3));
console.log(calmultiply.multiply(10, 20));
