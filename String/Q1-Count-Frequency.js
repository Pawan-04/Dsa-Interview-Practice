let str = 'ppawwan11  ' 
let map = new Map();

// for(let i=0; i< str.length;i++){
//     map(str[i],0 || )
//}

for(let i = 0; i< str.length; i++){

    if(map.has(str[i])){
        map.set(str[i], map.get(str[i])+1)
    }
    else{
    map.set(str[i], 1)
    }


}
console.log(map.size)
console.log(map)
