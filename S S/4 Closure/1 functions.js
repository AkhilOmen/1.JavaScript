//  1. function can be passed in another function as a varaible.
    function outerfn(parem){
        console.log("I am outer fn, I have been called with this parem ->", parem);
        // console.log(parem);
        parem();
    }
    function chotafn(){
        console.log("I am chota fn, I have been called");
    }

    outerfn(chotafn);
// 

// 2. function reference can be stored in another varaible -> function expression
    let outerfunction = function (){
        console.log( "I am the function which is assigned to a variable");
    }
    outerfunction();
// 

// 3. return var function
    function Rvalfn(){
        return 1;
    }
    let Rval = Rvalfn();
    console.log(Rval);
// 

// 4. Similarly as we mentioned in 3, we can also return function
    function ReturnsInnerFunction(){
        console.log(" Hello I am the outer funtion which returns the inner function");
        return function inner(){
            console.log("Hello I am the Inner function");
            // return 1;
        }
    }

    let ReturnedFn = ReturnsInnerFunction();
    console.log(ReturnedFn());
// 



