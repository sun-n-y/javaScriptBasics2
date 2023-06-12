// //
// // localStorage.setItem('name', 'karen');
// // sessionStorage.setItem('name', 'sunny');

// localStorage.setItem('name', 'jupiter');
// localStorage.setItem('friend', 'saturn');
// localStorage.setItem('job', 'pluto');
// localStorage.setItem('address', 'venus');

// const name = localStorage.getItem('job');

// console.log(name);

// localStorage.removeItem('job');

// localStorage.clear();

// const peoples = ['f', 's', 'h', 'o'];

// localStorage.setItem('array', JSON.stringify(peoples));

// const values = JSON.parse(localStorage.getItem('array'));
// console.log(values[1]);

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);
fruits.push('pple');
// localStorage.setItem('fruits', JSON.stringify(fruits));
