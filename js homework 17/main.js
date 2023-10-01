
let students = [
    {
        name: "baxtzod",
        age: 15,
        isMarried: false,
        hair_color: "blue"
    },
    {
        name: "islom",
        age: 15,
        isMarried: false,
        hair_color: "darkbrown"
    },
    {
        name: "safir",
        age: 15,
        isMarried: false,
        hair_color: "lisiy"
    },
    {
        name: "abdumanon",
        age: 13,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "xojimurod",
        age: 16,
        isMarried: true,
        hair_color: "pink"
    },
    {
        name: "aziza soliyeva",
        age: 15,
        isMarried: true,
        hair_color: "green"
    },
    {
        name: "aziza",
        age: 15,
        isMarried: false,
        hair_color: "skyblue"
    },
    {
        name: "ismoil",
        age: 12,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "artyom",
        age: 14,
        isMarried: false,
        hair_color: "purple"
    },
    {
        name: "abdukhafiz",
        age: 17,
        isMarried: false,
        hair_color: "white"
    },
    {
        name: "bobur",
        age: 18,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "shoxa",
        age: 17,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "alSafir",
        age: 15,
        isMarried: true,
        hair_color: "orange"
    },
]

//  Студенты отсортированные по нарастанию их возраста
students.sort((a, b) => a.age - b.age)

console.log(students);

//   Женатые и не женатые студенты
let marriedStudents = students.filter(student => student.isMarried).map(student => student.name)
let bachelorStudents = students.filter(student => !student.isMarried).map(student => student.name)

 console.log(marriedStudents);
 console.log(bachelorStudents);

    // Самый старший и самый младшиий студент
 let oldestStudent = students.reduce((prev, current) => (prev.age > current.age) ? 
 prev : current).name
 let youngestStudent = students.reduce((prev, current) => (prev.age < current.age) ?
 prev : current).name
 
 console.log(oldestStudent);
 console.log(youngestStudent);






