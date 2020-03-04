const numbers = [2, 3, 4, 6, 7, 8];
const friends = ["syket", "sakib", "morshed", "mobarok", "mozahid"];

// Oldest Model
const output = [];
for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// New Model

const square = numbers.map(x => x * x); //Arrow Function with Map 
console.log(square);
const friendsList = friends.map((x , index) => x + index);
console.log(friendsList);


// Filter using an array

const filtering = numbers.filter(x => x > 5);
console.log(filtering);


// Find using an array

const finding = numbers.find(x => x > 5);
console.log(finding);


