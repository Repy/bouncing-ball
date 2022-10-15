const SIZE = 50;
const G = 0.5;
window.addEventListener("load", () => {
    const base = <HTMLDivElement>document.getElementById("base");
    const ball = <HTMLDivElement>document.getElementById("ball");
    let x = 0;
    let xv = 0;
    let y = 0;
    let yv = 0;
    function move(x: number, y: number) {
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
    let startx = 0;
    let starty = 0;
    window.addEventListener("mousedown", (e) => {
        startx = e.clientX;
        starty = e.clientY;
    }, false);
    window.addEventListener("mouseup", (e) => {
        xv = (e.clientX - startx) / 10;
        yv = (e.clientY - starty) / 10;
    }, false);
    window.setInterval(tick, 30);
});

