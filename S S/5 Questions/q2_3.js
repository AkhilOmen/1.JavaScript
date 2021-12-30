


function fun(){ // This is function declaration.
    gun();
}


var gun = function(){ // This is function expression.
    console.log("I am Inside gun");
}

console.log(fun); // [Function: fun] -> address will be printed
console.log(gun); // [Function: gun] -> address of gun  
fun();

// Output
// I am Inside gun
