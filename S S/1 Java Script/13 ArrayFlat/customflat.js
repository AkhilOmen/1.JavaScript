Array.prototype.myFlat = function(n){

    let ans = [];
    let Qarr = this;

    if( n == null ){
        n = 1;
    }

    while( n != 0 ){ 

        Qarr.map( v => {

            if( Array.isArray(v) == false ){
                ans.push(v);
            }
            else{
                v.map( v1 => {
                    ans.push(v1);
                })
            }
        })
        
        
        if( Qarr.length == ans.length ){
            Qarr = ans;
            break;
        }
        
        Qarr = ans;
        ans = [];
        n--;
        
    }
    
    return Qarr;
    
}

// Question -> 
// let arr = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];
let arr = ["aaa", "b", ["c", ["d", ["e","f", "g"], "h"], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];

let res1 = arr.myFlat(4);
console.log(res1);
