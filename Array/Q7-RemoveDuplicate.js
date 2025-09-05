           // USING SET

// let removeDuplicate = (arr)=>{
//     const set = new Set()
//     for(let i=0; i<arr.length;i++){
//         set.add(arr[i])
//     }
// return set;
// }

//----------------------------------------------------------------------------------

let removeDuplicate = (arr)=>{
    let j=0;
    for(let i = 1; i<arr.length; i++){
        if(arr[i] !== arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }
return arr.slice(0,j+1)
}

console.log(    removeDuplicate([1,1,1,2,2,2,3,4,5,5])    )