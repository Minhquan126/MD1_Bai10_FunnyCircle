class Circle {
    radius;
    x;
    y;

    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    getColor() {
        return Math.floor(Math.random() * 255)
    }

    randomColor(red, green, blue) {
        red = this.getColor()
        green = this.getColor()
        blue = this.getColor()
        return "rgb( " + red + ',' + green + ',' + blue + ")"
    }

    drawCircle(ctx, canvas) {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.radius = Math.floor(Math.random() * 50)
        ctx.beginPath()
        ctx.fillStyle = this.randomColor()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}

let c = document.getElementById('mycanvas')
let ctx = c.getContext('2d')

setInterval(function () {

        for (let i = 0; i < 50; i++) {
            let hinhtron = new Circle()
            hinhtron.drawCircle(ctx)
        }
    }, 1000
)