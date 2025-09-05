let secondLargest = (arr)=>{
    let max = -Infinity;
    let Smax = -Infinity;
    for(let i=0; i<arr.length;i++){
        
        if(arr[i]>max){
            Smax = max;
            max = arr[i]
        }
        else{
            if((arr[i]>Smax) && (arr[i] < max) ){
                Smax = arr[i]
            }
        }
    }
return Smax;
}

console.log(    secondLargest([1,2,5,9,7])    )