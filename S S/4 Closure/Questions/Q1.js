
// Question 1 ->
    // function outer(){
    //     var arr = [];
    //     for( var i = 0; i < 3; i++){
    //         arr.push(function (){
    //             console.log(i);
    //         });
    //     }
    //     return arr;
    // }

    // // We expect the ans to be
    // // 0
    // // 1
    // // 2

    // // But we will get
    // // 3
    // // 3
    // // 3

    // // The i value will be stored in closer.
    // // when we call arr[0](), It will call the IIFEE function and It will take i from closure which is set to i = 3

// 


// Question 2 ->    
    function outer(){
        var arr = [];
        for( var i = 0; i < 3; i++){
            function outer1(){
                // The j value will be stored in closure of outer1 for every function.
                var j = i;
                return function(){
                    console.log(j);
                }
            }
            arr.push(outer1());
        }
        return arr;
    }

    // // ans ->
    // // 0
    // // 1
    // // 2 

// 

// Very Important point ->

// The major difference b/w question1 and question2 is that,
// In Question 1 we are not calling any function inside the outer function, we are just storing the function address in the arr..
// Where as in Question 2, we are calling a function in outer function i.e outer1. 
// b/c of this the closue will store the value of j for every function address that is stored in arr.  



console.log("Before outer function executed");
let arr = outer();
arr[0]();
arr[1]();
arr[2]();

console.log("After outer function executed");

// Pending 
// 3 more cases -> let -> 0, 1, 2 ; let will also not work ; IIFEE .

