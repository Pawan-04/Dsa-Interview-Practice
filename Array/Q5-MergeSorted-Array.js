let a = [2,5,5,7,16,0,0,0,0,0,0]
let b = [1,4,5,55,70] 
let i = 4
let k = a.length-1;
let j = b.length-1;
                        
while(i>=0 && j>=0){
    if(b[j] > a[i]){
        a[k] = b[j--];
    }
    else{
        a[k] = a[i--];
    }
k--;
}

if(j>=0){
    while(k>=0){
        a[k--] = b[j--];
    }
}

console.log(a)

