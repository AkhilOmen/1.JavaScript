// Q2 -> Print all sub Arrays

let arr = [10, 20, 30, 40, 50];

for( let i = 0; i < arr.length; i++){
    for( let j = i + 1; j <= arr.length; j++){
        let ans = arr.slice(i, j);
        displayArr(ans);
    }
    console.log(".........................................");
}

function displayArr(arr){
    console.log(arr + " = " + arr.length);
}