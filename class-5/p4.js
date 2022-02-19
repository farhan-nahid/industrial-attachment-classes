//  Deletion
var numbers = [10, 20, 30, 40, 50, 60, 70];

// Delete from last
numbers.pop(); // delete 70
console.log(numbers.pop()); // delete 60

// Delete from first
numbers.shift(); // delete 10

console.log(numbers);

// Delete from any Index
// arrayName.splice(indexNumber,totalElement)

numbers.splice(1, 1); // Delete 30
console.log(numbers);
