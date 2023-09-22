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

console.log('+' , 4 ,7 ," -> ", basicOP('+' , 4 ,7));
console.log('-' , 15 ,18 ," -> ", basicOP('-' , 15 ,18));
console.log('*' , 5 ,5 ," -> ", basicOP('*' , 5 ,5));
console.log('/' , 49 ,7 ," -> ", basicOP('/' , 49 ,7));