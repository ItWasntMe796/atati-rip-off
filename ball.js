class ball {
    constructor(xPos, yPos, radius=15) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    draw(xpos = this.xPos, ypos = this.yPos) {
        ctx.beginPath();
        ctx.arc(xpos, ypos, this.radius, 0, 360, false);
        ctx.fillStyle = 'yellow';
        ctx.closePath();
        ctx.fill();
    }
}