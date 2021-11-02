let request = require("request");
let cheerio = require("cheerio");

let URL = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary"

console.log("before");
request(URL, cb );

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
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text")
    // console.log(elemRepArr.length)

    // text
    let lbc = searchTool(elemRepArr[0]).text();
    console.log("last ball comment: ", lbc);

}

console.log("After");