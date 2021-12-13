
let fs = require("fs");
let path  = require("path");

let inputArr = process.argv.slice(2);

let MainDir = inputArr[0];

// let FirstModule = inputArr[1];
// let SecondModule = inputArr[2];
// let ThirdModule = inputArr[3];

let CurrentPath = process.cwd();

let MainDirPath = path.join(CurrentPath, MainDir);



// let FirstModulePath = path.join(CurrentPath, MainDir, FirstModule);
// let SecondModulePath = path.join(CurrentPath, MainDir, SecondModule);
// let ThirdModulePath = path.join(CurrentPath, MainDir, ThirdModule);

// console.log(MainDirPath);
// console.log(FirstModulePath);
// console.log(SecondModulePath);
// console.log(ThirdModulePath);

let isMainDirPresent = fs.existsSync(MainDirPath);

if(isMainDirPresent){
    console.log(MainDir, "Already Exists");
    return;

}else{
    
    console.log(MainDir, "Created");
    fs.mkdirSync(MainDirPath);

    let topicFromInput = inputArr.slice(1, 4);
    
    
    for( let i = 0; i < topicFromInput.length; i++ ){
        
        let ModulePath = path.join(MainDirPath, topicFromInput[i]);
        fs.mkdirSync(ModulePath);
        
        for( let j = 1; j <= 5; j++ ){
            
            let SubModulePath = path.join(ModulePath, "Module" + j);
            fs.mkdirSync(SubModulePath);
            
            let FilePath = path.join(SubModulePath, "content.md")
            fs.writeFileSync(FilePath, "# Hello");
        }
    }
}