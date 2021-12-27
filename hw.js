//targil 1
function Sum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
    }
    return sum;
}

// targil 2
function Mult(arr){
    let mult = 1;
    for (let index = 0; index < arr.length; index++) {
        mult *= arr[index]
    }
    return mult;   
}

//targil 3 
function sumOfIndexes(num){
    let sum = 0;
    while (num >= 1) {
        sum += num%10;
        num = parseInt(num/10);
    }
    return sum;
}

//targil 4
let arr = [12,22,33,55,100,2,90];
function MinAge(arr){
    let min = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < min){
            min = arr[index];
        }
    }
    return min;
}

function MaxAge(arr){
    let max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > max){
            max = arr[index];
        }
    }
    return max;
}

function ageCalculator(arr){
    let ages = Sum(arr);
    return ages;
}

function Averege(arr){
    let sum = Sum(arr);
    return sum/arr.length
}
//targil 5
// let userInputs = [];
// let i = 0
// while (i < 3) {
//     let input = prompt("enter a number");
//     if(input !== null && input !== "" && !isNaN(parseInt(input))){
//         userInputs.push(parseInt(input));
//         i++
//     }
// }
// console.log(`Mult Of All = ${Mult(userInputs)}`);
// console.log(`Sum Of All = ${Sum(userInputs)}`);
// for (let index = 0; index < userInputs.length; index++) {
//     if(userInputs[index]%2){
//         console.log(`${userInputs[index]} is Odd`);
//     }
//     else{
//         console.log(`${userInputs[index]} is Even`);
//     }
    
// }