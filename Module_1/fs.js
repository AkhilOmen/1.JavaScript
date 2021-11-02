
let fs = require("fs");
let path = require("path");

// let content = fs.readFileSync("f1.txt");

// console.log("content: " + content);

// fs.writeFileSync("abc.txt" , "hello, I am new\n");
// fs.appendFileSync("abc.txt", "hello, I am okay with that");
// fs.unlinkSync("abc.txt");
// fs.unlinkSync("f1.txt");

// fs.mkdirSync("path.js");

// let inputArr = process.argv.slice(2);
// let fileName = inputArr[0];
// let content  = inputArr[1];

// console.log(fileName);
// console.log(content);

// fs.mkdirSync("Web Dev");


// //  to copy a file to another foulder // // // 
let inputArr = process.argv.slice(2);
let SourceFilePath = inputArr[0];
let DestinationDir = inputArr[1];

let ToBeCopiedFileName = path.basename(SourceFilePath);
let content = fs.readFileSync(ToBeCopiedFileName);

let DestinationPath = path.join(DestinationDir, ToBeCopiedFileName );
fs.copyFileSync(SourceFilePath, DestinationPath);