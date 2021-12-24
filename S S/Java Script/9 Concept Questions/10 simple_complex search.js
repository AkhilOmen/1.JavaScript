
let arr = [10, 20, 30, 40, 50, 60, 30, 70, 80, 90, 30, 70, 50];

// For simple search we can use Index, IndexOf, Includes function, but for complex search i.e with conditions we should use find, findIndex, filter


// Simple Search
let FIdxRes = arr.indexOf(30); // It will return index of first index of 30 -> from left to right
let LIdxRes = arr.lastIndexOf(30); // It will return index of first index of 30 -> from right to left
let Vcontains = arr.includes(30); // True or false
// ...........................
console.log(FIdxRes);
console.log(LIdxRes);
console.log(Vcontains);


// Complex search
// 1. Give me the first value above 50
let FValRes = arr.find(function(v, i, oarr){
    return v > 50;
})

// 2. Give me the Index of the first value above 50
let FValIdxRes = arr.findIndex(function(v, i, oarr){
    return v > 50;
})

// 3. Give me all the values above 50
let FltrRes = arr.filter(function(v, i, oarr){
    return v > 50;
})
// ............................
console.log(FValRes);
console.log(FValIdxRes);
console.log(FltrRes);


