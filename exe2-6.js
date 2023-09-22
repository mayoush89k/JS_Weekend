const centuryFromYear = (year) => {
    let century = (year / 100).toFixed(); 
    if(year % 100 ){
        century++;
    }
    return century;
}

console.log(1705 , " -> ", centuryFromYear(1705));
console.log(1900 , " -> ", centuryFromYear(1900));
console.log(1601 , " -> ", centuryFromYear(1601));
console.log(2000 , " -> ", centuryFromYear(2000));
