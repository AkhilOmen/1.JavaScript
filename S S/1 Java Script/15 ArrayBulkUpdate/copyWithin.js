let arr = [10, 20, 30, 40, 50, 60];

// 
// arr.copyWithin( idx, idx1, idx2 );
// idx1 -> Inclusive
// idx2 -> exclusive

// It will copy all the value from idx1 to idx2 and will past those value at idx

// 1.
arr.copyWithin(2, 3, 5);
console.log(arr);