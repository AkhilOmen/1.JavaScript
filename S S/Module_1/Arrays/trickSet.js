// Push will append 1 or more value at the end.
// Push will also return length 
let arr = [10, 20, 30, 40, 50];

// If we add a value at 10 index, It will not throw any error as java but I will add that value at the given index.
arr[10] = 100;
displayArr(arr);


// we can push anything into the arr, because arr is also an object.
arr["anything"] = 1000;
displayArr(arr);
console.log(arr["anything"]);

// the anything will be pushed as a key;
console.log(Object.keys(arr));


function displayArr(arr){
    console.log(arr + " = " + arr.length);
}