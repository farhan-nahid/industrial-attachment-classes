var mobile = 100000;
var hp = 50000;
var prod1 = 20000;
var prod2 = 30000;
var prod3 = 500;

var totalTaka = mobile + hp + prod1 + prod2 + prod3;

console.log(totalTaka);

if (totalTaka > 50000) {
  console.log(`You get 50%`);
} else if (totalTaka > 20000) {
  console.log(`You get 20%`);
} else if (totalTaka > 10000) {
  console.log(`you get 10%`);
} else {
  console.log(`Thank you`);
}
