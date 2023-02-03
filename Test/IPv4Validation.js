//ตรวจสอบ IPv4
//isVaildIP("1.2.3.4") -> true
//isVaildIP("1.2.3") -> false
//isVaildIP("1.2.3.4.5") -> false
//isVaildIP("123.45.67.89") -> true
//isVaildIP("123.456.78.90") -> false
//isVaildIP("123.045.067.089") -> true

function isVaildIP(entry) {
    var blocks = entry.split(".");
    if(blocks.length === 4) {
      return blocks.every(function(block) {
        return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
      });
    }
    return false;
}

console.log(isVaildIP("1.2.3.4"));
console.log(isVaildIP("1.2.3"));
console.log(isVaildIP("1.2.3.4.5"));
console.log(isVaildIP("123.45.67.89"));
console.log(isVaildIP("123.456.78.90"));
console.log(isVaildIP("123.045.067.089"));