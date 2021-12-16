// 1> Filter it self is a function
// 2> Filter will take CallBack function as Input
// 3> The Callback function will take 3 parameters( val, idx, Orginal Array)
// 4> Filter will call the Callback multiple time ( Ones for every Val)
// 5> For each run of Callback function, Filter will pass val, idx and OrginalArray to Callback
// 6> CallBack will process the value, idx and will return single boolean value
// 7> Single value returned by each run of CallBack will be Used by filter
// 8> Whenever a true is received by filter (returned by callback) then filter adds the val to the new Array
// 8> Filter will return that new Array
// 9> Length of new Array will be equal to number of trues returned by callback function


let arr = [2, 5, 6, 9, 8, 15, 11, 16];



// As I am using true for odd val, It will return all odd value
let Oddval = arr.filter(function(val, idx, arr){
    
    if(val % 2 == 0){
        return false;
    }else{
        return true;
    }
    
})
console.log("[ " + Oddval + " ]");



// As I am using true for even val, It will return all even value
let Evenval = arr.filter(function(val, idx, arr){
    
    if(val % 2 == 0){
        return true;
    }else{
        return false;
    }

})

console.log("[ " + Evenval + " ]");