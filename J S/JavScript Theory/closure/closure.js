
function outer() {
    let outerVal = 10;
    console.log("Outer Function is Called");

    return function Innerfn(secondVal) {
        console.log("Inner function is called");
        return outerVal + secondVal;
    }

}

let InnerFnReff = outer();
console.log("Between");
let rVal = InnerFnReff(20);
console.log("rVal: " + rVal);