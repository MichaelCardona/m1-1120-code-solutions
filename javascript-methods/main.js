var first = 85;
var second = 94;
var third = 30;

var maximumValue = Math.max(first, second, third);

console.log('maximumValue:', maximumValue);

var heroes = ['Wolverine', 'Thing', 'Warlock', 'Magik'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero', randomHero);

var library = [
  {
    title: 'The outsiders',
    author: 'S.E. Hilton'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Shining',
    author: 'Stephen King'
  }
];

var lastBook = library.pop();

console.log('lastBook', lastBook);

var firstBook = library.shift();

console.log('firstBook', firstBook);

var js = {
  title: 'Eloquent JavaScript',
  author: 'Marijn Haverbeke'
};

var css = {
  title: 'CSS in Depth',
  author: 'Keith J. Grant'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library', library);

var fullName = 'Michael Cardona';

var firstandLastName = fullName.split(' ');

console.log('firstandLastName', firstandLastName);

var firstName = firstandLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName', sayMyName);
