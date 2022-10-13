/**
 * variable hoisting
 * best explanation:
 * https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 */
// 1. What would happen?
carName = "Volvo";
var carName;

carName = "Volvo";
let carName;

carName = "Volvo";
const carName;


/**
* function hoisting
* questions come from:
* https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8/
*/
// 1. What is printed out?
var a = 1;
function b() {
 a = 10;
 return;
 function a() {};
}
b()
console.log(a)

// and 2.
var myVar = 'foo';
(function(){
    console.log('Original value was: ' + myVar);
    var myVar = 'bar';
    console.log('New value is: ' + myVar);
})();

// 3. What number would be alerted?
function foo(){
 function bar() { // function declaration
     return 3;
 }
 return bar();
 function bar() { 
     return 8;
 }
}

alert(foo());

// and 4.
// See explanation: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#class_hoisting
alert(foo());
function foo() {
    var bar = function() {    return 3;  } // function expression
    return bar();
    var bar = function() {    return 8;  };
}

// 5. What will happen?
function parent() {
 var hoisted = "I'm a variable";
 function hoisted() {
     return "I'm a function";
 }
 return hoisted();
}
console.log(parent());
