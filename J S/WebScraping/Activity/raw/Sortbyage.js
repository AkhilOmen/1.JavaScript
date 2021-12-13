let request = require("request");
let cheerio = require("cheerio");

let URL = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard"

console.log("before");
request(URL, cb );

let BatsmanArr = [];
let BatsmanCount = 0;

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
    
    let batsman = searchTool(".table.batsman tbody tr .batsman-cell");

    for(let i = 0; i < batsman.length; i++ ){
        BatsmanCount++;
    }


    for(let i = 0; i < batsman.length; i++ ){
        let aElem = searchTool(batsman[i]).find("a");
        // arrow elements
        let link = aElem.attr("href");

        let fulllink = `https://www.espncricinfo.com${link}`;
        request(fulllink, newcb);        

    }

}

function newcb(error, response, html){
    if(error){
        console.log(error);
    }else if(response.statusCode == 404){
        console.log("Page Not Found");
    }else{
        console.log("`````````````````````````````````");
        getBirthDay(html);
        if(BatsmanArr.length == BatsmanCount){
            console.table(BatsmanArr);
        }

    }
}

function getBirthDay(html){
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool(".player-card-description");
    let age = searchTool(headingsArr[2]).text();
    let name = searchTool(headingsArr[0]).text();

    BatsmanArr.push({name, age});

    SortBirthday(BatsmanArr);

    
}

function SortBirthday(BatsmanArr){

    let newArr = BatsmanArr.map(singleFn);

    function singleFn(obj){
        let name = obj.name;
        let age = obj.age;

        let objArr = obj.age.split(" ");
        let years = objArr[0].slice(0, objArr[0].length - 1);
        let days = objArr[1].slice(0, objArr[1].length - 1);

        let ageInDays = Number(years) * 365 + Number(days);

        return{
            name: name,
            age: age,
            ageInDays: ageInDays
        }

    }

    let SortedArr = newArr.sort(cb);

    function cb(objA, objB){
        return objA.ageInDays - objB.ageInDays;
    }

    

}

console.log("After");