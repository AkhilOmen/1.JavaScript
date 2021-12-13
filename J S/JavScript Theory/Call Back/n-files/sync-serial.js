// // for n number of files. just replace 3 by n.

let fs = require("fs");

console.log("Before");


let arr = [];

for(let i = 1; i <= 3; i++){
    arr.push("f" + i + ".txt");
}

for( let i = 0; i < arr.length; i++){

    let content = fs.readFileSync(arr[i]);
    console.log(content.toString());

}

console.log("After");