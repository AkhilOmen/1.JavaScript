

// This are examples for function declaration -> In this first function will happen then funtion will be runned.


console.log(fun); // [Function: fun] -> address will be printed
console.log(gun); // [Function: gun] -> gun address.  
fun();

function fun(){
    gun();
}

function gun(){
    console.log("I am Inside gun");
}

// Output
// I am inside gun
