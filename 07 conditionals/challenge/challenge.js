//
const person1 = {
  name: 'polo',
  age: 18,
  status: 'resident',
};
const person2 = {
  name: 'yolo',
  age: 17,
  status: 'tourist',
};

if (person2.age >= 18 && person2.status === 'resident') {
  console.log('true');
} else {
  console.log('false');
}
