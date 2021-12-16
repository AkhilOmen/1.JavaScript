Array.prototype.myMap = function(callback){

    let rarr = [];

    for( let i = 0; i < this.length; i++){
        let val = this[i];
        let rv = callback(val, i, this)
        rarr.push(rv);
    }

    return rarr;

}


let arr = [1, 2, 3, 4, 5];
let ans = arr.myMap(function(val, idx, arr){
    return val * val;
});
console.log( "[ "+ ans + " ]" );
