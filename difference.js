/**
 * let v. var
 */
// 1. What would happen?
if (true) {
  var i = 0
}
console.log(i)

if (true) {
  let j = 0
}
console.log(j)

// 2. What would happen?
console.log(x);
var x=5;
console.log(x);

console.log(x);
let x=5;
console.log(x);

// 3. What does it print? How to improve?
let number;
for (let i = 0; i<5; i++) {
    number = i;
    setTimeout(function(){
        console.log(n)
    }, 1000);
}

// 4. What would be printed out?
let x;
for (var i = 0; i < 3; i++) {
  if (i == 0) {
    x = () => console.log(i)
  }
}
x();

/**
 * Class Expressions v. Class Declarations
 */
// In "Class Expressions", the class object NamedFoo is being assigned to a variable named Foo.
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}

// In "Class Declarations", the class object NamedFoo is being declared solely by itself.
class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}

// What will happen?
x()
function x(){
    console.log('x')
}

y()
const y = function yFunc(){
    console.log('y')
}

// The following are the same as above
// const y = function (){
//     console.log('y')
// }
// const y = () => {
//     console.log('y')
// }
