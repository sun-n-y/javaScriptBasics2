//

// const bob = 'bob';

// function hello(name, two) {
//   console.log(two);
//   console.log('Hello there ' + name);
// }

// hello('bob', 'p');
// hello(4, 'p');
// hello(bob, 'bob');

const w = calculate('2');
const h = calculate(0);

function calculate(value) {
  console.log('the value in cm is : ' + value * 2.54 + ' cm');
  return value;
}

const dim = [w, h];
console.log(dim);
