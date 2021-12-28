
// When we use only var
console.log("Before declaration", b);  
var b;
console.log("After declaration", b);
b = 20;
console.log("After initialization", b);
// This is global code, and It will run in Global execution context.
// The new Execution context will not be created b/c no function is called here.


// Output
// Before declaration undefined
// After declaration undefined
// After initialization 20