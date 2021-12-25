let Qstr = " My Name is Akhil Kumar. I am a software Developer. I believe in learning by doing. I need courage and patience."
// ans ->  "Kumar Akhil is Name My. Developer software a am I. doing by learning in believe I. patience and courage need I"


// My solution....
let ans = "";
// let Rarr = Qstr.split(".");
// //  Do It without for loops
// let resm = Rarr.map( sa =>  {

//     let Iarr = sa.split(" ").reverse();

//     let resf = Iarr.filter(s => s != '').map(s => {
//         ans += " " + s;
//     })
//     ans += ".";

// })
// console.log( ans );
// // My ans
// // Kumar Akhil is Name My. Developer software a am I. doing by learning in believe I. patience and courage need I.


// Another solution
let res1 = Qstr.split(".");
console.log(res1);

let res2 = res1.filter( s => s.length > 0);
console.log(res2);

let res3 = res2.map( s => s.trim());
console.log(res3);

let res4 = res3.map( s => s.split(" "));
console.log(res4);

let res5 = res4.map( sa => sa.reverse() );
console.log(res5);

let res6 = res5.map( sa => sa.reduce( (pv, cv) => pv + " " + cv) );
console.log(res6);

let res7 = res6.map( s => s + ".");
console.log(res7);

let res8 = res7.reduce( (pv, cv) => pv + " " + cv);
console.log(res8);

// Kumar Akhil is Name My. Developer software a am I. doing by learning in believe I. patience and courage need I.
