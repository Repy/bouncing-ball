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
         startx = e.touches?e.touches[0].clientX:e.clientX; 
         starty = e.touches?e.touches[0].clientY:e.clientY; 
    } 
     window.addEventListener("pointerdown", mdown, false); 
     function mup(e){ 
         xv = ((e.touches?e.touches[0].clientX:e.clientX) - startx) / 10; 
         yv = ((e.touches?e.touches[0].clientY:e.clientY) - starty) / 10; 
 alert(startx);
     }
     window.addEventListener("pointerup", mup, false); 
    // window.addEventListener("pointermove", function(e){e.preventDefault();}, false);

    window.setInterval(tick, 30);
});
