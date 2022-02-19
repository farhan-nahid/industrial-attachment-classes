var current_bill = 1450;
var gas_bill = 1800;
var water_bill = 700;
var telephone_bill = 5000;
var internet_bill = 500;
var tv_bill = 250;

if (current_bill >= 1 && current_bill <= 400) {
  var current_bill2 = current_bill + 5;
} else if (current_bill >= 401 && current_bill <= 1500) {
  var current_bill2 = current_bill + 10;
} else if (current_bill >= 1501 && current_bill <= 5000) {
  var current_bill2 = current_bill + 15;
} else if (current_bill >= 5001) {
  var current_bill2 = current_bill + 25;
}

if (gas_bill * 0.01 < 30) {
  var gas_bill2 = gas_bill + gas_bill * 0.01;
} else {
  var gas_bill2 = gas_bill + 30;
}

if (water_bill * 0.01 < 30) {
  var water_bill2 = water_bill + water_bill * 0.01;
} else {
  var water_bill2 = water_bill + 30;
}

if (telephone_bill * 0.01 < 30) {
  var telephone_bill2 = telephone_bill + telephone_bill * 0.01;
} else {
  var telephone_bill2 = telephone_bill + 30;
}

var total_bill = current_bill2 + gas_bill2 + water_bill2 + telephone_bill2 + internet_bill + tv_bill;

console.log(`Current Bill: ${current_bill} /=
Gas Bill: ${gas_bill} /=
Water Bill: ${water_bill} /=
Telephone Bill: ${telephone_bill} /=
Internet Bill: ${internet_bill} /=
Tv Bill: ${tv_bill} /=
---------------------
Total Bill: ${total_bill}`);
