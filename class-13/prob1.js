// Odd number sum , first 15

var count = 0;
var sum = 0;
// multiplication
// var result = 1;

for (var i = 1; ; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
    count++;
  }

  if (count == 15) {
    // stop
    break;
  }
}

console.log(sum);
