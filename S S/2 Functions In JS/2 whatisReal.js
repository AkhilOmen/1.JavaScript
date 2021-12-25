
// main Points -> 1. Memory allocation will happen first. 
//                2. Code will be executed.

//  If there are 2 function with same name the last one will be given highest priority..

// i.e If we give 
let a = 10 
a = 20
// console.log(a) -> will print 20 .. Similarly for functions as well. 


// Question ->

iamReal();

function iamReal(){
    console.log( " I am real ")
}

function iamReal(){
    console.log(" He isn't, I am the real one");
}

iamReal();

// Output ->
// He isn't, I am the real one
// He isn't, I am the real one
