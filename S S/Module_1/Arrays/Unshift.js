// Unshift , shift will work in front of the array

// unshift will add 1 or more val in front
// unsfit will return length

let arr = [10, 20, 30, 40, 50];

// 1 val unshift
arr.unshift(100);
displayArr(arr);

// more val unshift
arr.unshift(200, 300, 400);
displayArr(arr);

// returns length
let rv = arr.unshift(500);
displayArr(arr);
console.log(rv);


function displayArr(arr){
    console.log(arr + " = " + arr.length);
}