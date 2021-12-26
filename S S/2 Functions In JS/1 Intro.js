
// 1. Withoud return value.........................................................

// Function defination -> Function code
function sayHi(name){
    console.log("Hello " + name);
    // return 1;
}

// a. Function invocation -> function will be called -> This line actually runs the code. 
sayHi("Akhil");

// b. I haven't called function -> function name will be printed.
console.log(sayHi);

// c. If we print the function, It will print the return value or if it doesn't return any value it will print undefined. 
console.log( sayHi("Akhil") );

// d. If we don't pass any value.
//    It will print -> Hello undefined because the value is undefined.
sayHi(); 




// 2. With return value.................................................................

