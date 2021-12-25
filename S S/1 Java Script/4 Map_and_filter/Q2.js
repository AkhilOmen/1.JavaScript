let arr = [5, 83, 24, 67, 71, 12, 24, 7];

// cubes whoes sqrt < 1000
let res = arr.filter(v => v * v <= 1000).map(v => v * v * v); // i.e return v * v * v whoes v * v < 1000
console.log("[ " + res + " ]");


// cubes < 10000
// let res1 = arr.map( v => v * v * v).filter( v3 => v3 < 10000); // This is not effecttive b/c map will return for n elements and filter need to check n elements
let res1 = arr.filter( v => v * v * v < 10000).map( v => v * v * v); // This is effective b/c filter will return less than n elements and map will run only for that elements.
console.log("[ " + res1 + " ]");


// power to 6 whoes sqrt < 1000
let res2 = arr.map( v => v * v).filter( v2 => v2 < 1000).map(v2 => v2 * v2 * v2); 
console.log("[ " + res2 + " ]");

