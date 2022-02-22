// Prime not prime
var num = 25;

var prime = 0;
for(var i=2 ; i<num ; i++){
    if(num % i == 0){
        prime = 1;
        break;
    }
}

if(prime == 1){
    console.log("Not Prime");
}
else{
    console.log("Prime");
}