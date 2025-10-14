let arr = [2,3,0,-3,1]

for(let i = 0; i<arr.length; i++){
    let j = i-1;
    while(j>=0 && arr[j]>arr[j+1]){
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
        j--
    }
}

console.log(arr)