// let obj = {};

let cap = {
    
    first_name: "Steve",
    last_name: "Rogers",
    friends: ["Tony","Bruce", "Nate"],
    age: 34,
    isAvanger: false,
    Sayhi: function(){
        console.log("cap say's hai");
    },
    address: {
        state: "New York",
        city: "NY city",
    },
}

// console.log(cap.first_name);
delete cap.address.city;

console.log(cap.address);
cap.address = {
    city:"NY City",
}
console.log(cap.address);