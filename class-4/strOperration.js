const strTrim = '           aa bb                ';
console.log(strTrim.trim());

const myName = '          farhan1234          ';
const newMyName = myName.trim();

console.log(newMyName.toLocaleLowerCase());
console.log(newMyName.toUpperCase());

const countryName = 'Bangladesh';
console.log(countryName.slice(2, 6));
console.log(countryName.substr(3, 3));
console.log(countryName.substring(0, 3));

const programingLang = 'I love Python. ok';
console.log(programingLang.replace('Python', 'JavaScript'));
console.log(programingLang.replace(/python/i, 'JavaScript'));

/*  

when we need to show exact string without space that time we use trim method

 In JavaScript, only objects and arrays are mutable, not primitive values. ... Immutables are the objects whose state cannot be changed once the object is created. Strings and Numbers are Immutable
 
*/

const userName = 'Amir';
const id = '006';

console.log(`Your name is ${userName} & id = ${id}`);

const newLine = 'i am a line \n Line Two \n line three';
const backTikLine = `I am a line.
                            two
                                three`;
