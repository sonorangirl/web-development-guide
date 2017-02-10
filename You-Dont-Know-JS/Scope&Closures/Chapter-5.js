//* --------------- Practice --------------- *//


//* --------------- Notes --------------- *//

//Closures

//technically all inner functions have closure over the lexical scopes they have access to
//if a function has a refernce to an outer scope that reference is called closure
function foo() {
	var a = 2;
	function bar() { //technically has closure over the scope of foo()
		console.log( a ); // 2
	}
	bar();
}
foo();

//in order to observe closure, the function with closure needs to be passed as a value or otherwise transported
//outside of it's lexical scope
function foo() {
	var a = 2;
	function baz() { //has closure over foo()
		console.log( a ); // 2
	}
	bar( baz ); //hoisting lets bar able to called here and passes in the function baz as a value
}
function bar(fn) { //the function is passed as a value
	fn(); // look ma, I saw closure! It retains references to its lexical scope
}

//mainly closure prevents garbage collection from deleting the references a function has to it's lexical scope
//so that it can still access them at a later time, even if its been transported out of it's original lexical scope

//Example how the inner functions closure retains reference for later use
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i ); //prints 6 6 6 6 6
	}, i*1000 );
}
//6 is the final value of i after the loop terminates
//because var i has been set to 6 before the timer function is invoked later,
//it will always print the last value it referenced
//We are trying to imply that each iteration of the loop "captures" its own copy of i,
//But the way scope works, all 5 of those functions,
//though they are defined separately in each loop iteration,
//all are closed over the same shared global scope, which has, in fact, only one i in it.

//fixed
for (var i=1; i<=5; i++) {
	(function(j){ //allows a new scope with it's own variable to reference to be created
		setTimeout( function timer(){
			console.log( j ); //1 2 3 4 5 referencing the new variable
		}, j*1000 );
	})( i ); //passes in the current value of i within the loop to be used as the new variable
}

//Using the new let keyword to create block scope
for (var i=1; i<=5; i++) {
	let j = i; // yay, block-scope for closure!
	setTimeout( function timer(){
		console.log( j ); //1 2 3 4 5
	}, j*1000 );
}
//let turns i into a per-iteration block scope, or it turns a block into a scope that we can close over.

//even better because of new ES6 for loop rules
for (let i = 1; i <=5; i++) {
	setTimeout( function timer(){
		console.log( i ); //1 2 3 4 5
	}, i*1000 );
}
//When let is used in the head of a for loop, the variable will be declared not just once for the loop, but each iteration.

//Modules
//JS modules have 2 characteristics
	//They must have an outer wrapping function that gets executed
	//And they must return 1 or more inner functions that have a closure over the inner private scope

//when declaring modules common practice is to capitalize the first letter - > MyModule() vs myModule()

//when the outer function is invoked a module instance is created

//most common pattern is the 'Revealing Pattern'
//an object is returned with references to the inner functions, but not to the inner data variables
//you can think of the returned object as the public API for the module
function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];
	function doSomething() {
		console.log( something );
	}
	function doAnother() {
		console.log( another.join( " ! " ) );
	}
	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//returning an object isn't necessary to create a module though, just a common practice
//There are only two requirements
	//the outer function to be invoked at least once (and thus create the module instance)
	//and for 1 or more functions to be returned that have closure over the inner scope, which can access
	//or modify the inner state

//You can create multiple module instances by invoking the outer function and assigning it to multiple variables
//If you only want one instance you can also wrap a module in an IIFE and invoke it immediately
var foo = (function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];
	function doSomething() {
		console.log( something );
	}
	function doAnother() {
		console.log( another.join( " ! " ) );
	}
	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
})();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//Also since modules are just functions, you can pass them parameters
function CoolModule(id) {
	function identify() {
		console.log( id );
	}
	return {
		identify: identify
	};
}
var foo1 = CoolModule( "foo 1" );
var foo2 = CoolModule( "foo 2" );
foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"

//By retaining an inner reference to the object
//inside your module instance, you can modify that module instance from the inside,
//add and remove methods, properties, and change their values.

//ES6 modules are static, the API dosen't change at run time
//they also must be defined in seperate files, 1 module per file

//Operators
//import - imports 1 or more members from a modules API into current scope
//module - imports an entire module API
//export - exports an identifier to the public API for the current module
//These operators can be used as many times as necessary

//The contents of a module file are treated as if enclosed in scope closure








