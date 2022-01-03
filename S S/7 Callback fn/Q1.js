
let fs = require("fs");

function PrimeSeive(phandler, nphandler){

    phandler.callfortheFirsttime = true;
    nphandler.callfortheFirsttime = true;

    for( let i = 0; i < this.length; i++){

        let num = this[i];
        let isPrime = true;
        
        for( let div = 2; div * div <= num; div++){

            if(num % div == 0){
                isPrime = false;
            }

        }

        if( isPrime == true){
            phandler(num);
        }else{
            nphandler(num);
        }

    }
}

Array.prototype.sieve = PrimeSeive;

let arr = [11, 13, 15, 18, 23, 25, 32, 37];
arr.sieve(AllPrimes, AllNonPrimes);

function AllPrimes(num){

    if(AllPrimes.callfortheFirsttime == true){
        if(fs.existsSync("Primes.txt") == true){
            fs.rmSync("Primes.txt");
        }
        AllPrimes.callfortheFirsttime = false;
    }


    fs.appendFileSync("Primes.txt", num + ", ", "utf-8" );

}

function AllNonPrimes(num){

    if(AllNonPrimes.callfortheFirsttime == true){
        if(fs.existsSync("Non-Primes.txt") == true){
            fs.rmSync("Non-Primes.txt");
        }
        AllNonPrimes.callfortheFirsttime = false;
    }


    fs.appendFileSync("Non-Primes.txt", num + ", ", "utf-8");

}


