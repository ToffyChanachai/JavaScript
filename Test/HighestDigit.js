//หาตัวเลขที่มีค่ามากที่สุดในจำนวนนั้น
//highestDigit(379) -> 9
//highestDigit(2) -> 2
//highestDigit(377401) -> 7

function highestDigit(num) {
    var digits = [];
    while (num != 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    return Math.max(...digits);
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
