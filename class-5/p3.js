// Insertion

var numbers = [10, 20, 30, 40, 50, 60, 70];

// Insert at last
numbers.push(100);
numbers.push(200);

// Insert at first
numbers.unshift(0);
numbers.unshift(1);

console.log(numbers);

// Insert Anywhere
numbers.splice(1, 0, 500); // inserted 500 at the index number 1
numbers.splice(5, 0, 155, 220, 330, 33);
console.log(numbers);

numbers.splice(3, 2, 29995);
console.log(numbers);
