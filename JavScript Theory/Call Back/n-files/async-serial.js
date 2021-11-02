

let fs = require("fs");

console.log("Before");


let arr = [];

for(let i = 1; i <= 3; i++){
    arr.push("f" + i + ".txt");
}

function SerialReader(i){
    if( i == arr.length){
        return;
    }
    fs.readFile(arr[i], function cb(err, data){
        console.log("content: " + data);
        SerialReader(i+1);
    });
}

SerialReader(0);

console.log("After");