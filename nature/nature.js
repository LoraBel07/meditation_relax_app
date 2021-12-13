const alarm = document.querySelector("#playerAlarm");
const music = document.querySelector("#player");
music.play();        
alarm.pause();

let i = 0;
function move() {
if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 3000);
    function frame() {
    if (width >= 100) {
        clearInterval(id);
        i = 0;        
        music.pause();        
        alarm.play();
    } 
    else {
        width++;
        elem.style.width = width + "%";
    }
    }
}
}

let b = 0;
function moveTen() {
if (b == 0) {
    b = 1;
let elem = document.getElementById("myBarTen");
let width = 1;
let id = setInterval(frame, 6000);
function frame() {
    if (width >= 100) {
        clearInterval(id);
        b = 0;
        music.pause();        
        alarm.play();
    } 
    else {
        width++;
        elem.style.width = width + "%";
    }
    }
}
}
