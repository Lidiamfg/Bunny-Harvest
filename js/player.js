class Player {
    constructor(gameScreen, left, top, height, width){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img')

        this.element.src = '../img/bunny.png'

        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`

        this.gameScreen.appendChild(this.element)
    }


    move() {
        this.updatePosition()
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
    
    updatePosition() {
        this.left += this.directionX
        /*if (this.left < 50) {
            this.left = 50
        } else if (this.left > this.gameScreen.clientWidth - 50 - this.width) {
            this.left = this.gameScreen.clientWidth - 50 - this.width
        } else {
            
        }*/
        this.top += this.directionY
        /*if (this.top < 20) {
            this.top = 20
        } else if (this.top > this.gameScreen.clientHeight - 20 - this.height) {
            this.top = this.gameScreen.clientHeight - 20 - this.height
        } else {
            
        }*/
    }




}