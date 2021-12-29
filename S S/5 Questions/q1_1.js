
// This are examples for function expression -> we are storing the function address in the variable.

console.log(fun) //undefined
fun();

var fun = function(){
    gun();
}

var gun = function(){
    console.log("I am Inside gun");
}

// Error ->
// as fun is undefined. It will throw an error -> "fun is not a function"
