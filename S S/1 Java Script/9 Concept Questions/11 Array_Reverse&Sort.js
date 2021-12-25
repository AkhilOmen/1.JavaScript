let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [10, 20, 34, 56, 23, 62, 334, 54, 667, 920];

// sort and reverse

// Sort -> sort will work fine for sarr but It won't work fine for narr b/c 

let s_sarr = sarr.sort(); //alphabetically sort  
console.log(s_sarr);

// let s_narr = narr.sort(); // If we use sort for numerically value, It will sort it in alpabetical order. So, we need to use another method.
// console.log(s_narr);

// For numerical sort we need to write this arrow function in sort
let s1_narr = narr.sort(( a, b ) => a - b );
console.log( s1_narr );


// Reverse -> reverse will work fine for both sarr and narr
let r_sarr = sarr.reverse();
console.log(r_sarr);

let r_narr = narr.reverse();
console.log(r_narr);

