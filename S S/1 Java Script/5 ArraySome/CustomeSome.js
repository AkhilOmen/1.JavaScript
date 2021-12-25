Array.prototype.mySome = function(callback){

    for(let i = 0; i < this.length; i++){
        
        let v = this[i];
        let ans = callback(v, i, this);

        if( ans == true){
            return true;
        }

    }

    return false;
    
}

// Question
let arr = [
    {name: "A", age: 14, gender: "F"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 34, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 44, gender: "M"},
    {name: "I", age: 34, gender: "F"}
]

// Is there a valid candidate ( F and age b/w 20, 30 inclusive)

let IsthereaValidCandiate = arr.mySome( v => v.gender == 'F' && v.age >= 20 && v.age <= 30 );
console.log(IsthereaValidCandiate);