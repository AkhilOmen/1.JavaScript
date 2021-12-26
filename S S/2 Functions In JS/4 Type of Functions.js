
// 1. functions defination.
function fn(){
    console.log(" I am function defination ");
}
fn();


// 2. function expression.
// we can save a function address in a variable.
let secondFunction = function orginalFunction(){
    console.log(" I am expression");
}
// we can call the varibale, the function will run.
secondFunction();


// 3. IIFEE -> Immediately invoke the function expression.
console.log("Before");
(function drawBoard(){
    console.log("Board is Immerdiately drawn, I am IIFEE function");
})(); 
console.log("After");


// 4. Anonymous functions
// The functions that dosen't require names

// // e1 -> for IIFEE function we don't need to give any name, as It runs automatically
     console.log("Before");
     (function (){
         console.log("I am Anonymous function 1");
     })(); 
     console.log("After");

// // e2 -> for function expression we don't need to give any name
     let secondFunction1 = function (){
         console.log("I am Anonymous function 2");
     }
     secondFunction1();


