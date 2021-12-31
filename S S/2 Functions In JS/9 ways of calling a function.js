let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This person is called -> " + this.FullName + ", and he/she is " + this.Age + " old.");
        console.log( this.FullName + " says hi to " + frnd1 + ".");
        console.log( this.FullName + " says hi to " + frnd2 + ".");
        console.log(arguments);
    },
    
    FullName: "AKHIL BICHALA",
    Age: 23
}

// normal way of call
obj.fun1("Pa1", "Pa2");

// 1. call -> we can change the "this" of the obj.
// call will be available on every function
// what happens in the call is ->  this of obj will be replaced by this of call.
//a] 

    obj.fun1.call({
        FullName: "VAMSHI",
        Age: 26
    }, "Sai", "Sathwik");

// b]

    let o2 = {
        FullName: "BHASKAR",
        Age: 54
    }

    obj.fun1.call(o2, "Pulli", "Krishna");
// 


// 2. apply -> If we want to change this -> we can use call or apply
// Its similar to call, we pass this in 1st parameter and 2nd, 3rd anyting. 
obj.fun1.apply(o2, ["Satyam", "Pulli", "Satyam"]);



// 3. Bind
// It wont be called, It will just return an function. 
let boundFunction = obj.fun1.bind(o2, "Mittu", "Vamshi", "Manga");
boundFunction("Bobby");
// str passed in boundFunction will be stored after all str in bind.