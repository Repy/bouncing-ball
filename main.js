"use strict";
var SIZE = 50;
var G = 0.5;
window.addEventListener("load", function () {
    var base = document.getElementById("base");
    var ball = document.getElementById("ball");
    var x = 0;
    var xv = 0;
    var y = 0;
    var yv = 0;
    function move(x, y) {
        ball.style.top = y + "px";
        ball.style.left = x + "px";
    }
    function tick() {
        yv = yv + G;
        x = x + xv;
        y = y + yv;
        if (x > base.clientWidth - SIZE) {
            x = 2 * (base.clientWidth - SIZE) - x;
            xv = -xv;
        }
        if (x < 0) {
            x = -x;
            xv = -xv;
        }
        if (y > base.clientHeight - SIZE) {
            y = 2 * (base.clientHeight - SIZE) - y;
            yv = -yv;
        }
        if (y < 0) {
            y = -y;
            yv = -yv;
        }
        move(x, y);
    }
    var startx = 0;
    var starty = 0;
    function mdown(e){ 
         startx = e.clientX||e.touches[0].clientX; 
         starty = e.clientY||e.touches[0].clientY; 
     } 
     window.addEventListener("mousedown", mdown, false); 
     document.body.addEventListener("touchstart", mdown, false); 
     function mup(e){ 
         xv = ((e.clientX||e.touches[0].clientX) - startx) / 10; 
         yv = ((e.clientY||e.touches[0].clientY) - starty) / 10; 
     }
        window.addEventListener("mouseup", mup, false); 
     document.body.addEventListener("touchend", mup, false);
    window.setInterval(tick, 30);
});
