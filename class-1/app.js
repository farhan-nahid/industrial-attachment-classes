const calc = (num) => {
  if (num >= 80) {
    console.log('You got A+');
  } else if (num > 70 || num <= 79) {
    console.log('You got A');
  } else if (num >= 60 || num <= 69) {
    console.log('You got A-');
  } else if (num >= 50 || num <= 59) {
    console.log('You got B');
  } else if (num >= 40 || num <= 49) {
    console.log('You got c');
  } else if (num >= 33 || num <= 79) {
    console.log('You got D');
  } else {
    console.log('You Fail');
  }
};

calc(80);

/* 
    1. framework vs library
    => libray k nijer moto kore customize kora jay kintu framework aa eta possible jay. ex: jQuery. 

    var anyNumber = 100 // camel case
    var any_number = 100 // snake case

    good practice is alawyes use one case in code.

   2. null er typeOf object. typeOf er bug 

*/
