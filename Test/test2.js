function findMax(num) {
    var digits = [];
    while (num != 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    return Math.max(...digits);
}

console.log(findMax(387));
console.log(findMax(2));
console.log(findMax(377401));
