function Tribonacci(trib){
    for(let i = 2 ; i < 12 ; i++){
        trib.push(trib[i - 2] + trib[i - 1] + trib[i])
    } 
    return trib;
}

console.log("Tribonacci numbers are: ", Tribonacci([0,1,1]));
console.log("Tribonacci numbers are: ", Tribonacci([1,1,1]));