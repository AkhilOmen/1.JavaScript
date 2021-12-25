
Array.prototype.myEvery = function(cb){

    for( let i = 0; i < this.length; i++ ){
        let c = this[i];
        let ans = cb(c, i, this);

        if( ans == false){
            return false;
        }

    }

    return true;
}


let arr = [
    {name: "A", age: 24, gender: "F"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 24, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 44, gender: "M"},
    {name: "I", age: 34, gender: "F"}
]

// Does all Female candidate Valid? ( F and age b/w 20, 30 inclusive)

let AllFemaleValidCandiate = arr.filter(c => c.gender == "F").myEvery( fc => fc.age >= 20 && fc.age <= 30);
console.log(AllFemaleValidCandiate);