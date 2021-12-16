let arr = [
    "Sum Mal",
    "An Mal",
    "Ak Kum",
    "Bic Vam",
    "Kan Man",
    "Bic Bha"
]

// Q1 -> Output -> [ "S.M." , "A.M.", "A.K.", "B.V.", "K.M.", "B.B." ]

// Code

let InitialsArr = arr.map(function(v, i, arr){
    let StrArr = v.split(" ");
    let ans = ' "' + StrArr[0][0] + "." + StrArr[1][0] + "." + '" ';
    return ans; 
})

console.log( "["+ InitialsArr + "]");