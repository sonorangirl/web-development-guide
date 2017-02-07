//* --------------- Practice --------------- *//
//Find all RHS and LHS lookups:
function foo(a) { // (3) a -> LHS
	var b = a; // (4) b -> LHS,  (5) a -> RHS
	return a + b; // (6) a -> RHS, (7) b -> RHS
}
var c = foo(2); // (1) c -> LHS, (2) foo -> RHS

//LHS lookups - 3
//RHS lookups - 4

//* --------------- Notes --------------- *//

//the ability to store values and pull values out of variables is what gives a program state.

//Javascript is categorized as an interpreted language, but it's actually a compiled language,
//it just compiles right before executing.

//Traditional languages go through 3 steps
var x = 2;
//1. Tokenizing/Lexing - creates tokens from input
// --> var, x, =, 2, ;
//2. Parsing - turns tokens into a AST - Abstract Syntax Tree
//3. Code Generation - Uses tree to make executable code

//In Javascript, you have the Javascript engine, the compiler, and scope
//The compiler declares variables, the engine look up variables in scope, and if found then performs the work.

var y = x;
//Left hand side lookup - LHS - finding the variable container itself
// --> found y
//Right hand side loopup - RHS - finding the value of a variable and retreiving it
// --> found x it's value is 2

//If RHS look up fails, it results in a ReferenceError.
//If LHS look up fails it will create a new global variable, if not in strict mode
//If in strict mode, upon LHS failure, it will result in a ReferenceError

//If the variable if found but the work trying to be performed on that variable is impossible,
//it results in a TypeError
y(); //y is not a function