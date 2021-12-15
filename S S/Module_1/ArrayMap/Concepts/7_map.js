// 1> Map is Also a function
// 2> Map will take CallBack function as Input
// 3> The Callback function will take 3 parameters( val, idx, Orginal Array)
// 4> Map will call the Callback multiple time ( Ones for every Val)
// 5> For each run of Callback function, map will pass val, idx and OrginalArray to Callback
// 6> CallBack will process the value, idx and will return single value
// 7> Single value returned by each run of CallBack will be collected in a new Array by Map
// 8> Map will return that new Array
// 9> Length of new Array will be equal to Orginal Array


let arr = [1, 2, 3, 4, 5];
let sqr_arr = arr.map(function(v, i, oarr){
    return v * v;
});

displayArr(sqr_arr);

function displayArr(arr){
    console.log( arr + " = " + arr.length);
}