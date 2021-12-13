let fs = require("fs");

console.log("Befor");

function myPromiseFsReader(filePath){

    return new Promise(function (resolve, reject){
        fs.readFile(filePath, function cb(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }

        })

    })

}

// Promise(function (resolve, reject) is a user defined promise.

// Instead of call a defautl promises.readFile function we are going to creat our own promise function.
// let fReadPromise = fs.promises.readFile("f1.txt");

let fReadPromise = myPromiseFsReader("f1.txt");
fReadPromise.then(function  cb(data){
    console.log("data "+ data);
})

fReadPromise.catch(function  cb(err){
    console.log("error "+ err);
})

console.log("After");