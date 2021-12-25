// every will take every value 1 by 1 and -> 1. returns true if every callbacks return true
//                                           2. returns false if any callback return false.

// Its like AND Gate

let arr = [
    {name: "A", age: 24, gender: "F"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 24, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 44, gender: "M"},
    {name: "I", age: 24, gender: "F"}
]

// Does all Female candidate Valid? ( F and age b/w 20, 30 inclusive)

let AllFemaleValidCandiate = arr.filter(c => c.gender == "F").every( fc => fc.age >= 20 && fc.age <= 30);
console.log(AllFemaleValidCandiate);