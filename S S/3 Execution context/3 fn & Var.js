

//  Question 1.

    // // This 'b' memory will be created in Global Execution context,
    // console.log("Before declaration", b);  
    // var b;
    // console.log("After declaration", b);
    // b = 10;

    // //  This 'b' memory will be created in Execution context created after the fn() is called.
    // function fn(){
    //     console.log("Before declaration", b);  
    //     var b;
    //     console.log("After declaration", b);    
    //     b = 30;
    //     console.log("After initialization", b);
    // }
    // console.log("........................................................................... function will be called")
    // fn();
    // console.log("............................................................................... function executed");

    // // After the fn() executed the execution will be wipped off from the stack 

    // console.log("After initialization", b); //This b is global execution context b

// 


// Question 2.

    // var is a function scope.

    // function fn(){
    //     console.log("Before declaration", b);  
    //     var b;
    //     console.log("After declaration", b);    
    //     b = 10;
    //     if(true){
    //         var b = 30
    //         console.log("After initialization", b);
    //     }
    //     console.log("After initialization", b);
        
    // }
    // fn();
// 

