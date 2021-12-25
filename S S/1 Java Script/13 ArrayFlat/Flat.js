let arr = [10, 20, [50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];


// for flat(n) -> the arrays in that level and levels above will be busted and those elements will be attached to level 1  

// For example -> 

// for falt(1) -> The arrays in level 1 will be busted an the elements in the arr will be attached to level 1.
// 1>  arr.flat() or arr.flat(1) =>  [ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ]
let res1 = arr.flat(1); 
console.log(res1);

// for flat(2) -> The arrays in both level 1 and level 2 will be busted and the elements in those arrays will be attanched to level 1
// 2> arr.flat(2) => [ 10, 20, 50, 60, 90, 100, 30, 70, 110, 120, 80, 40 ]
let res2 = arr.flat(2); 
console.log(res2);

// For n >= max levels, It will be equal to n - 1 i.e Here max level = 3, therefore flat(3) or flat(4) will be equal to flat(2)........
let res3 = arr.flat(3); 
console.log(res3);

// Its will give use the same arr... i.e flat(0) will be equal to orginal array
let res0 = arr.flat(0); 
console.log(res0);

