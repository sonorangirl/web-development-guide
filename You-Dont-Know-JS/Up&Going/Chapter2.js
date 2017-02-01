//* --------------- Practice --------------- *//

//* --------------- Notes --------------- *//

////*Built-In Type Methods*////
//primitive types have methods associated with them, through "boxing" the value to its object wrapper counterpart
//Ex strings are primitive types, String (cap S) is it's object wrapper counterpart
//this counterpart comes with built in methods for the String object
//thus when decaring a variable, whatever type it is will automatically have the wrapper counterpart's methods made available to it
let stringLength = "This is a string".length;	//15


////*Equality*////
//The difference between == and === is usually characterized that == checks for value equality
//and === checks for both value and type equality. However, this is inaccurate.
//The proper way to characterize them is that == checks for value equality with coercion allowed,
//and === checks for value equality without allowing coercion; === is often called "strict equality" for this reason.

let a = 1;
let b = "1";

a == b; //true - checks equality allowing implicit coersion
a === b; //false - checks eqaulity without implicit coersion

//Arrays do not work the same in comparisons, [1,2,3] == [1,2,3] will be false as they are compared by reference, not their values
//think like pointers


////*Variable Scope*////
//Hoisting is when a var declaration is conceptually "moved" to the top of its enclosing scope
//It's hoisted to the top of the global scope if decalred outside a block

//Nested Scopes - When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes
function foo() {
	var a = 1; //available to foo and bar, but not global
	function bar() {
		var b = 2; //available only to bar
		console.log( a, b );		// 1 2
	}
	bar();
	console.log( a );				// 1
	c = 3; //accidentally creates a global variable because the variable was never declared, or an error in strict mode
}
foo();
//If you try to access a variable's value in a scope where it's not available, you'll get a ReferenceError thrown

//The new let in ES6 scopes the variable to the block they are in so
if (true) {
	let d = 5; //This is scoped to the if block, where var would only be scoped to it's function block
}


////*Closures*////
//You can think of closure as a way to "remember" and continue to access
//a function's scope (its variables) even once the function has finished running.

//outer function
function makeMultiples(x) {
	//inner function
	function multiply(y) {
		return x * y; //makes closure around x parameter to remember what the supplied parameter is
	}
	return multiply;
}
let double = makeMultiples(2); //outer function done, but inner function now remembers 2 as the parameter supplied
let eightDoubled = double(8); // 16 - the inner function remembered 2, then used it in it's function to multiply by it's supplied parameter



////*Modules*////
//Modules let you define private implementation details (variables, functions) that are hidden from the outside world,
//as well as a public API that is accessible from the outside.

function User(){
	var username, password;
	//The inner doLogin() function has a closure over username and password,
	//meaning it will retain its access to them even after the User() function finishes running.
	function doLogin(user,pw) {
		username = user;
		password = pw;
		// do the rest of the login work
	}
	var publicAPI = {
		login: doLogin
	};
	//When we return publicAPI from User(), it becomes the new instance of User, stored in fred
	return publicAPI;
}
// create a `User` module instance
var fred = User(); //Executing User() creates an instance of the User module -- a whole new scope is created,
//and thus a whole new copy of each of these inner variables/functions
fred.login( "fred", "12Battery34!" );



////*Prototypes*////
//When you reference a property on an object, if that property doesn't exist,
//JavaScript will automatically use that object's internal prototype reference to find another object
//to look for the property on. You could think of this almost as a fallback if the property is missing.
















