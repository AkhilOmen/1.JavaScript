// some will take every value 1 by 1 and -> 1. returns true if any callbacks return true
//                                          2. returns false if every callback return false.

// Its like OR Gate

let arr = [
    {name: "A", age: 14, gender: "F"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 34, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 38, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 44, gender: "M"},
    {name: "I", age: 24, gender: "F"}
]

// Is there a valid candidate ( F and age b/w 20, 30 inclusive)

let IsthereaValidCandiate = arr.some( v => v.gender == 'F' && v.age >= 20 && v.age <= 30 );
console.log(IsthereaValidCandiate);
