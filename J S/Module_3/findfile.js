let fs = require("fs");
let path = require("path");

// let input = process.argv.slice(2);
// let inputDir = input[0];

// let AllEntities = fs.readdirSync(inputDir);
// let content = "";


// for( let i = 0; i < AllEntities.length; i++ ){
//     let NameOfEntities = AllEntities[i];
//     // console.log(NameOfEntities);

//     let FilesPath = path.join(inputDir, NameOfEntities);
//     let StateOfPath = fs.lstatSync(FilesPath);

//     if(StateOfPath.isFile() == true){

//         content += fs.readFileSync(FilesPath) ;
//     }

//     // // // // TO  READ ANY TYPE OF FILES EXAMPLE( ".txt", ".js".... etc) // // // //
//     // let ext = path.extname(FilesPath);
//     // if( ext == ".txt"){
//     //     content += fs.readFileSync(FilesPath);
//     // }

// }

// let AnsFilePath = path.join(inputDir, "summary.txt");
// fs.writeFileSync(AnsFilePath, content);

// console.log("Summary file created");
