'use strict';

function iterativeOddSumTo(number){
    let oddSum = 0;
    for(let i = 0; i <= number; i++){
        (i % 2 === 1 && Math.sign(i) === 1) ? oddSum += i : null;
    }
    return oddSum;
}

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(9));
console.log(iterativeOddSumTo(10));
console.log(iterativeOddSumTo(100));
console.log(iterativeOddSumTo(-100));