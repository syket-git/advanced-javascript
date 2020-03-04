function sumNumbers(){
    let arg = [...arguments];
    let sum = 0;
    for(let i = 0; i< arg.length; i++){
        let element = arg[i];
        sum = sum + element;
    }
    return sum;
}
console.log(sumNumbers(3, 4, 5, 6, 34, 53, 5634, 534));