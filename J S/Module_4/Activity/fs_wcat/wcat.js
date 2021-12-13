let fs = require("fs");
let path = require("path");

let InputArr = process.argv.slice(2);

let OptionArr = [];
let FileArr = [];

for( let i = 0; i < InputArr.length; i++ ){
    
    let FirstChar = InputArr[i].charAt(0);

    if( FirstChar == "-" ){
            OptionArr.push(InputArr[i]);
    }else{
            FileArr.push(InputArr[i]);
    }
}

for( let i = 0; i < FileArr.length; i++ ){
    
    if(fs.existsSync(FileArr[i]) == false){
        console.log("Given File doesn't Exists..! ERROR");
        return;
    }
}

let content = ""
for( let i = 0; i < FileArr.length; i++){
    content += fs.readFileSync(FileArr[i]) + "\r\n";
}

let ContentArr = content.split("\r\n");

// console.log(content.split("\r\n"));
// console.log(OptionArr);

// If -s Option exits in OptionArr then we should exucete -s and follow by -n or -b (which ever present first)

let MyOptionArr = [];

let isPresent = OptionArr.includes("-s");

if(isPresent){
    MyOptionArr.push("-s");
}

let IndexOfN = OptionArr.indexOf("-n");
let IndexOfB = OptionArr.indexOf("-b");

if( IndexOfN > -1 && IndexOfB > -1){
    
    if(IndexOfN < IndexOfB){
        MyOptionArr.push("-n");
    }else{
        MyOptionArr.push("-b");
    }

}else if(IndexOfN > -1 && IndexOfB <= -1){
    
    MyOptionArr.push("-n");

}else if(IndexOfN <= -1 && IndexOfB > -1){
    
    MyOptionArr.push("-b");

}

OptionArr = MyOptionArr;

for( let i = 0; i < OptionArr.length; i++){
    let SecondChar = OptionArr[i][1];

 // Remove Break to run for Multiple Operators...!

    if( SecondChar == "s" ){
        LineBreaker(ContentArr);
    }else if( SecondChar == "n" ){
        NumberingToAllLines(ContentArr);
        break;
    }else if( SecondChar == "b" ){
        NumberingToNonEmptyLines(ContentArr);
        break;
    }else{
        console.log("Please enter valid command. To know valid commands, enter console.log(OptionaArr)");
    }
}

function LineBreaker(ContentArr){
    
    for( let i = 1; i < ContentArr.length; i++){
        if( ContentArr[i] == "" && ContentArr[i-1] == ""){
            ContentArr[i] = null;
        }else if(ContentArr[i] == "" && ContentArr[i-1] == null){
            ContentArr[i] = null;
        }
    }
    
    let tempArr = []
    for( let i = 0; i < ContentArr.length; i++){
        if(ContentArr[i] != null){
            tempArr.push(ContentArr[i]);
        }
        
    }

    ContentArr = tempArr;

    console.log(ContentArr.join("\n"));
}

function NumberingToAllLines(ContentArr){
    
    // let ContentArr1 = content.split("\r\n");
    
    let tempArr1 = [];

    for(let i = 0; i < ContentArr.length; i++ ){
        tempArr1.push(i + 1 + "." + ContentArr[i]);
    }
    
    ContentArr = tempArr1;

    console.log(ContentArr.join("\n"));
    
}

function NumberingToNonEmptyLines(ContentArr){
    
    // let ContentArr2 = content.split("\r\n");
    
    let tempArr2 = [];
    let j = 1;

    for(let i = 0; i < ContentArr.length; i++ ){
        
        if(ContentArr[i] != ""){
            tempArr2.push(j + "." + ContentArr[i]);
            j++;
        }else{
            tempArr2.push(ContentArr[i]);
        }
        
    }
    ContentArr = tempArr2;
    
    console.log(ContentArr.join("\n"));

}