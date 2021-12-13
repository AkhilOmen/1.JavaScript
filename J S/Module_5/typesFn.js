// function fn(para){
//     console.log("para is", para);
// }

// // When values are passed they wil be directly printed they wont be stored in any address
// fn(10);
// fn("Okay");

// // When reference values are passed they will be stored in the address and then they will be called
// fn([1, 2, 3, 4, 5]);
// fn({ name: "Akhil" });

// Main point // In JavaScript fuctions are treaded as variables.

// // There are 4 types of functions

// // 1.
// // function fn(){
// //     console.log("Iam a fn Statement");
// // }
// // //Statement
// // fn();

// // 2.
// // let exp = function fn(){
// //     console.log(" I am a fn Expression ")
// // }
// // //Expression
// // exp(); // when we can exp() function will be called

// // 3. 
// // // IIFE -> Immediately invoke function expression
// // (function fn(){
// //     console.log("I am a IIFE ");
// // })();

// // // 4. //Arrow Function
// // let arrowFn = () => {
// //     console.log("I am a arrow function");
// // };
// // arrowFn();