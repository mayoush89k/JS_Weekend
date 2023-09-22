function fibonacci(){
    const fib = [0,1];
    for(let i = 1 ; i < 12 ; i++){
        fib.push(fib[i - 1] + fib[i])
    } 
    return fib;
}

console.log(fibonacci());