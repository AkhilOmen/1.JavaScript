// Push will append 1 or more value at the end.
// Push will also return length 
let arr = [10, 20, 30, 40, 50];

// 1 value push
arr.push(100);
displayArr(arr);

// more value push
arr.push(100, 200, 300);
displayArr(arr);

// return length
let rv = arr.push(500);
displayArr(arr);
console.log(rv);


function displayArr(arr){
    console.log(arr + " = " + arr.length);
}