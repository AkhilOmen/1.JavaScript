// let arr = [1, 2, 3, 4, 5];

// let  k = arr.splice(2,2);
// console.log(k);
// console.log(arr);

// let k = 2;
let n = 12345678;

let l = 0;
    
    while( n != 0){
        n = Math.floor( n/ 10);
        l++;
    }

    console.log(l);
