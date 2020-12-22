function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResults', convertMinutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetingResult = greet('Beavis');

console.log('Greet:', greetingResult);

function getArea(width, height) {
  var area = 17 * 32;
  return area;
}

var areaResult = getArea(17, 32);

console.log('getareaResult', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var firstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('firstNameResult', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last Element:', getLastElementResults);
