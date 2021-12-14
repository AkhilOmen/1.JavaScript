let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//  arr will loss the data if we use splice.
// 1st int is index and 2 int is no.of elements

// Its will return only one element and starting from 2 index
let na1 = arr.splice(2, 1);
displayArr(na1);

// Its will return 4 element and starting from 2 index
let na2 = arr.splice(2, 4);
displayArr(na2);


displayArr(arr);

function displayArr(arr){
    console.log( arr + " = " + arr.length);
}