let arr2d = [ [2, 8, 10], [34], [45, 31, 25, 64, 28], [], [23, 75]];

// Flatten the 2D array

let ans = arr2d.reduce(function(pv, cv, ci, arr2d ){
    let narr = pv.concat(cv);
    return narr;
}, []);
console.log(ans);