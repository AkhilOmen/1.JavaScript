
// This are examples for function expression -> we are storing the function address in the variable.

var fun = function(){
    gun();
}

var gun = function(){
    console.log("I am Inside gun.");
}

console.log(fun); // [Function: fun] -> address will be printed
console.log(gun); // [Function: gun] -> gun address.
fun();

// Output
// I am Inside gun.