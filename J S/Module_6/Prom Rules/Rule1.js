
// Promise-> State 
// value

let fs = require("fs");

function myPromisedFsReader(filePath){

    return new Promise(function(resolve, reject){
        
        fs.readFile(filePath, function cb(err, data){

            if(err){
                reject(err);
            }else{
                resolve(data);
            }

        })

    })
}

let readfilepromise = myPromisedFsReader("f1.txt");

console.log("Before");

// Initially the readfilepromise will return pending status and undefined value.
console.log("13", readfilepromise );

// we have given timeout of 1sec.
setTimeout(function(){
    console.log("16 " + readfilepromise)
}, 1000);

console.log("After");