const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'stringed out');

// Styled
console.log('%c I am some great text', 'font-size:40px; background: blue;');

// warning!
console.warn('Warning Message!');

// Error :|
console.error('Error Message');

// Info
console.info('info not working')

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('woops'), 'That is wrong');
console.assert(1 === 2, 'this is wrong');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`)
});

// counting
console.count('Jeff');
console.count('Jeff');
console.count('Mark');
console.count('Jeff');
console.count('Jeff');
console.count('Mark');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/jsc215')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data);
  })

  //table
  console.table(dogs)
