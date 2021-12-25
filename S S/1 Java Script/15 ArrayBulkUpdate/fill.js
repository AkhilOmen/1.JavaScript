let arr = [10, 20, 30, 40, 50, 60];

//
// arr.fill( val, idx1, idx2 );
// idx1 -> Inclusive
// idx2 -> exclusive


// 1.
arr.fill(8, 1, 4);
console.log(arr); 
// ans
// [ 10, 8, 8, 8, 50, 60 ]

// 2.
arr.fill(7, 2);
console.log(arr);
// ans
// [ 10, 8, 7, 7, 7, 7 ]

// 3.
arr.fill(9);
console.log(arr);
// ans
// [ 9, 9, 9, 9, 9, 9 ]



