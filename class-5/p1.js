var empArray = []; // e,pty array declare

var new_array = [1, 2, 'Hello', true, 5, 'okay'];

console.log(new_array[2][3]);

// Find the index of an element indexOf
var index = new_array.indexOf('Hello');
console.log(index);

// find the length of an array
console.log(`Length of the array is : ${new_array.length}`);

// -------------------------------
// Don't use this to merge array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var new_array = arr1.concat(arr2);
console.log(new_array);
