
Array.prototype.Myfilter = function(cb){

    let res = [];

    for( let i = 0; i < this.length; i++){
        let val = this[i]
        let rbv = cb(val, i, this);

        if( rbv == true){
            res.push(val);
        }
    }

    return res;

}



let arr = [2, 5, 6, 9, 8, 15, 11, 16];

// As I am using true for odd val, It will return all odd value
let Oddval = arr.Myfilter(function(val, idx, arr){
    
    if(val % 2 == 0){
        return false;
    }else{
        return true;
    }
    
})
console.log("[ " + Oddval + " ]");