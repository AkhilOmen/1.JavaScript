let fs = require("fs");

console.log("Before");

fs.readFile("f1.txt", cb);

function cb(err, data){

    console.log("content " + data);
    fs.readFile("f2.txt", cb1);

}

function cb1(err, data){

    console.log("content " + data);
    fs.readFile("f3.txt", cb2);
}

function cb2(err, data){

    console.log("content " + data);
    
}

console.log("After");