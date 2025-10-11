let arr = [3,2,1,4];

let sort = (arr)=>{
    
    for(let i=0; i<arr.length-1;i++){
            let min = +Infinity;
            let index = -1;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<min){
                min = arr[j]
                index = j
            }
        }
        arr[index] = arr[i]
        arr[i] = min;
    }
    return arr;
}

console.log(sort(arr))