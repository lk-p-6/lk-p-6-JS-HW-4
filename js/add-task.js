'use strict';

function isXOtrue(str){
    let isEqual = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i).toLowerCase() === "o"){
            isEqual++;
        } else if(str.charAt(i).toLowerCase() === "x"){
            isEqual--;
        }
    }
    return isEqual === 0;
}

console.log(isXOtrue("ooxx")); 
console.log(isXOtrue("xooxx")); 
console.log(isXOtrue("ooxXm"));
console.log(isXOtrue("zpzpzpp")); 
console.log(isXOtrue("zzoo")); 