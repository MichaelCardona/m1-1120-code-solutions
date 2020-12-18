var colors;
colors = ['red', 'white', 'blue'];

console.log('value of colors: ', colors[0]);
console.log('value of colors: ', colors[1]);
console.log('value of colors: ', colors[2]);

console.log('America is' + ' ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is' + ' ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.');

console.log('value of colors: ', colors);

var students;
students = ['Michael', 'Jennifer', 'Cynthia', 'Adrian'];

var numberofStudents;
numberofStudents = students.length;
console.log('There are' + ' ' + numberofStudents + ' ' + 'student in the class.');

var lastIndex = numberofStudents - 1;
console.log(lastIndex);

var lastStudent;
lastStudent = students[lastIndex];

console.log('The last student in the array is' + ' ' + lastStudent + '.');

console.log('value of students: ', students);
