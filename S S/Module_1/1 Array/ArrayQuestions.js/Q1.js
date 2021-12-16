let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let ans = [];

while(arr.length != 0){
    let ele = arr.pop();
    if(  ele % 2 == 0){
        ans.unshift(ele);
    }else{
        ans.push(ele);
    }
}

console.log(ans);