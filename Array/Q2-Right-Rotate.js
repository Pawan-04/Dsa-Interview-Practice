//1234
let rightRotate = (arr)=>{
    let temp = arr[arr.length-1]
    for(let i = arr.length-1; i>0;i--){
        arr[i] = arr[i-1]
    }
    arr[0] = temp
return arr;
}

console.log( rightRotate([1,2,3,4]) )