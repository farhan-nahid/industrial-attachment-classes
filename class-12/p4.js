var totalNumber = 0;
for (var i = 1; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
    console.log(i);
    totalNumber++;
  }
}

console.log('Total ' + totalNumber);
