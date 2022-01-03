
function EnterFirstName(first){
    return function EnterLastName(last){
        return function EnterYourAge(age){
            return function PrintDetails(){
                console.log( "Your Name is -> " + first + " " + last + " and your age is -> " + age);
            }
        }
    }
}

console.log("Please enter you First name");
let LastNamefn = EnterFirstName("Akhil");
console.log("Please enter you Last Name");
let YourAgefn = LastNamefn("Bichala");
console.log( "Please enter your age");
let PrintDetailsfn = YourAgefn(23);

console.log("Do some randome stuff.......e.g payment for subscription and e.t.c");


PrintDetailsfn();
