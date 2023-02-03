//หาค่าแบ่งครึ่ง
//ถ้าเป็นเลขคู่แบ่งได้เลย
//ถ้าเป็นเลขคี่ปัดเศษนำตัวหลังมา +1
//numberSplit(4) -> [2, 2]
//numberSplit(10) -> [5, 5]
//numberSplit(11) -> [5, 6]
//numberSplit(-9) -> [-5, -4]

function numberSplit(num){
    if (num % 2 == 0){
        num = num/2;
        return [Math.floor(num), Math.floor(num)];
    }
    else {
        num = num/2;
        return [Math.floor(num), Math.floor(num + 1)];
    }
    
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
