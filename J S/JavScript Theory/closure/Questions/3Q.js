function outer(){

    let arrFn = [];

    for(var i = 0; i < 3; i++){
        function outerfn(){
            var j = i;
            return function fn(){
                console.log(j, i);
            }

        }

        arrFn.push(outerfn());

    }

    return arrFn;

}

let arrFno = outer();

arrFno[0]();
arrFno[1]();
arrFno[2]();

// Output
// 0 3
// 1 3
// 2 3