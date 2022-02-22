// Co prime

var num1 = 21;
var num2 = 22;

if (num1 % 2 == 0 && num2 % 2 == 0) {
  console.log('No co-prime');
} else {
  var temp = 0;
  if (num1 > num2) {
    var breakingPoint = num2;
  } else {
    var breakingPoint = num1;
  }

  for (var i = 3; i < breakingPoint; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      temp = 1;
      break;
    }
  }

  if (temp == 0) {
    console.log('Co prime');
  } else {
    console.log('Not Co-prime');
  }
}
