function something(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = something();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = something();
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock1());