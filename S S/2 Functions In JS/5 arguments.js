// Java Script is not an Object Oriented Programming language
// Its is Multi Paradise Language
// means -> It follo both OOPS & Functional Programming.


function fn(parem1, parem2){
    console.log("Inside fn", parem1, parem2);
}

// 1.
fn("Hello", "Hi"); 
// Inside fn Hello Hi

// 2.If there is something missing -> If Its dosen't return anything, It we don't pass any val, If array index out of bound -> we will get undefined(default value).
fn("Hello");
// Inside fn Hello undefined

// 3.
fn("");
// Inside fn undefined

// 4. 
fn("Hello", "Hi", "Bye");
// Inside fn Hello Hi



// arguments......................................
// -> The parameter passed in fn() will be stored in arguments array with proper index.

function argfn(){
    console.log(arguments);
}
argfn("Hello", "Hi");
argfn("Hello");
argfn();
argfn("Hello", "Hi", "Bye");

// This is the Output -> If you can see Arguments is an array where it will store all the parems with indices...
// [Arguments] { '0': 'Hello', '1': 'Hi' }
// [Arguments] { '0': 'Hello' }
// [Arguments] {}
// [Arguments] { '0': 'Hello', '1': 'Hi', '2': 'Bye' }


