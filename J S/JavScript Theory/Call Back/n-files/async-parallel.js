// // for n number of files. just replace 3 by n.

let fs = require("fs");

console.log("Before");

let arr = [];

for(let i = 1; i <= 3; i++){
    arr.push("f" + i + ".txt");
}

for( let i = 0; i < arr.length; i++){
    fs.readFile(arr[i], cb);
}

function cb(err, data){
    console.log("content: " + data);
}

console.log("After");