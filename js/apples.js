class Apple{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random()*651);
        this.top = Math.floor(Math.random()*630);
        this.width = 24
        this.height = 26
        this.element = document.createElement('img')

        this.element.src = '../img/Apple.png'

        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        this.gameScreen.insertBefore(this.element, this.gameScreen.firstChild)

    }

    updatePosition(){
        this.position()
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

    }


    position() {
        if (this.left < 40 && this.top > 140 && this.top < this.gameScreen.clientHeight - 26 - 180) {
            this.left = 40;
        } else if (this.top < 150 && /*this.left > 10 &&*/ this.left < 230) {
            this.top = 150;
        } else if (this.left < 235 && /*this.top > 40 &&*/ this.top < 140) {
            this.left = 235;
        } else if (this.top < 70 && /*this.left > 220 &&*/ this.left < this.gameScreen.clientWidth - 26 - 25) {
            this.top = 70;
        } else if (this.left > this.gameScreen.clientWidth - 24 - 45 && this.top < this.gameScreen.clientHeight - 26 - 200) {
            this.left = this.gameScreen.clientWidth - 24 - 45;
        } else if (this.top > this.gameScreen.clientHeight - 26 - 230 && this.left > this.gameScreen.clientWidth - 24 - 230) {
            this.top = this.gameScreen.clientHeight - 26 - 230;
        } else if (this.left > this.gameScreen.clientWidth - 24 - 235 && this.top > this.gameScreen.clientHeight - 24 - 210) {
            this.left = this.gameScreen.clientWidth - 24 - 235;
        } else if (this.top > this.gameScreen.clientHeight - 26 - 70 && this.left > 205) {
            this.top = this.gameScreen.clientHeight - 26 - 70;
        } else if (this.left < 230 && this.top > this.gameScreen.clientHeight - 26 - 210) {
            this.left = 230;
        } else if (this.top > this.gameScreen.clientHeight - 26 - 230 && this.left < 220) {
            this.top = this.gameScreen.clientHeight - 26 - 230
        }
        else{
            this.left = this.left;
            this.top = this.top;
            }
    }


}
