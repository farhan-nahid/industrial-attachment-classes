var matrix = [
  [5, 6, 7, 4],
  [9, 10, 0, 5],
  [5, 4, 2, 6],
];
/*
for(var bairerArray = 0 ; bairerArray<matrix.length ; bairerArray++){
    for(var vitorerArray = 0 ;vitorerArray < matrix[bairerArray].length ; vitorerArray++){
        console.log(matrix[bairerArray][vitorerArray]);
    }
}
*/

for (var row = 0; row < matrix.length; row++) {
  // console.log(matrix[row]);

  for (var column = 0; column < matrix[row].length; column++) {
    console.log(matrix[row][column]);
  }
}
