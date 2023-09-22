const centuryFromYear = (year) => {
    let century = (year / 100).toFixed(); 
    if(year % 100 ){
        century++;
    }
    return century;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
