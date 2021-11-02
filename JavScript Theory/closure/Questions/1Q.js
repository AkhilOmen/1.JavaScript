
// function outer(){
//     let arrFn = []
//     for( var i = 0; i < 3; i++){
//         arrFn.push(function fn(){
//             consolo.log(i);
//         })
//     }
// }

// let arrFn = outer();

// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// Output
// 3
// 3
// 3

// ***** Imp // The Only difference between the above Q and below Q is var and let 
// var Val will be saved in localStorage.
// let Val are stored in Block which will be in outerStorage.

// function outer(){
//     let arrFn = []
//     for( let i = 0; i < 3; i++){
//         arrFn.push(function fn(){
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
    
// let arrFno = outer();

// arrFno[0]();
// arrFno[1]();
// arrFno[2]();

// Output
// 0
// 1
// 2
