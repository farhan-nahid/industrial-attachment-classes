function addNumber(num1, num2) {
  var sum = num1 + num2;
  // console.log(sum);
  return sum;
}

var result = addNumber(5, -4);

if (result == 0) {
  console.log('Nothing to show');
} else if (result > 10) {
  console.log(' It is bigger than 10');
} else {
  console.log('Simple');
}
