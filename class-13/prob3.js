/*

    #
    # - 
    # - #
*/
// Do it with array
var jabe = 20;
var str = '';
for (var i = 1; i <= jabe; i++) {
  if (i % 2 != 0) {
    str = str + '# ';
  } else {
    str = str + '- ';
  }
}

console.log(str);
