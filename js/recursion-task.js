'use strict';

function recursiveOddSumTo(number, oddSum = 0){
    if(number <= 0){
        return oddSum;
    } else {
        (number % 2 === 1) ? oddSum += number : null;
        return recursiveOddSumTo(number-1, oddSum);
    }
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(9));
console.log(recursiveOddSumTo(10));
console.log(recursiveOddSumTo(100));
console.log(recursiveOddSumTo(-100));