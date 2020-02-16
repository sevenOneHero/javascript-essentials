// Method Chaining in JavaScript
// Similar to Builder Design pattern

class A {
  constructor(value) {
    this.value = value;
  }

  add(...args) {
    this.value = args.reduce((val, current) => val + current, this.value);
    return this;
  }

  multiply(...args) {
    this.value = args.reduce((val, current) => val * current, this.value);
    return this;
  }
}

var sumit = new A(10).add(1).multiply(2);
console.log(sumit);
