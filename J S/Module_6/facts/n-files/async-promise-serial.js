let fs = require("fs");

let files = ["f1.txt", "f2.txt", "f3.txt"];

console.log("Before");

initialPromise = fs.promises.readFile(files[0]);

for( let i = 1; i < files.length; i++){
    initialPromise = initialPromise.then(function cb(data){
        console.log("data: "+ data);
        return fs.promises.readFile(files[i]);
    })
}

initialPromise.then(function cb(err, data){
    console.log("data: " + data);
})

console.log("After");