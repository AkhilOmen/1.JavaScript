function powerCreator(obj){

    let fun = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }

    return fun;
}

let o1 = {
    exp: 2
}


let squarer = powerCreator(o1);
let val1 = squarer(5);
console.log(val1);

o1.exp = 3;
let val2 = squarer(5);
console.log(val2);