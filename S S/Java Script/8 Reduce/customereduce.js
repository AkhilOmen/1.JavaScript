
Array.prototype.myReduce = function(cb, iv){

    let pv;

    if( iv != undefined){

        pv = iv;
        for( let i = 0; i < this.length; i++){
            let cv = this[i];
            let sum = cb(pv, cv, i, this);
            pv = sum;
        }

    }else{
        
        pv = this[0];
        for( let i = 1; i < this.length; i++){
            let cv = this[i];
            let sum = cb(pv, cv, i, this);
            pv = sum;
        }

    }

    return pv;

}


let arr = [10, 20, 30, 40, 50];

let sum1 = arr.myReduce( function (pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
})
console.log(sum1);


