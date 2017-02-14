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
//function expressions cannot be called before they are 'declared' during runtime, but because of hoisting,
//function declarations can.

//In C header files are used to declare code you will be using later in the program,
//JS does it automatically through hoisting

//Because let and const aren't hoisted, you need to declare them at the top of each block you are using them in
if (true) {
	console.log(f); //ReferenceError, f hasn't been declared yet
	console.log(g); //undefined, g was hoisted because of the var keyword, but hasn't recieved an assignment yet
	let f = 9;
	var g = 7;
}
//this is known as the temporal dead zone

