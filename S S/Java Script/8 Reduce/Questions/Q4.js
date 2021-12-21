// Intersection of array with no repeated values
// this should be the output
// common elements in everyone

let arr2 = [[2, 8, 10, 73, 34], [34, 73, 71, 24], [45, 31, 25, 10, 64, 72, 88, 34, 73], [64, 34, 73], [72, 88, 34, 73], [99, 34, 73]];

let arr = arr2.reduce( (pv, cv, ci, oarr) => {

    let temp = cv.filter( v => pv.includes(v));
    return temp;
    
}); 

console.log(arr);