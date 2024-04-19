'use strict';

function isXOtrue(str){
    let number = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i).toLowerCase() === "o"){
            number++;
        } else if(str.charAt(i).toLowerCase() === "x"){
            number--;
        }
    }
    return number === 0;
}

console.log(isXOtrue("ooxx")); 
console.log(isXOtrue("xooxx")); 
console.log(isXOtrue("ooxXm"));
console.log(isXOtrue("zpzpzpp")); 
console.log(isXOtrue("zzoo")); 