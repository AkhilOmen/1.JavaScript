// Unshift , shift will work in front of the array

// shift will removes ore val from front
// sfit will return the removed val

let arr = [10, 20, 30, 40, 50];


// returns length
let rv = arr.shift();
displayArr(arr);
console.log(rv);


function displayArr(arr){
    console.log(arr + " = " + arr.length);
}