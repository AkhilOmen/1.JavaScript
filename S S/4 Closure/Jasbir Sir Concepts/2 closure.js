function outer(first){
    console.log("Inside outer fn");
    return function inner(second){
        console.log("Inside inner fn");
        return first * second;
    };
}

let Returnedfn = outer(2);
console.log("Before calling the Returnedfn which contains inner fn");
let ans = Returnedfn(4);
console.log( "Final ans -> " , ans);

// When the outer fn is runned and wipped out from the stack. 
// In general the Returnedfn will store the inner fn address and outer fn will be wipped out from the stack.
// When we run the Returnedfn we require first value which is give in outer fn.. this is where the closure feature is used in java script.
// Because of Closure Feature -> Even the Outer fn is wipped out from stack, inner fn will have access to all the variable given in outer fn.


// Output
// Inside outer fn
// Before calling the Returnedfn which contains inner fn
// Inside inner fn
// Final ans ->  8