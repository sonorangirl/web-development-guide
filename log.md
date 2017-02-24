# My Progress

## YDKJS - this & Object Prototypes
### Ch 2 - this All Makes Sense Now
**What I've Learned**:
* What 'this' references is determined by finding the call-site and then asking
	1. Was it called with the 'new' keyword? -> It refers to the newly created object
	2. Was it called with explicit binding? -> It refers to the bound object
	3. Was there implicit binding? -> It refers to the owning or containing object
	4. If none of these apply it has default binding to the global object, or it's 'undefined' if in 'strict mode'
* Arrow functions are an exception to this, 'this' instead refers to the functions lexical scope

**Link(s) to work**:

### Ch 1 - this or that
**What I've Learned**:
* this - doesn't refer to it's containing functions self
* this - doesn't refer to it's containg functions lexical scope
* this - doesn't have anything to do with where it was declared
* this - has everything to do with where it was called

**Link(s) to work**:

## Learn HTML & CSS - Shay Howe Course
### lesson 7
**What I've Learned**:
* Review of gradients and background images
* **background-clip**: specifies the surface area a background image will cover
* **background-origin**: specifies where the background-position should originate
* Can use **border-box**, **padding-box**, and **content-box** as values for these properties

**Link(s) to work**:
* [styles-conference project](https://github.com/sonorangirl/web-development-guide/tree/master/LearnHTML%26CSS/styles-conference)

### lesson 6
**What I've Learned**:
* a typeface is what we see, fonts are the file that contains the typeface
* font-variant allows text to be set in small-caps
* `<cite>` Used to reference a creative work, author, or resource
* `<q>` Used for short, inline quotations
* `<blockquote>` Used for longer external quotations
* cite can be used as an attribute in quotes

**Link(s) to work**:
* [styles-conference project](https://github.com/sonorangirl/web-development-guide/tree/master/LearnHTML%26CSS/styles-conference)

### lesson 5
**What I've Learned**:
* Practice with floats and clearfixes
* Using html comments to get rid of spaces between in-line elements
* I'm very glad that I can use flexbox instead of having to figure floats and clear fixes out all the time, it's so much easier

**Link(s) to work**:
* [styles-conference project](https://github.com/sonorangirl/web-development-guide/tree/master/LearnHTML%26CSS/styles-conference)

### lesson 4
**What I've Learned**:
* Review of the box model
* There's a box-sizing option called padding-box, that I'll likely never use...

**Link(s) to work**:
* [styles-conference project](https://github.com/sonorangirl/web-development-guide/tree/master/LearnHTML%26CSS/styles-conference)

### lesson 3
**What I've Learned**:
* Spaces in CSS selectors create more or less specificity when used or ommitted
* It's best practice not to join type selectors with class selectors, instead specifying all elements with the class specified instead of just the type with the class selected so .mustard not p.mustard
* Specificity weights are what determines precedence in the cascade

**Link(s) to work**:

### lesson 2
**What I've Learned**:
* There's a semantic difference between `<strong></strong>` and `<b></b>` as well as between `<em></em>` and `<i></i>`
* Prompted me to look up more of the semantic html elements that I haven't really used yet.

**Link(s) to work**:
* [styles-conference project](https://github.com/sonorangirl/web-development-guide/tree/master/LearnHTML%26CSS/styles-conference)

### lesson 1
**What I've Learned**:
* Just review of basic html and css structure

**Link(s) to work**:


## YDKJS - Scope and Closures
### Ch 5 - Scope Closures
**What I've Learned**:
* Technically all inner functions have closure over the outer scope they have access to
* To observe closure, a function must be transported outside of its lexical scope, while retaining references to it's original lexical scope
* Modules must have an outer wrapping function that gets invoked, which creates a module instance, and they also must return 1 or more inner functions that have closure over the inner private scope
* ES6 modules must be defined in seperate files, 1 module per file
* The contents of each file are trated as if they are enclosed in scope closure

**Link(s) to work**:
* [exercise 2 from Kyle Simspson lecture on YDKJS](https://github.com/sonorangirl/web-development-guide/tree/master/You-Dont-Know-JS/Scope%26Closures/exercise-2)

### Ch 4 - Hoisting
**What I've Learned**:
* Hoisting occurs because the JS compiler sees statements in seperate parts, the variable declaration, and the assignment
* The declaration gets hoisted to determine scope for the JS engine, then the engine does assignment later
* Function declarations are hoisted before variable declarations
* Function declarations are hoisted, but function expressions are not

**Link(s) to work**:
* [exercise 1 from Kyle Simspson lecture on YDKJS](https://github.com/sonorangirl/web-development-guide/tree/master/You-Dont-Know-JS/Scope%26Closures/exercise-1)

### Ch 3 - Function vs Block Scope
**What I've Learned**:
* Function scope encourages the idea of hiding variables/code from the outer scope
* *"Principle of Least Privilege"* - only expose what is minimally necessary, hide everything else
* This also helps with collision avoidance (overwriting an identically named variable) and with global namespace issues
* IFFE's and inline function expressions also help to keep code hidden from outer scope
* Naming anonymous functions and IFFE's can help readabiltity
* Block Scope previously was only found in try/catch blocks in JS
* With the new **let** and **const** keywords, the variables declared by them are now block scoped
* These shouldn't replace the **var** keyword, but should be used alongside it, choosing function scope or block scope when appropriate

**Link(s) to work**:

### Ch 2 - Lexical Scope
**What I've Learned**:
* Lexical scope stops at the first match, so 'shadowing' is when you use the same identifier name at multiple layers of nested scope, the inner identifier shadows the outer one.
* Don't use the cheat methods for lexical scope, eval() and with()

**Link(s) to work**:

### Ch 1 - What is Scope
**What I've Learned**:
* That javascript is a compiled language, just that it doesn't compile ahead of time,
instead it compiles right before the code is executed.s
* Left hand side lookup - LHS - finding the variable container itself
* Right hand side loopup - RHS - finding the value of a variable and retreiving it

**Link(s) to work**:
* Nada

## YDKJS - Up and Going
**What I've Learned**:
* Mainly going over the basics, but there are some interesting little tips that are cool
* Smart coercion, adding a + or - in front of a string/variable to convert it to a number
* Implicit conversion in conditionals, using truthy or falsy values

**Link(s) to work**:
* None really