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

// return ages of all the ladies


// 1> If we use ony filter It will return all the object where gender is true.
// 2> If we use only map it will return all the age irrespective or gender. 
//    If we use conditional statements will get some blank enteries as well, but we only need thoes ages where gender is female.
//    Therefor we use both filter and map 

// 3> Filter will return an object array where the object gender is equals to female and map will return all the age of that object array (returned by filter).
let ans = arr.filter(function(v, i, arr){  
    let gen = v.gender;

    if( gen == "F"){
        return true;
    }else{
        return false;
    }

}).map(function(v, i, arr){ 
    return v.age;
});
console.log("[ " + ans + " ]");

// Arrow method
let ans1 = arr.filter( (v, i, arr) => v.gender == "F" ).map( (v, i, arr) => v.age);
console.log("[ " + ans1 + " ]");