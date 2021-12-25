let products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75},
    { name: "Monitor", price: 200 }
 ]
 
 
 // change products name to uppercase who has price >= 100 and LowerCase if price < 100 
 
 let res = products.map(v => v.price >= 100 ? v.name.toUpperCase() : v.name.toLowerCase() );
 console.log( "[ " + res + " ]");
 