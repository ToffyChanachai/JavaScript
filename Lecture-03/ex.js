//Program for checking for missing digit numbers [0-9] in a string
//example: 123456789 has  missing digit is 0 
//example: 53657687691428890 is not missing any digit
//example: 1981023568910 has missing digits 4, 7


const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";


function missingDigits(numStr) {
    var digits = [];
    let NotMissing = "is not missing any digit";
    let Missing = "has missing Digit = ";
    let minNum = 0;
    let maxNum = 9;

    for(let i = minNum; i < maxNum; i++) {
        if (numStr.indexOf(i) < 0) {
        digits.push(i); 
        }
        //else return digits = "No missing";
    }
    switch (numStr) {
        case numStr2: return `${numStr} ${NotMissing}`;
        case numStr1: return `${numStr}  ${Missing} ${digits}`;
        case numStr3: { 
            let output = digits[0] + ', ' + digits[1]
            return `${numStr}  ${Missing} ${output}`;
        }
    }
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));