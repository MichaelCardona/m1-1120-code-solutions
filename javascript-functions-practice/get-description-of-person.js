/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var descriptionofPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return descriptionofPerson;
}
