// Q3 -> remove all prime numbers by using splice

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for( let i = arr.length - 1; i >= 0; i--){
    if( PrimenumberCheck(arr[i]) == true){
        arr.splice(i, 1);
    }
}

displayArr(arr);

function PrimenumberCheck(a){
    
    for( let i = 2; i * i <= a; i++){
        if( a % i == 0 && a != 2){
            return false;
        }
    } 

    return true;
}

function displayArr(arr){
    console.log("..............................................");
    console.log( arr + " = " + arr.length );
    console.log("..............................................");
}