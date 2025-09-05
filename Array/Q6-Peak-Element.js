// let arr = [1,2,20,4,1,0];

// let max = -Infinity;
// let index = -1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//         index = i;
//     }
// }

// console.log(index) 

//          Binary search-  best way way-----2
let arr = [1,3,6,10,90,15,30]
    let left = 0; right = arr.length-1;
    while(left < right){
        let mid  = Math.floor((left+right)/2);
        if(arr[mid] < arr[mid+1]){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
console.log(left)