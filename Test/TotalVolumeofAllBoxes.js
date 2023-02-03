//หาผลรวม คือ * วงเล็บก่อน แล้วนำมา + กัน 
//เช่น ([2, 2, 2], [2, 1, 1]) เป็น (2*2*2) + (2*1*1) = 10
//totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) -> 63
//totalVolume([2, 2, 2], [2, 1, 1]) -> 10
//totalVolume([1, 1, 1]) -> 1

function totalVolume(...boxes) {
    return boxes.reduce((a,b)=> a + b.reduce((c,d)=> c * d,1),0);
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));