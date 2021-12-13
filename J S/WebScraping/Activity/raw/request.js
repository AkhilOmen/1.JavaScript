let request = require("request");
let cheerio = require("cheerio");

console.log("before");
request("https://www.npmjs.com/package/cheerio", cb );

function cb(error, response, html){
        if(error){
            console.log(error);
        }else if(response.statusCode == 404){
            console.log("Page Not Found");
        }else{
            // console.log(html);
            // console.log("html:",);
            dataExtraction(html);

        }
}

function dataExtraction(html){
    // search tool
    let searchTool = cheerio.load(html);
    // console.log(searchTool);

    //css selectot -> elem
    let elemRep = searchTool("#readme>h1")

    // text
    let moduleName = elemRep.text().trim();
    console.log("moduleName", moduleName);
}

console.log("After");