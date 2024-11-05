// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
// {get:f,set:f, enumerable:false,configurable:true}

Object.getOwnPropertyDescriptor(function () {}, "prototype");
// {value:{...}, writable:true, enumerable:false, configurable:false}
