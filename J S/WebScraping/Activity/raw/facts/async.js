let fs = require("fs");

console.log("before");

fs.readFile("content.txt", cb);

function cb(error, data){
    if(error){
        console.log("Error");
    }else{
        console.log("content: "+ data);
    }
}

console.log("after");

// If you see the out first Before is printed, then After is printed and then content is printed.
// At first befor code will run, the readfile will run in outsource and the code will continue and print After and then readfile will be printed. By this there won't be any time waste