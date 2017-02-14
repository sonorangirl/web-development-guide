//* --------------- Practice --------------- *//
//fine
setTimeout( function() {
	//do something
}, 1000);

//better
setTimeout( function timeoutHandler() {
	//do something
}, 1000);

//Block Scope
if (true) {
	var a = 2;
	let b = 3;
	console.log(a + b); //5
}
console.log(a); //2 - var is not block scoped, so it can be accessed
console.log(b); //ReferenceError - let is block scoped, so it can't be referenced outside the if block

// this holds true for the const as well,
// it will be block scoped, therfore not able to be referencd outside the block scope it's in

//* --------------- Notes --------------- *//
//Function Scope vs Block Scope

//Function scope encourages the idea that variables
//belong to a function that can be reused throughout the scope, including nested scopes, but not without

//Hiding variables - "Principle of Least Privilege" or "Least Authority" or "Least Exposure"
//basically you should only expose what is minimally necessary for outside use, hide everything else

//This also helps with collision avoidance, collisions occur when you have two identifiers of the same name
//they probably have different intended uses, but with the same name, it's possible for one to overwrite the other
//when using function scope, the variable becomes hidden from the outside scope, therefore avoiding
//collisions with other identically named variables

//This helps to avoid global namepsace collisions as well when using multiple libraries which might contain
//variables of the same name

//Anonymous functions and IFFE's ar also used to hide variables and code, but it's good practice to name all
//your functions, even if their used right away and not referenced again, for the sake of readability and refactoring


//Block Scope
//before ES6 the only block scope used in JS were try/catch blocks

//with the new keywords let and const, variables declared with these are scoped to whatever block they were declared in

//var should still be used along with the new keywords, and each should be chosen whenever appropriate for the situation

//you can create block scope with anything that has uses a set of curly braces, even just using curly braces themselves
{
	let e = 42; // because of the new let keyword, this variable is scoped to this block
}
console.log(e); //ReferenceError

