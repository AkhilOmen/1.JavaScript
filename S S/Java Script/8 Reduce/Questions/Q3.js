// Union of array with no repeated values
// this should be the output
// ans = [2, 8, 10, 73, 34, 45, 31, 25, 64, 72, 88, 99]

let arr2 = [[2, 8, 10, 73], [34], [45, 31, 25, 10, 64, 72, 88], [64], [72, 88], [99, 34]];

let arr = arr2.reduce( function(pv, cv) {

    for(let i = 0; i < cv.length; i++){
        if( pv.includes(cv[i]) == false ){
            pv.push(cv[i]);
        }
    }

    return pv;
})

console.log(arr);