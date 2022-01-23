// String to Number

const aNum = '3.1416';
const convertedNum = Number(aNum);
console.log(typeof aNum);
console.log(typeof convertedNum);

const a = ' ';
console.log(Number(a));

const empty = '';
console.log(Number(empty));

const dump = '10 20';
console.log(Number(dump));

// Number to String

const stringNum = 20;
const convertedString = stringNum.toString();
console.log(typeof stringNum);
console.log(typeof convertedString);

// parseFloat parseInt

const anyNum = 10.0;
console.log(parseInt(anyNum));
console.log(parseFloat(anyNum));
