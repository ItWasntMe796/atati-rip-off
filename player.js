class box {
    constructor(xPos, yPos, width, height, color)
    {
        this.xPos = xPos-width/2;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(xPos = this.xPos, yPos = this.yPos) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(xPos, yPos, this.width, this.height)
        ctx.closePath();
        ctx.fill();
    }
}