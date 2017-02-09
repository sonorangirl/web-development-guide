//* --------------- Practice --------------- *//
//hoisting functions
foo(); // TypeError because the variable is set to undefined after being hoisted
bar(); // ReferenceError because the variable was not hoisted, as its a function expression

var foo = function bar() {
	// ...
};

//* --------------- Notes --------------- *//

//Hoisting

//The JS compiler will find all the variables to define their scope, but will not execute code
//so variables are hoisted to the top before the code executes, but their assignments don't occur until
//the program runs

var a = 2; //var a; will be hoisted and set to undefined, then at execution it will be assigned the value of 2

//Function declarations are hoisted, but function expressions are not.

foo(); // not ReferenceError, but TypeError! because foo is not yet a function, but a variable with an undefined value

var foo = function bar() {
	// ...
};

//Functions are hoisted first, then variables second

