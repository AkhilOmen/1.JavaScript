let arr = [10, 20, 30, 40, 50];

let sum1 = arr.reduce( function (pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
})
console.log(sum1);

// Output
// 10 - 20 - 1
// 30 - 30 - 2
// 60 - 40 - 3
// 100 - 50 - 4
// 150

let sum2 = arr.reduce( function (pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
}, 5);
console.log(sum2);

// Output
// 0 - 10 - 0
// 10 - 20 - 1
// 30 - 30 - 2
// 60 - 40 - 3
// 100 - 50 - 4
// 150