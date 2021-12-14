// Its like substring

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        //  0,  1,  2,  3,  4,  5,  6,  7,  8     // +ve Indices
        // -9, -8, -7, -6, -5, -4, -3, -2, -1     // -ve Indices


// Left idx will be inclusive and rigth index will be exclusive.
let na1 = arr.slice(0, 5); // 0,1,2,3,4 element will be printed and 5 will be excluded.
displayArr(na1);

// from 1 to end
let na2 = arr.slice(1);
displayArr(na2);

// clone
let na3 = arr.slice();
displayArr(na3);


// We can also give -ve indices
let na4 = arr.slice(-9, -4);
displayArr(na4);

// We can also use +ve and -ve combined
let na5 = arr.slice(1, -5);
displayArr(na5);

function displayArr(arr){
    console.log( arr + " = " + arr.length);
}
