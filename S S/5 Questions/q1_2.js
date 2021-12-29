
// This are examples for function expression -> we are storing the function address in the variable.

var fun = function(){
    gun();
}

console.log(fun); // [Function: fun] -> address will be printed
console.log(gun); // undefined;
fun();

var gun = function(){
    console.log("I am Inside gun");
}

// Error ->
// fun is defined, but gun is undefined. It will throw an error -> "gun is not a function"
