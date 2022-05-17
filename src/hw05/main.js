// Work on POSIX and Windows
var fs = require("fs");
var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
var data = stdinBuffer.toString().trim().split(/\s+/);

// 由命令列參數所輸入的資料存放在 data 總體陣列變數

// ========================================================
// 千萬不要修改『上面』的程式碼!
// ========================================================

function get_gt10(dat) {
    return dat.filter(v => Number(v) > 10);
}

function has3(v) {
    return v.toString().indexOf('3') >= 0;   
}

function get_has3(dat) {
    return dat.filter(has3);
}

function get_prime(dat) {
    let s =[]
    for(let i=0;i<data.length;i++){
        if(data[i]==2 |data[i]==3|data[i]==5|data[i]==7 ){
            s.push(data[i])
        }
        if(data[i]%2 != 0 & data[i]%3 != 0& data[i]%5 != 0& data[i]%7 != 0 & data[i] != 1){
            s.push(data[i])
        }
    }
        return s;
}

function main() {
    console.log(`get_gt10(data) => ${get_gt10(data)}`);
    console.log(`get_has3(data) => ${get_has3(data)}`);
    console.log(`get_prime(data) => ${get_prime(data)}`);
}

// ========================================================
// 千萬不要修改『下面』的程式碼!
// ========================================================

main()


