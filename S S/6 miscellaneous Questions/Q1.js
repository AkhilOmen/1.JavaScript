(function(){

    let SetTimer = parseInt( prompt("Please enter your count in seconds") );
    let Interval = parseInt( prompt("Give us the interval in seconds") );

    // let time = SetTimer;

    let myInterval = setInterval( handlecount, Interval * 1000);

    // Here we used function as object -> This a static property.. we have used static property on function.
    handlecount.timeout = SetTimer; 
    
    function handlecount(){
        console.log(SetTimer + " left");
        SetTimer = SetTimer - Interval;
        if(SetTimer <= 0){
            alert( handlecount.timeout + " has been counted with " + Interval + " has interval");
            clearInterval(myInterval);
        }
        
    }
    

})()