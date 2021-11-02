
let tree_import = require("./Command/tree");
let organize_import = require("./Command/organize");
let help_import = require("./Command/help");

let InputArr = process.argv.slice(2);
let Input_command = InputArr[0];
let Input_Path = InputArr[1];

switch(Input_command){
    case "tree":
        tree_import.treefxn(Input_Path);
        break;
    case "organise":
        organize_import.organizefxn(Input_Path);
        break;
    case "help":
        help_import.helpfxn(Input_Path);
        break;
    default:
        console.log("Please enter valid Input");
        break;

}
