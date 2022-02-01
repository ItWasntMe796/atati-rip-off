var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var body = document.body;

canvas.style.border = '10px solid black'

var x = canvas.width/2, y = canvas.height/2, dx = 2, dy = -2, boxPos = canvas.width/2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    new ball(x, y).draw();
    x += dx;
    y += dy;

    if (x+15 > canvas.width) {
        dx = -dx
    }

    if (x-15 < 0) {
        dx = -dx
    }

    if (y-15 < 0) {
        dy = -dy
    }

    if (y+15 > canvas.height) {
        dy = -dy
    }

    new box(boxPos, 500, 100, 25, 'blue').draw();

    body.onkeydown = e => {
        if (e.key === 'a')
        {
            boxPos = boxPos-30;
        }

        if (e.key === 'd')
        {
            boxPos = boxPos+30;
        }
    }

    if (y === 500 && boxPos-50 < x && boxPos+50 > x)
    {
        dy = -dy;
    }
}

setInterval(draw, 10);