
let squareSum = (n)=>{
    let evenSum = 0;
    let oddSum = 0;
    let normalSum = 0;

    for(let i=0; i<n ; i++){
        let num = i+1;
        process.stdout.write(num*num+" ");

        normalSum = normalSum + num*num;
    }
    console.log(normalSum)

    for(let i=1; i<=n ; i++){
        let num = 2*i;
        process.stdout.write(num*num+" ");

        evenSum = evenSum + num*num;
    }
    console.log(evenSum)

    for(let i=0; i<n ; i++){
        let num = 2*i+1;
        process.stdout.write(num*num+" ");

        oddSum = oddSum + num*num;
    }
    console.log(oddSum)
    


}
squareSum(5)