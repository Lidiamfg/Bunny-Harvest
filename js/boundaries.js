class Boundary {
    constructor({position}) {
        this.position = position
        this.width = 50
        this.height = 50
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

