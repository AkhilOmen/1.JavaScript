
// function fun(p1, p2){
//     console.log(p1, p2);
// }

// fun();
// fun(10, 20);
// fun(10, 20, 30);

// Output
// undefined undefined
// 10 20
// 10 20


// but what if we want to access 30? how we can get 30?
// This is arguments are used ->
function fun1(){
    console.log(arguments); // This will print a array like thing but not an array. Therefore we should convert arguments into array for furthur uses.

    let valArr = Array.from(arguments);
    let sq = valArr.map(v => v * v);
    console.log(sq);
    
}

fun1(10, 20, 30, 40)



