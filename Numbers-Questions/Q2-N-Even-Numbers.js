// First 5 even numbers

let printEven = ()=>{
    for(i=1; i<=5; i++){
        process.stdout.write(2*i+" ")
    }
    return;
}
printEven()

// Sum of First Five even Number
let printSum = ()=>{
    let sum = 0;
    for(let i=1; i<=5; i++){
        sum = sum + 2*i;
    }
    return sum;
}
console.log("\n", printSum()  );

// Check number is even or not
let checkEvenorNot = (num)=>{
    if(num % 2 === 0){
        console.log(num + " is even")
        return;
    }
        console.log(num + " is odd");
}
checkEvenorNot(8);
checkEvenorNot(5);

