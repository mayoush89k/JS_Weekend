function sumOfMin (numbers){
    var min1 = numbers[0];
    var min2 = numbers[numbers.length -1];

    //I let the pointer go through the array from the first to end and the opposite 

    for (let i = 0 ; i < numbers.length - 1; i++) {
        if(numbers[i] <= min1 && numbers[i] != min2){
            min1 = numbers[i];
        }
        if(numbers[numbers.length - i] <= min2 && numbers[numbers.length - i] != min1){
            min2 = numbers [numbers.length - i];
        }
    }
    console.log("min1 " , min1);
    console.log("min2 " , min2);
}

sumOfMin([19, 5, 42, 2, 77]);
sumOfMin([10, 343445353, 3453445, 3453545353453]);