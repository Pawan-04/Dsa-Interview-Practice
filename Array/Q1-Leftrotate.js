// Inefficient - we are swapping not rotating
let rotateLeft = (arr) =>{
    for(let i =0; i<arr.length-1; i++){     //  < arr.length-1
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        // console.log(arr)
    }
return arr;
}
console.log(    rotateLeft([1,2,3,4])   )


// correct way-----------------
let correctRotate = (arr)=>{
    let temp = arr[0]
    for(let i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1];
        // console.log(arr)
    }
    arr[arr.length-1] = temp;
return arr;
}

console.log( correctRotate([1,2,3,4])   )