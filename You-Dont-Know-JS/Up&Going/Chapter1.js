//* --------------- Practice --------------- *//

//Buy phones and phone accessories, until your money runs out
const spendingThreshold = 500,
	TAX_RATE = 0.08,
	phonePrice = 99,
	accessoryPrice = 7.99;

let accountBalance = 650,
	total = 0,
	numOfPhones = 0,
	numOfAccessories = 0;

//returns total value with tax to purchase item
function purchasePrice( item ) {
	return ( item * TAX_RATE ) + item;
}

//returns the currency formatted value
function formatPrice( amount ) {
	return "$" + amount.toFixed( 2 );
}

//calculates total price for purchase, how many phones and accessories bought
while( purchasePrice( phonePrice ) < ( accountBalance - total ) ) {
	total += purchasePrice( phonePrice );
	numOfPhones++;
	//check if an accessory for phone can be bought
	if ( total < spendingThreshold ) {
		total += purchasePrice( accessoryPrice );
		numOfAccessories++;
	}
}

//get new account balance after purchase
accountBalance -= total;

//Displays total amount purchased, num of phones and accessories purchased, and new balance
console.log(`Total phones bought: ${numOfPhones}\n
Total accessories bought: ${numOfAccessories}\n
Total Spent: ${formatPrice(total)}\n
New Account Balance: ${formatPrice(accountBalance)}`);




//* --------------- Notes --------------- *//

///* Dynamic Typing *///
//variables can hold values of any type without any type enforcement (weak typing).
let amount = 99.99;			//num

amount = amount * 2;		//num

console.log( amount );		// 199.98 - implicit conversion to print to console

// converts `amount` to a string, and
// adds "$" on the beginning
amount = "$" + String( amount );	//now a string - explicit conversion

console.log( amount );		//str  "$199.98"

//Amount holds the running value as it changes throughout the program
//In other words managing the State of the program

//tip - You can preempt issues by using smart coercion with unary + or - operators:
let inputString = +"1";
console.log(inputString); // 1 - a num

//tip - toFixed() will let you specify how many places you want a number rounded to
let money = amount.toFixed(2); //will make amount to 2 places to show as currency "$199.98"

//static typing (type enforcement) - you declare a variable (container) to hold a specific type of value, such as number

///* Constants *///
//constants prevent you from accidentally changing a value later in your program that should remain the same
//Usually declared at the top of a program, they hold values that won't change
const TAX_RATE2 = 0.08;	//8% tax rate


///*Coercion to boolean values*///
//in conditionals, values that aren't explicitly booleans will be implicitly converted to truthy or falsy values
let falsy = [0, "", null, undefined, NaN, false];
let truthy = ["everything else incuding:", {}, [], new Date(), true, "etc"];

if (truthy[val]) {
	console.log("converts to truthy");
} else {
	console.log("converts to falsy");
}




