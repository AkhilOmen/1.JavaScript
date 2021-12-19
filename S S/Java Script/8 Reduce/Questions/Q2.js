let arr2d = [ [2, 8, 10], [34], [45, 31, 25, 64, 28], [], [23, 75]];

// Flatten the 2D array

let ans = [];

for( let i = 0; i < arr2d.length; i++){

    let arr = arr2d[i];

    if( arr.length != 0){
        let val = arr2d[i].reduce(function(pv, cv, ci, arr){
            return pv + cv;
        })
        ans.push(val)
    }else{
        ans.push(0);
    }
}

console.log(ans);