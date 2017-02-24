//* --------------- Practice --------------- *//


//* --------------- Notes --------------- *//

// Objects come in two forms
	// declarative
	// this form can add multiple values at a time
	var obj1 = { a: 1, b: 2 };

	// constructed
	// must add values 1 at a time
	var obj2 = new Object();
	obj2.a = 1;
	obj2.b = 2;

// Both functions and arrays are a form of objects w/ extra behavior

// Not everything in JS is an object, objects are one of 6 primitive types:
	// string, number, boolean, null, undefined, object

// But there are several types of Built-in Objects:
	// String, Number, Boolean, Object, Function, Array, Date, RegExp, Error

// primitve types can be coerced into their built-in object forms when a method
// of the built-in type is called on them such as .length

// null and undefined are the exceptions to this as they have no object wrapper
// form, only their primitive values

// Date object values can only be created by a constructor function, as they don't
// have a primitive value counterpart

// With ES6 you can use computed property names for objects, using []:
	var prefix = "column";
	var obj3 = {
		[prefix + "-1"]: "first",
		[prefix + "-2"]: "second"
	};

	obj3["column-1"]; // 'first'
	obj3["column-2"]; // 'second'

// Also, with ES6, copying Objects becomes much easier with Object.assign
	// takes a target object as 1st parameter
	// then 1 or more source objects as it's next parameters
	// it will copy all enumerable properties to the new target parameter
	// when making a copy using Object.assign, it's special properties, if assigned, aren't preserved

// Property Descriptors, added in ES5, allow properties to be described in terms of:
	// it's value
	// whether its writable (boolean)
	// whether its enumerable (boolean)
	// and whether its configurable (boolean)

// Immutability - when you want to make an object that cannot be changed, either accidentally ot intentionally
	var yourObject = {};
	// Make an Object Constant - change writable and configurable to false
	Object.defineProperty( yourObject, "FAVORITE_NUMBER", {
		value: 42,
		writable: false,
		configurable: false
	} );
	// Prevent extentions - to prevent other properties from being added to an object
	Object.preventExtentions(yourObject);
	// Seal - takes an existing object, calls Object.preventExtensions(..) on it,
	// and marks all existing properties as configurable:false
	Object.seal(yourObject);
	// Freeze - the highest level of immutability - basically calls Object.seal,
	// and then marks all existing properties as writable:false
	Object.freeze(yourObject);


//	[[Get]]
	// inspects the object for a property of the requested name, if it doesn't find it, it returns undefined
//	[[Put]]
	// when assiginging, after checking if property already exists, it will:
		// call setter, if the property is an accessor descriptor
		// fail silently, if the property has a writable:false descriptor, or throw an error in 'strict mode'
		// set the value as normal
	//if property didn't exist:
		// it will traverse the protoype chain (see Prototypes)

// Getters and Setters
	// Getters are properties which actually call a hidden function to retrieve a value.
	// Setters are properties which actually call a hidden function to set a value.

// Existence - ask an object if it has a property, without accessing its value
	yourObject.hasOwnProperty("a"); // will check if that specific object has the property 'a'
	("a" in yourObject); // will check the entire prototype chain for the property

// Enumeration
	// for..in loops traverse all the enumerable properties of an object
		var myObject = { d: 3 };
		for (var k in myObject) {
			console.log( k, myObject[k] ); // 'd', 3
		}
	// for..in loops should not be used with arrays, only on objects

	// to get an array of all the enumerable properties of an object:
	Object.keys( myObject ); // ["d"]

	// to get all the properties of an object whether enumerable or not:
	Object.getOwnPropertyNames( myObject ); // ["d"]


// Iteration
	// the for..in loop iterates over properties of objects

	// Arrays
		// use a for loop to iterate indecies, and then access their values
		// use array.forEach()
			// this iterates over all values in the array, and ignores any callback return values
		// use array.every()
			// this iterates over the values and keeps going until the end
			// or the callback returns a false (or "falsy") value
		// use array.some()
			// this iterates over the values and keeps going until the end
			// or the callback returns a true(or "truthy") value
		// the special return values inside .every() and .some() act like a break; statement in a for loop

	// Iterating over values directly
		// ES6 added the for..of loop to iterate over array or object values directly
		var myArray = [ 1, 2, 3 ];
		for (var v of myArray) {
			console.log( v ); // 1 2 3
		}









