let arr = [
    {name: "A", age: 14, gender: "F"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 44, gender: "M"},
    {name: "I", age: 54, gender: "F"}
]

// return sum of ages of all valid candidates -> gender = 'F' and age >= 20 and age <= 30

let ans = arr.filter(c => c.gender == 'F' && c.age >= 20 && c.age <= 30).map(c => c.age * c.age).reduce( (pv, cv) => pv + cv);
console.log( ans );