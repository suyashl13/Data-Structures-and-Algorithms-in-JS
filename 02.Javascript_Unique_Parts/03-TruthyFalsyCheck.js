console.log("Truthy/Falsey Check");
// ----------------------------------------------------------------------------------
// True/false checking is used in if statements. In many languages, the
// parameter inside the if() function must be a boolean type. However,
// JavaScript (and other dynamically typed languages) is more flexible with
// this. Here’s an example:

let node;
if (node) {
    console.log("I got executed under if block on true condition.")
} else {
    console.log("I got executed under if block on false condition.")
}

// Truthy and falsy values
console.log("Here are commonly used expressions that evaluate to false:");
console.table(['false','0','Empty strings','NaN','undefined','null']);

console.log("Here are commonly used expressions that evaluate to true:")
console.table(['true','Any number other than 0','Non-empty strings','Non-empty object'])

// Here’s an example
if ('') {
    console.log("Truthy")
} else {
    console.log("Falsy")
}
// Output : Falsy because empty string is considered as falsey value.

// == vs ===
// JavaScript is a scripting language, and variables are not assigned a type
// during declaration. Instead, types are interpreted as the code runs.
// Hence, === is used to check equality more strictly than ==. ===
// checks for both the type and the value, while == checks only for the
// value.

console.log("5" == 5) //true
console.log("5" === 5) //false
// "5" == 5 returns true because "5" is coerced to a number before
// the comparison. On the other hand, "5" === 5 returns false because
// the type of "5" is a string, while 5 is a number.


var o1 = {};
var o2 = {};
o1 == o2 // returns false
o1 === o2 // returns false

// Although these objects are equivalent (same properties and values),
// they are not equal. Namely, the variables have different addresses in
// memory.

