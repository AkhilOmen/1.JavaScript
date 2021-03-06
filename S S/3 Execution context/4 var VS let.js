
// 1. var
    // var can be redeclared or reassigned -> Which is not a good thing b/c of this bug may be created.
    // Function scope
    // You can access the var variable before declaration.
    // var a;
    // a = 10;
    // var a;
    // a = 20
    // console.log(a);
// 

// 2. let
    // let can't be redeclared or reassigned
    // Its a block scope i.e in between the brackets {}
    // You can't access the let varaible before declaration b/c It will in Temporal dead Zone
    
    // case - 1
        // let a;
        // console.log(a);
        // undefined
        // It won't throw any error
    //

    // case - 2
        // console.log(b);
        // let b = 10;
        // It will throw an error -> Cannot access 'b' before initialization
    // 

    // case - 3
        // let c = 10;
        // console.log(c);
        // let c = 20; // It will throw an error ->  Identifier 'c' has already been declared
        // console.log(c);
    // 

//

// Question ->

    function fn(){
        console.log("Before declaration", b);  
        var b;
        console.log("After declaration", b);    
        b = 10;
        if(true){
            // It willnot throw an error even If we declare b again iwth let b/c we are using let in b/w block i.e {}
            let b = 30;
            console.log("After initialization", b);
        }
        console.log("After initialization", b);
        
    }
    fn();

    // Output
    // Before declaration undefined
    // After declaration undefined
    // After initialization 30
    // After initialization 10

// 
