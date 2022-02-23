function anything() {
  var sum = 0;
  for (var i in arguments) {
    sum = sum + arguments[i];
  }
  return sum;
}

// anything();
// anything(10);
console.log(anything(10, 20, 30));
