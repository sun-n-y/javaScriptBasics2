//
const car = {
  make: 'toyota',
  model: 'tacoma',
  year: '2006',
  colors: ['silver', 'black', 'gray'],
  hybrid: false,
  drive(num) {
    console.log('driving ' + num);
  },
  stop: function () {
    console.log('stop');
  },
};

console.log(car.make);
console.log(car.colors[0]);

car.drive(8);

car.stop();

console.log(car);
