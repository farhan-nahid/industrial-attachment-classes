// Check A Number is Positive / Negative

var num = 'aa';

if (!isNaN(num)) {
  if (num > 0) {
    console.log(`${num} is Positive`);
  } else if (num < 0) {
    console.log(`${num} is Negative`);
  } else {
    console.log(`${num} is zero`);
  }
} else {
  console.log(`It's not a valid Number`);
}
