let arr = [
    {name: "A", age: 44, gender: "F"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 54, gender: "F"},
    {name: "D", age: 29, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 48, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 44, gender: "M"},
    {name: "I", age: 14, gender: "F"}
]

// Customefind
Array.prototype.myFindIndex = function(callback){

    for(let i = 0; i < this.length; i++){
        
        let v = this[i];
        let ans = callback(v, i, this);

        if( ans == true){
            return i;
        }

    }

    return -1;
    
}


// It will return value against first True else returns undefined

let FindCandidateIndex = arr.myFindIndex(  c => c.gender == 'F' && c.age >= 20 && c.age <= 30 );

if( FindCandidateIndex != -1){
    console.log( arr[FindCandidateIndex].name + "@" + arr[FindCandidateIndex].age + "-" + arr[FindCandidateIndex].gender );
}else{
    console.log("Not Found");
}


