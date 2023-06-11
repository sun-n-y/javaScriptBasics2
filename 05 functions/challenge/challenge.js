//
function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

const sum = function (subTotal, tax) {
  return subTotal + tax;
};

var oder1 = calculateTotal(10, 5);
var oder2 = calculateTotal(20, 5);
var oder3 = sum(30, 5);

console.log([oder1, oder2, oder3]);
