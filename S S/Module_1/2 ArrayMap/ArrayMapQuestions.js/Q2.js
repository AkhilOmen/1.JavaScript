let arr = [
    {
        gender: "M",
        age: 12
    },{
        gender: "F",
        age: 24
    },{
        gender: "M",
        age: 36
    },{
        gender: "F",
        age: 35
    },{
        gender: "M",
        age: 22
    },{
        gender: "F",
        age: 28
    },{
        gender: "M",
        age: 29
    },{
        gender: "F",
        age: 24
    },{
        gender: "M",
        age: 46
    },{
        gender: "F",
        age: 47
    },{
        gender: "F",
        age: 21
    },{
        gender: "M",
        age: 67
    },{
        gender: "F",
        age: 65
    },{
        gender: "M",
        age: 34
    },{
        gender: "F",
        age: 29
    },{
        gender: "M",
        age: 30
    },{
        gender: "F",
        age: 24
    },{
        gender: "M",
        age: 87
    },{
        gender: "F",
        age: 67
    },{
        gender: "M",
        age: 25
    },
]

// Return true from all F with age >= 20 and age <= 30


// 1.................// Normal method without unsing Arrow function
let resultsArr = arr.map(function(v, i, arr){

    let GenOfV = v.gender;
    let AgeOfV = v.age;
    
    if(GenOfV == "F" && AgeOfV >= 20 && AgeOfV <= 30){
        return " " + "T" + " ";
    }else{
        return " " + "F" + " ";
    }
    
});
console.log("[ " + resultsArr + " ]");


// 2..............................// By Using Arrow Function
let resultsArr2 = arr.map( (v, i, arr) => (v.gender == "F" && v.age >= 20 && v.age <= 30) );
console.log("[ " + resultsArr2 + " ]");
