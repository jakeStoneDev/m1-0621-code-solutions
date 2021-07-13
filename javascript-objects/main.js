var myInfo = {
  fistName: 'Jacob',
  lastName: 'Stone',
  age: 25
};

var student = myInfo;
var fullName = myInfo.fistName + ' ' + myInfo.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = (false);
student.previousOccupation = ('Woodworker');

console.log('value of studet.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var favCar = {
  make: 'DeLorean',
  model: 'DMC',
  year: 1982
};

var vehicle = favCar;

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('vehicle["color"]: ', vehicle['color']);
console.log('vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log(vehicle);

var petObj = {
  name: 'Taylor',
  type: 'German Shepherd mix'
};
var pet = petObj;

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
