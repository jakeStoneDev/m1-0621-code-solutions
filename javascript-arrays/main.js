var colors = [
  'red',
  'white',
  'blue'
];

console.log('colors 0 index value: ', colors[0]);
console.log('colors 1 index value: ', colors[1]);
console.log('colors 2 index value: ', colors[2]);

console.log('America is', colors[0] + ' ' + colors[1] + ' ' + colors[2]);

colors[2] = 'green';
console.log('Mexico is', colors[0] + ' ' + colors[1] + ' ' + colors[2]);
console.log(colors);

var students = [
  'John',
  'Jacob',
  'Jiggleheimer',
  'Smith'
];

var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class');

var lastIndex = students.length - 1;

var lastStudent = students[lastIndex];

console.log('The last student in the array is ', lastStudent);
console.log('value of students: ', students);
