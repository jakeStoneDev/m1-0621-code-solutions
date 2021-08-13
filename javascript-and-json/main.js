var library = [
  {
    isbn: '01',
    title: 'The Best Book',
    author: 'The Best Author'
  },
  {
    isbn: '02',
    title: 'The Better Book',
    author: 'The Better Author'
  },
  {
    isbn: '03',
    title: 'The Worst Book',
    author: 'The Worst Author'
  }
];
console.log('Library Object: ', library);

var jsonLibrary = JSON.stringify(library);
console.log('JSON Library: ', jsonLibrary);
console.log('Type of jsonLibrary: ', typeof jsonLibrary);

var student = {
  number: '1',
  name: 'Jacob'
};
console.log('student object: ', student);

var jsonStudent = JSON.stringify(student);
console.log('Student object to JSON: ', jsonStudent);

var jsonStudentToObject = JSON.parse(jsonStudent);
console.log('JSON student to object: ', jsonStudentToObject);
