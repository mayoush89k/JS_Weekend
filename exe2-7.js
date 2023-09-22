function basicOP(operation , number1 , number2) {
    switch (operation) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
    
        default:
            return "operation not exists"
    }
}

console.log(basicOP('+' , 4 ,7));
console.log(basicOP('-' , 15 ,18));
console.log(basicOP('*' , 5 ,5));
console.log(basicOP('/' , 49 ,7));