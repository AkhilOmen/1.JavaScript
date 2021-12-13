let fs = require("fs");

console.log("Before");

fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb);
fs.readFile("f3.txt", cb);

function cb(err, data){
    console.log("content " + data);
}

console.log("After");