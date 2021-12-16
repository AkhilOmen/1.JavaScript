let products = [
   { name: "T-Shirt", price: 25 },
   { name: "Headphones", price: 125 },
   { name: "Keyboard", price: 75},
   { name: "Monitor", price: 200 }
]


// return names af all products in uppercase who has price >= 100

let res = products.filter( v => v.price >= 100 ).map(v => v.name.toUpperCase());
console.log( "[ " + res + " ]");
