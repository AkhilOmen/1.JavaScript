


function fun(){ // This is function declaration.
    gun();
}

console.log(fun); // [Function: fun] -> address will be printed
console.log(gun); // undefined.  
fun();

var gun = function(){ // This is function expression.
    console.log("I am Inside gun");
}

// Error
// gun is not a function, b/c gun is undefined.
