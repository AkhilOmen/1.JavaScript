// .............................................................1.............................................................
// // Push will append 1 or more value at the end.
// // Push will also return length 
// let arr = [10, 20, 30, 40, 50];

// // If we add a value at 10 index, It will not throw any error as java but I will add that value at the given index.
// arr[10] = 100;
// displayArr(arr);


// // we can push anything into the arr, because arr is also an object.
// arr["anything"] = 1000;
// displayArr(arr);
// console.log(arr["anything"]);

// // the anything will be pushed as a key;
// console.log(Object.keys(arr));


function displayArr(arr){
        console.log(arr + " = " + arr.length);
}
    
// ...................................................................2..........................................................
// Shallow copies

// Example 1 -> If we see here arr2 will be affected but not arr1
let arr1 = [10, 20, 30, 40, 50];
let arr2 = arr1.slice();
arr2[3] = 100;

displayArr(arr1);
displayArr(arr2);

// Example 2 -> let create an object array
// If we can see here If we change arr4[2] data the arr3 get affected -> in arr3 and arr4 the obj are stored as addresses i.e as reference there a change in object will affect both arr3 and arr4
let o1 = {
    age:100
}
let o2 = {
    age:200
}
let o3 = {
    age:300
}

let arr3 = [o1, o2, o3];
let arr4 = arr3.slice();
arr4[2].age = 500;

displayObjectArr(arr3);
displayObjectArr(arr4);
function displayObjectArr(arr){
    let str = "";
    for( let i = 0; i < arr.length; i++){
        str += arr[i].age + "," 
    }
    str += ".";
    console.log(str + " = " + arr.length);
}