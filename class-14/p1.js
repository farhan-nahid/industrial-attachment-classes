var mainArray = []

var empArray = []

empArray.push(10);
empArray.push(20);

mainArray.push(empArray);

empArray = [];
empArray.push(40);
empArray.push(50);
mainArray.push(empArray);

empArray = [];
empArray.push(50);
empArray.push(60);
mainArray.push(empArray);

// for(var i=0 ;i<mainArray.length; i++){
//     console.log(mainArray[i])
//     for(var j=0 ; j<mainArray[i].length ; j++){
//         console.log(mainArray[i][j])
//     }

// }

var array_2 = [
    [10,20],
    [30,40],
    [90,100]
];

var resultMatrix = []
for(var i=0 ;i<mainArray.length; i++){
    var empArray = [];
    // console.log(`Before Vitorer For `,empArray)
    for(var j=0 ; j<mainArray[i].length ; j++){
        // console.log(`A= ${mainArray[i][j]}\t B= ${array_2[i][j]}`);

        var sum = mainArray[i][j] + array_2[i][j];
        empArray.push(sum);
    }

    // console.log(empArray);
    resultMatrix.push(empArray);
}

console.log(resultMatrix);