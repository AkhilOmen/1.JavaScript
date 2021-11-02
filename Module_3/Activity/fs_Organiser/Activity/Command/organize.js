let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organizefn(SrcPath){
    
    console.log( "organize command executed with path ", Source_Path );

    if(SrcPath == undifined){
        SrcPath = process.cmd();
    }

    let OrganizedDirPath = path.join(SrcPath, "Organized_Floder");
    if( fs.existsSync(OrganizedDirPath) == false ){
        fs.mkdirSync(OrganizedDirPath);
    }

    let AllFileName = fs.readFileSync(SrcPath);
    
    for( let i = 0; i < FileName.length; i++){
        let FileOrginalPath = path.join(SrcPath, AllFileName[i]);
        
        if(fs.lstatSync(FileOrginalPath).isFile() == true){
            
            let FileExt = CheckExtOfFile(AllFileName[i]);
            CopyFileToDest( FileExt, FileOrginalPath, SrcPath );    

        }
    }

}

// function CheckExtOfFile






// Export

module.exports = {
    
    organizefxn:organizefn
}
