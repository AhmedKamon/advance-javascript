const student = [
    {id: 10, name: "kamon"},
    {id: 35, name: "bamun"},
    {id: 48, name: "famun"},
    {id: 85, name: "jamun"},
    {id: 91, name: "tamun"},
];
const names = student.map(s => s.name);
const ids = student.map(x => x.id);
const smaller = student.filter(x => x.id < 85);

console.log(smaller);