//นำตัวอักษรใหญ่ขึ้นมาก่อน
//.join คือ การนำค่าแต่ละค่าในตัวแปร array มารวมกันเป็นข้อความ
//.concat คือ การนำคำมาเชื่อมกัน
//capToFront("hApPy") -> APhpy
//capToFront("moveMENT") -> MENTmove
//capToFront("shOrtCAKE") -> OCAKEshrt

function capToFront(s) {
    var sp = s.split(""); //แยกชุดตัวอักษรจากอักขระที่เราต้องการ
    var caps = []; 
    var lower = []
    for (var i = 0; i < sp.length; i++)
        {
            if (sp[i] == sp[i].toUpperCase()){              
                caps.push(sp[i]);
            }
            if (sp[i] == sp[i].toLowerCase()){
                lower.push(sp[i]);
            }
        }
    return caps.join("").concat(lower.join(""));
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));