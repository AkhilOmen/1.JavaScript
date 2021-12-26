
function fn(parem){
    console.log(" I am function defination ", parem);
}


// 1. It will just pass value
// a. boolean
fn(true);


// 2. Here Address will be passed....

// a. string 
// Referance type
fn("Akhil");

// b. object
// fn({name:"Akhil"});
// (OR) // both are similar Address will be passed..
let Obj = {name : "Akhil"};
fn(Obj);

// c. arr
let arr = [10, 20, 30, 40];
fn(arr);

// d. function
function chotafn(){
    console.log( "I am chota function");
}
fn(chotafn);




