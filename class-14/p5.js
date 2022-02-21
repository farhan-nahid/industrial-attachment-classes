var obj = {
    firstName : "Nahid",
    lastName: "Hasan",
    age: 20
}

// for(var i of obj){
//     console.log(i);
// }

for(var i in obj){
    console.log(obj[i]);
}