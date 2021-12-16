// Push, Pop works on end of an array

// Pop will remove 1 from the end.
// Pop will also return the removed value 
let arr = [10, 20, 30, 40, 50];

// remove
let rv1 = arr.pop();
displayArr(arr);
console.log(rv1);

// return length
let rv2 = arr.pop();
displayArr(arr);
console.log(rv2);


function displayArr(arr){
    console.log(arr + " = " + arr.length);
}