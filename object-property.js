const students = [
    {id:1, name:"syket"},
    {id:2, name:"sakib"},
    {id:3, name:"mobarok"},
    {id:4, name:"mozahid"}
];


// Oldest Model

const name = [];

for(let i = 0; i<students.length; i++){
    const element = students[i];
    const studentName = element.name;
    name.push(studentName);
}
console.log(name);



// Newest Model of ES6

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const filterId = students.filter(s => s.id > 2);
const findId = students.find(s => s.id > 2);
console.log(findId);