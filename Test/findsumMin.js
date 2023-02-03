//รวมค่า 2 ตัวที่น้อยที่สุดใน array นั้นๆ โดยไม่มีเอาค่า ติดลบ
//numTwoSmallestNums([19, 5, 42, 2, 77]) -> 7
// คือ 2 + 5 =7
//numTwoSmallestNums([10, 343445253, 3453445, 3453545253453]) -> 3453455
// คือ 10 + 3453445 = 3453455
//numTwoSmallestNums([2, 9, 6, -1]) -> 8
// คือ 2 + 9 = 8 
//numTwoSmallestNums([3603, 2902, 3951, -475, 1617, -2385]) -> 4519
// คือ 1617 + 2902 = 4519

function numTwoSmallestNums(num) {
    let sum = 0;
    num.sort((a, b) =>  b - a); //มากไปน้อย 
    //ไม่เอาค่าติดลบ
    let i = num.length
        for (i; i--;) {
            if ( num[i] < 0 ){
                num.pop();
            }
    }
    num.sort((a, b) =>  a - b); //น้อยไปมาก
    sum = num[0] + num[1];
    return sum;
}

console.log(numTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(numTwoSmallestNums([10, 343445253, 3453445, 3453545253453]));
console.log(numTwoSmallestNums([2, 9, 6, -1]));
console.log(numTwoSmallestNums([3603, 2902, 3951, -475, 1617, -2385]));