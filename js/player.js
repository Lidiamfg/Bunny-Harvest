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
        /* if(this.left < 230 ){
             this.left = 230;
         }else if ( this.left > this.gameScreen.clientWidth-50-35){
             this.left = this.gameScreen.clientWidth-50-35
         } else{
             this.left += this.directionX
         }
         
         if(this.top < 60) {
             this.top = 60;
         } else if (this.top > this.gameScreen.clientHeight-60){
             this.top = this.gameScreen.clientHeight-60
         }
          else {
             this.top += this.directionY
         }*/

         if (this.left < 25 && this.top > 120 && this.top < this.gameScreen.clientHeight - 60 - 210) {
            this.left = 25;
        } else if (this.top < 130 && /*this.left > 10 &&*/ this.left < 220) {
            this.top = 130;
        } else if (this.left < 225 && /*this.top > 40 &&*/ this.top < 130) {
            this.left = 225;
        } else if (this.top < 40 && /*this.left > 220 &&*/ this.left < this.gameScreen.clientWidth - 50 - 35) {
            this.top = 40;
        } else if (this.left > this.gameScreen.clientWidth - 50 - 35 && this.top < this.gameScreen.clientHeight - 60 - 200) {
            this.left = this.gameScreen.clientWidth - 50 - 35;
        } else if (this.top > this.gameScreen.clientHeight - 60 - 210 && this.left > this.gameScreen.clientWidth - 50 - 200) {
            this.top = this.gameScreen.clientHeight - 60 - 210;
        } else if (this.left > this.gameScreen.clientWidth - 50 - 210 && this.top > this.gameScreen.clientHeight - 60 - 210) {
            this.left = this.gameScreen.clientWidth - 50 - 210;
        } else if (this.top > this.gameScreen.clientHeight - 60 - 50 && this.left > 205) {
            this.top = this.gameScreen.clientHeight - 60 - 50;
        } else if (this.left < 215 && this.top > this.gameScreen.clientHeight - 60 - 210) {
            this.left = 215;
        } else if (this.top > this.gameScreen.clientHeight - 60 - 220 && this.left < 210) {
            this.top = this.gameScreen.clientHeight - 60 - 220
        }
        else {
            this.left += this.directionX
            this.top += this.directionY
        }

    }
}