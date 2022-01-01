
// 1. functions defination i.e function declaration.
// In function declaration -> Both fun name and fn defination are hoisted
function fn(){
    console.log(" I am function defination ");
}
fn();


// 2. function expression.
// we can save a function address in a variable.
// In function expression variable will be hoisted but function defination will not be hoisted.
let secondFunction = function orginalFunction(){
    console.log(" I am expression");
}
// we can call the varibale, the function will run.
// because the function address will be stored in variable, therefore we can call the orginalFunction... It will throw an error..
secondFunction();


// 3. IIFE -> Immediately invoke the function expression.
console.log("Before");
(function drawBoard(){
    console.log("Board is Immerdiately drawn, I am IIFEE function");
})(); 
console.log("After");


// 4. Anonymous functions
// The functions that dosen't require names

// // exp1 -> for IIFEE function we don't need to give any name, as It runs automatically
     console.log("Before");
     (function (){
         console.log("I am Anonymous function 1");
     })(); 
     console.log("After");
// 

// // exp2 -> for function expression we don't need to give any name
     let secondFunction1 = function (){
         console.log("I am Anonymous function 2");
     }
     secondFunction1();
// 


