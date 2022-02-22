// Identity Matrix

var matrix = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

var temp = 0;

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (i == j && matrix[i][j] != 1) {
      temp = 1;
      break;
    } else if (i != j && matrix[i][j] != 0) {
      temp = 1;
      break;
    }
  }
}

if (temp == 0) {
  console.log('It is an Identity Matrix');
} else {
  console.log('Not an Identity Matrix');
}
