// Question
function f(x){
    return x * x;
}
function g(x){
    return x + 10;
}
function h(x){
    return 2 * x;
}

let farr = [f, g, h] // If reversed [h, g, f]
let x = 10;

// Output should be f(g(h(x)));

// Answer

// Normal reduce...............
// let ans = farr.reverse().reduce( (pv, cv) => {
//     return cv(pv);
// }, x);

// we can use reduceRight....
let ans = farr.reduceRight( (pv, cv) => {
    return cv(pv);
}, x);

// How It worked
// x, h
// h(x), g
// g(h(x)), f
// f(g(h(x)))

console.log( ans );