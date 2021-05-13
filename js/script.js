class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static distance(a, b) {
        let dx = Math.abs(b.x - a.x)
        let dy = Math.abs(b.y - a.y)

        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    }
}

class Vector {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    magnitude = () => Point.distance(this.b, this.a)
}

// Immediately Invoked Function Expression or IIFE
(() => {
    let elem = document.getElementById("root")

    let p1 = new Point(2, 4)
    let p2 = new Point(6, 8)

    let vector = new Vector(p1, p2)

    elem.innerHTML = `[${p1.x}, ${p1.y}], [${p2.x}, ${p2.y}]: ${vector.magnitude()}`
})()