function summation (number){
    let result = 0;
    for(let i = 1 ; i <= number ; i++){
        result +=i;
    }
    return result;
}

console.log(2 , " -> " , summation(2));
console.log(8 , " -> " , summation(8));