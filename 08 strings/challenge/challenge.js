//
function fullName({ lastName, firstName }) {
  const name = `${firstName} ${lastName}`;
  return name.toUpperCase();
}

console.log(fullName({ firstName: 'polo', lastName: 'ralph' }));
