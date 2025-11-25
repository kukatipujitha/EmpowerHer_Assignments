function processStudents (students){
    const studentMarks= students.filter(student => student.marks>60);
    return studentMarks;
}
let students1=[
    { name: "Pujitha", marks: 85 },
    { name: "Ravi", marks: 45 },
    { name: "Anu", marks: 72 }
]
console.log(processStudents(students1))