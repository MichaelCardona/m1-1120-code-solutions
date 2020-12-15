var student = {
  firstName: 'Michael',
  lastName: 'Cardona',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Full Name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Graphic designer';

console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Tacoma',
  year: 2018
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;

console.log('Color:', vehicle.color);
console.log('Is convertible:', vehicle.isConvertible);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'King',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
