/* const multiplicationTable = (value) => {
  for (let i = 1; i <= 10; i++) {
    console.log(value * i);
  }
};

console.log(multiplicationTable(10)); */

const studentRoll = [1, 2, 3];
const studentName = ['student1', 'student2', 'student3'];
const studentPhone = ['01801245796', '01222', '01236'];

console.log('Student Array', studentName);
// Add new Student
const newStudent = 'student4';
studentName.push(newStudent);
// console.log(studentName);

// update student
const wantUpdate = 'student2';
const updatedString = 'updatedStudent';
const updatedIndex = studentName.indexOf(wantUpdate);
studentName.splice(updatedIndex, 1, updatedString);
// console.log(studentName);

// studentPhone.push(00000);
// console.log(studentName);
