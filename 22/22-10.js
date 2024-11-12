var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // foo's this:  { value: 100, foo: [Function: foo] }

    setTimeout(function () {
      console.log("callback's this: ", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 1000);
  },
};

obj.foo();
