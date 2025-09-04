// count number of digits in num
//
let countDigit = (num)=>{
    let count = 0;
    let reverse = 0;

    while(num>0){           
        count = count+1;                //count

        reverse = reverse*10 + num%10    //reverse

        num = Math.floor(num/10);       //count
    }
    return [count,reverse];
}

console.log(countDigit(123))