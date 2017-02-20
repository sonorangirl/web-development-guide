//* --------------- Practice --------------- *//
function determineThis() {
	console.log(this.x);
}

var x = "firstX";
var x2 = { x: "secondX", determineThis: determineThis };
var x3 = { x: "thirdX" };

determineThis(); // 'firstX' --> default binding - global variable (would be 'undefined' if in strict mode)
	// --> console.log(global.x);
x2.determineThis(); // 'secondX' --> implicit binding, determinThis is being called in the context of x2 obj
	// --> console.log(x2.x);
determineThis.call(x3); // 'thirdX' --> explicit binding, determineThis is being bound to the x3 obj
	// --> console.log(x3.x);

//Hard Binding
function hardBind() {
	console.log(this.z);
}

var z1 = { z: "z1 bound" };
var z2 = { z: "z2 bound" };

var orig = hardBind; //create a copy
hardBind = function() {//overwrite old function, while maintaining copy in orig
	orig.call(z1); //always bind z1 when hardBind is called
}

hardBind(); // 'z1 bound'
hardBind.call(z2); //'z1 bound' - will always hard bind 'this' to refer to z1 obj

//Hard bind - using .bind utility
function hardBind2(f,g) {
	console.log(this.e + " " + f + " " + g);
}

var myObj = { e: "Red" };
hardBind2 = hardBind2.bind(myObj, "Green"); //hard binds 'this' to always refer to myObj when hardBind2 is called

hardBind2("Blue"); //"Red Green Blue"



//* --------------- Notes --------------- *//

//What the this keyword does not do:
	//the this keyword does not refer to the function itself
	//the this keyword does not refer to the functions lexical scope
	//the this keyword has nothing to do with where the function was declared

//The this keyword instead has everything to do with where the function was called
//It's actually a binding that is made when a function is invoked,
//and what it references is determined entirely by the call-site where the function is called.

//Call stack and call-site
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope
    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}
function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`
    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}
function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`
    console.log( "foo" );
}
baz(); // <-- call-site for `baz`
//foo bar baz

//The only thing that matters to the 'this' keyword is the call-site
//And you use the call stack to determine the call site

//Tip - use the degubber in the developer console to see the call stack and determine the call site for 'this'

//Rules for how the call site determines what 'this' references
	//1. Default Binding - most common - stand alone function invocation
	//However, if in 'strict mode', default binding is not eligible, therefore this will become 'undefined'
	function foo() { //<-- call stack is 'foo', so call site is global
		console.log( this.a );
	}
	var a = 2; //global variable a
	foo(); // 2, because the global context is used for 'this' (while not in strict mode)


	//2. Implicit Binding - does the call site have a context object, or an owning or containing object at call-time?
	function foo() {
		console.log( this.a );
	}
	var obj = {
		a: 2,
		foo: foo //foo is added as a reference on the object, therefore the object contains it at when it's called
	};
	obj.foo(); // 2, because the obj is the 'this' for the foo call

	//However, only the top/last level of an object property reference chain matters to the call-site
	function foo() {
		console.log( this.a );
	}
	var obj2 = {
		a: 42,
		foo: foo //foo is added as a reference
	};
	var obj1 = {
		a: 2,
		obj2: obj2 //obj2 is added as a reference, but foo is still contained within obj2
	};
	obj1.obj2.foo(); // 42

	//3. Explicit Binding - directly state what you want this to be
	function foo() {
		console.log( this.a );
	}
	var obj = {
		a: 2
	};
	foo.call( obj ); // 2 - .call makes this directly reference the obj

	//Hard binding - bind(..) returns a new function that is hard-coded to call the original function
	//with the 'this' context set as you specified.
	function foo(something) {
		console.log( this.a, something );
		return this.a + something;
	}
	var obj = {
		a: 2
	};
	var bar = foo.bind( obj ); //hard binds 'this' to obj
	var b = bar( 3 ); // 2 3
	console.log( b ); // 5

	//4. 'new' Binding - constructor call that creates a new object that binds 'this' to it
	function foo(a) {
		this.a = a;
	}
	var bar = new foo( 2 ); //creates a new object w/ 'this' bound to foo
	console.log( bar.a ); // 2

	//Order of precedence when determining 'this' from the call-site
		//1. Is the function called with 'new'?
			//--> 'this' is the newly created obj
		//2. Is the function called with explicit binding? (call, apply, bind)
			//--> 'this' is the explicitly bound obj
		//3. Is the function called with implicit binding? (an owning or containing obj)
			//--> 'this' is that context obj
		//4. Otherwise if none of the are true
			//--> 'this' is the default binding (global obj) or 'undefined' if in 'strict mode'

//Arrow functions
//they adopt the 'this' binding from the enclosing or global scope, and don't follow the 4 precedence rules
//The lexical binding of an arrow-function cannot be overridden (even with new!).
function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}
var obj1 = {
	a: 2
};
var obj2 = {
	a: 3
};
var bar = foo.call( obj1 ); //lexically bound to obj1 here
bar.call( obj2 ); // 2, not 3!

//since the arrow function 'cheats' and lexically binds 'this', it shouldn't be used when coding blocks using 'this' style code








