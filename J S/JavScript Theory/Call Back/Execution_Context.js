// console.log(a);
// console.log(b);

// var a;
// var b;

// a = 10;
// b = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(b);

// fn();

// function fn(){
//     console.log("Okay");
// }

// fn()

// // // // // Output // // // // // 
// undefined
// undefined
// 10
// [1, 2, 3, 4, 5]
// Okay 
// Okay

// ********************************************

// // NEW

// console.log(a);
// var a;
// a = 10;
// console.log(a);

// fn();

// function fn(){
//     console.log(a);
//     var a = 10;
//     console.log(a);
// }

// fn();

// // // // // Output // // // // // 
// undefined
// 10
// undefined
// 10
// undefined
// 10

// ***************************************************

// console.log(a);

// var a = 10; 

// console.log(a);

// fn();

// function fn(){
//     console.log(a);
//     a++;
//     console.log(a);
// }
// fn();

// console.log(a);
 
// // // // // // Output // // // // // 
// undefined
// 10
// 10
// 11
// 11
// 12
// 12

// *********************************************************

// Scope of Var

// var a = 10;

// function fn(){
//     var a = 20;
//     a++;
//     console.log(a);
     
//     if(true){
//         var a = 30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);
// fn();
// console.log(a); // As soon as funtions completely runs, it will wipe out from stake and "a" will be declared to the outer environment;

// // // // // // // Output // // // // // // //
// 10
// 21
// 31
// 31
// 10

// **********************************************************************

