class Player {
    constructor(gameScreen, left, top, height, width) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img')

        this.element.src = 'img/bunny.png'
        this.element.classList.add('player')

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
  
         if (this.left < 40 && this.top > 140 /*&& this.top < this.gameScreen.clientHeight - 60 - 210*/) {
            this.left = 40;
        } else if (this.top < 150 && /*this.left > 10 &&*/ this.left < 210) {
            this.top = 150;
        } else if (this.left < 230 && /*this.top > 40 &&*/ this.top < 120) {
            this.left = 230;
        } else if (this.top < 70 && /*this.left > 220 &&*/ this.left < this.gameScreen.clientWidth - 28 - 35) {
            this.top = 70;
        } else if (this.left > this.gameScreen.clientWidth - 28 - 40 && this.top < this.gameScreen.clientHeight - 32 - 200) {
            this.left = this.gameScreen.clientWidth - 28 - 40;
        } else if (this.top > this.gameScreen.clientHeight - 32 - 230 && this.left > this.gameScreen.clientWidth - 28 - 200) {
            this.top = this.gameScreen.clientHeight - 32 - 230;
        } else if (this.left > this.gameScreen.clientWidth - 28 - 225 && this.top > this.gameScreen.clientHeight - 32 - 210) {
            this.left = this.gameScreen.clientWidth - 28 - 225;
        } else if (this.top > this.gameScreen.clientHeight - 32 - 65 && this.left > 225) {
            this.top = this.gameScreen.clientHeight - 32 - 65;
        } else if (this.left < 230 && this.top > this.gameScreen.clientHeight - 32 - 210) {
            this.left = 230;
        } else if (this.top > this.gameScreen.clientHeight - 32 - 230 && this.left < 230) {
            this.top = this.gameScreen.clientHeight - 32 - 230
        }
        else {
            this.left += this.directionX
            this.top += this.directionY
        }

    }

    didCollide(apple) {
        const playerRect = this.element.getBoundingClientRect()
        const appleRect = apple.element.getBoundingClientRect()

        if(
            playerRect.left < appleRect.right &&
            playerRect.right > appleRect.left &&
            playerRect.top < appleRect.bottom &&
            playerRect.bottom > appleRect.top
        ) {
            return true
        } else {
            return false
        }
    }


}