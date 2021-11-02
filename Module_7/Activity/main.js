const puppeteer = require("puppeteer");
let page;

(async function fn(){

    let Browser = await puppeteer.launch({
        headless: null,
        defaultviewport: null,
        args:["--start-maximized", "--disable-notofications"]
    })

    console.log("Browser Opened");
    page = await Browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");

    // 1st Element -> PlayList name
    await page.waitForSelector("h1[id='title']", {visible: true});
    let PlayListNameElement = await page.$("h1[id='title']");
    let PlayListName = await page.evaluate(el => el.textContent, PlayListNameElement);
    console.log("PlayListName: ", PlayListName);

    // 2nd Element -> Number of Videos
    await page.waitForSelector("[class='style-scope ytd-playlist-sidebar-primary-info-renderer']", {visible: true});
    let ElementS = await page.$$("[class='style-scope ytd-playlist-sidebar-primary-info-renderer']");
    let No_of_Videos = await page.evaluate( el => el.textContent, ElementS[5]);
    console.log("No_of_Videos: ", No_of_Videos);

    // 3rd Element ->  Total No.of Views
    let No_of_Views = await page.evaluate(el => el.textContent, ElementS[6]);
    console.log("No_of_Views: ", No_of_Views);

    // Main Source element for Index
    await page.waitForSelector("[id='index-container']", {visible: true});
    let IdxSourceElement = await page.$$("[id='index-container']");
    
    // Main Source element for Names
    await page.waitForSelector("[id='video-title']", {visible: true});
    let NameSourceElement = await page.$$("[id='video-title']");

    let VideosArr = [];

    for( let i = 0; i < IdxSourceElement.length; i++){

        let NumbersAndNames = await page.evaluate(el => el.textContent, IdxSourceElement[i], NameSourceElement[i]);

        VideosArr.push(NumbersAndNames);
    }

    console.table(VideosArr);


})();

function getTimeAndTitle(){
    
}