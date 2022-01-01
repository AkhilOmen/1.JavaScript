let obj = {
    fun1: function(frnd1, frnd2, frnd3){
        console.log("This person is called -> " + this.FullName + ", and he/she is " + this.Age + " old.");
        console.log( this.FullName + " says hi to " + frnd1 + ".");
        console.log( this.FullName + " says hi to " + frnd2 + ".");
        console.log( this.FullName + " says hi to " + frnd3 + ".");
        console.log(arguments);
    },
    
    FullName: "AKHIL BICHALA",
    Age: 23
}

// My Call...............
    // Function.prototype.myCall = function(){
        
    //     let args = Array.from(arguments);
        
    //     let thisForMainfn = args[0];
    //     let argsForMainfn = args.slice(1);

    //     this.apply(thisForMainfn, argsForMainfn);
    // }
    
    // Another way...
    Function.prototype.myCall = function(){
        console.log("my call")
        let args = Array.from(arguments);
        
        let thisForMainfn = args[0];
        let argsForMainfn = args.slice(1);

        // For the obj given in mycall, I am adding fun1 function an fun.
        thisForMainfn.fun = this;
        // I am calling the fun function I have added just now, by giving "..." for any arr it will divide it into str1, str2, str3, str4, ......
        thisForMainfn.fun(...argsForMainfn);
        // after running the fun we have added to the obj, we should delete the fun from the object b/c we should not spoolie the obj given as input.
        delete thisForMainfn.fun;
    }

    
    obj.fun1.myCall({
        FullName: "VAMSHI",
        Age: 26
    }, "Sai", "Sathwik", "Jai");
    
// 


// My Apply...............................
    Function.prototype.myApply = function(){
        console.log("My Apply");
        let args = Array.from(arguments);
        
        let thisForMainfn = args[0];
        let argsForMainfn = args[1];

        this.apply(thisForMainfn, argsForMainfn);
            
    }

    // obj.fun1.myApply({
    //     FullName: "VAMSHI",
    //     Age: 26
    // }, ["SAI","SATHWIK", "JAI"]);

// 
        
// My Bind.............................................
    Function.prototype.myBind = function(){
        let Orginalthis = this;
        let args = Array.from(arguments);
        
        let boundfn = function(){

            let thisForMainfn = args[0];
            let argsForMainfn = args.slice(1);

            // We are taking inputs from boundfn() -> If the function is invocated.
            let argsFromboundfn = Array.from(arguments);
            argsForMainfn = argsForMainfn.concat(argsFromboundfn);
        
            Orginalthis.apply(thisForMainfn, argsForMainfn);
            
        }

        return boundfn;
    }

    // let boundfuntion = obj.fun1.myBind({
    //     FullName: "VAMSHI",
    //     Age: 26
    // }, "SAI");

    // boundfuntion("SATHWIK", "JAI", "AKHIL" );

// 

