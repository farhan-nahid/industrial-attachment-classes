// return statement

function Fun() {
  var x = 10;
  var y = 15;
  var sum = x + y;
  console.log(`Sum is ${sum}`);
  console.log('Before return');

  return sum;

  console.log('After return');
}

var some = Fun();

console.log(some);
