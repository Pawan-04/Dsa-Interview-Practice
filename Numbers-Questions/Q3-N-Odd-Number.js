// printing first n odd numbers
let printOdd = (n)=>{
    for(let i=0 ; i<n; i++){
        let odd = 2*i + 1                        //(2n+1) -- maths formula
        process.stdout.write(`${odd} `)
    }
    return;
}
printOdd(5)
console.log()

// odd number till nth term
let tillOdd = (n)=>{
    for(let i = 0; (2*i+1)<=n; i++){
        process.stdout.write(`${2*i+1} `)
    }
    return;
}
tillOdd(10)
console.log()

//sum of first n number  === x
let checkOddSum = (n)=>{
    let sum = 0
    for(let i=0; i<n; i++){
        sum = sum + 2*i+1
    }
    return sum;
}

let save = checkOddSum(3);
let x = 9
if(save === x) { console.log(true) }
else            {console.log(false)}