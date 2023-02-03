//แปลงวินาทีเป็นชั่วโมงแต่เป็นเวลา AM/PM มีถึงแค่ 12
//digitClock(5025) -> "1:23:45"
// 5025 seconds is 1 hour, 23 mins, 45 sec.
//digitClock(61201) -> "17:0:1"
// No AM/PM. 24h format.
//digitClock(87000) -> "00:10:0"
// It's 00:10 next day.

function digitClock(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
  
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

   
    if (hours >= 24) {
        result = `"00:${minutes}:${seconds}"\n// It's 00:${minutes} next day.`;
        return result;
    } 
    else if (hours > 12) {
        result = `"${hours}:${minutes}:${seconds}"\n// No AM/PM. 24h format.`;
        return result;
    }
    else {
        result = (`"${hours}:${minutes}:${seconds}"\n// ${totalSeconds} seconds is ${hours} hour, ${minutes} mins, ${seconds} sec.`);
        return result;
    }
    
}
  
console.log(digitClock(5025));
console.log(digitClock(61201));
console.log(digitClock(87000));