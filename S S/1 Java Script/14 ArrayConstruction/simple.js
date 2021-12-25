// Normal Arr 

// 1.
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1);


// Array.function() -> These type of functions are static functions because we are not calling this functions on our array but on Array Class.

// 2. 
let arr2 = Array.of(10, 20, 30);
console.log(arr2);


// 3.
// Array.from() is usefull when we want to create an array out of string.
let arr3 = Array.from("Akhil"); // array like objects, for example -> strings, nodelists, arguments
console.log(arr3);
// Example -> 
// let ElementsArr = document.querySelectorAll("selector");
// expination ->
// The ElementsArr is not a array, Its just an Array Like Object i.e we can't use push, put, pop, map, filter e.t.c for ElementsArr b/c Its not an array it's an Array Like Object.
// To convert ElementsArr to Array -> let ElementsArr = Array.from( document.querySelectorAll("selector") ); 


// 4. If Queation_String = AKHIL Print BLIJM i.e ch + 1 ->  a+1 = b, k+1 = L....
let arr4 = Array.from("AKHIL");

let arr5 = arr4.map(ch => ch.charCodeAt(0) + 1);
console.log(arr5);

let arr6 = arr5.map( v => String.fromCharCode(v));
console.log(arr6);

let Answer_str = arr6.join("");
console.log(Answer_str);


