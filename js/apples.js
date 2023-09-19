class Apple{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random()*651);
        this.top = Math.floor(Math.random()*630);
        this.width = 24
        this.height = 26
        this.element = document.createElement('img')

        this.element.src = 'img/Apple.png'

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
        if (this.left <= 40 && this.top >= 140 && this.top <= this.gameScreen.clientHeight - 26 - 220) {
            this.left = 40;
            /*if(this.top < 150 || this.top > this.gameScreen.clientHeight - 26 - 230){
               this.top = Math.floor(Math.random()*(this.gameScreen.clientHeight - 26 - 230 - 150)+150);
            }else{
                this.top = this.top;
            }*/

        /*} else if (this.top < 160 && this.left > 40 && this.left < 230) {
            this.top = 160;*/

        } else if (this.left <= 235 && this.top <= 140) {
            this.left = 235;
            if(this.top <= 70){
                this.top = Math.floor(Math.random()*(140-70)+70);
            }else {
                this.top = this.top;
            }

        } else if (this.top <= 70 && this.left >= 220 /*&& this.left < this.gameScreen.clientWidth - 26 - 40*/) {
            this.top = 70;
            if(this.left >= this.gameScreen.clientWidth - 26 - 40){
                this.left = Math.floor(Math.random()*(this.gameScreen.clientWidth - 26 - 40 - 220)+220);
             }else{
                 this.left = this.left;
             }

        } else if (this.left >= this.gameScreen.clientWidth - 24 - 45 && this.top <= this.gameScreen.clientHeight - 26 - 220) {
            this.left = this.gameScreen.clientWidth - 24 - 45;

        /*} else if (this.top > this.gameScreen.clientHeight - 26 - 230 && this.left > this.gameScreen.clientWidth - 24 - 230) {
            this.top = this.gameScreen.clientHeight - 26 - 230;
            if(this.left > this.gameScreen.clientWidth - 26 - 40 ) {
                this.left = Math.floor(Math.random()*((this.gameScreen.clientWidth - 26 - 40)-(this.gameScreen.clientHeight - 26 - 230))+this.gameScreen.clientHeight - 26 - 230);
            }
            else {
                this.left = this.left;
            }*/

        } else if (this.left >= this.gameScreen.clientWidth - 24 - 235 && this.top >= this.gameScreen.clientHeight - 24 - 210) {
            this.left = this.gameScreen.clientWidth - 24 - 235;
            if (this.top >= this.gameScreen.clientHeight - 26 - 70){
                this.top = Math.floor(Math.random()*((this.gameScreen.clientHeight - 26 - 70) - (this.gameScreen.clientHeight - 24 - 210))+this.gameScreen.clientHeight - 24 - 210);
            }else{
                this.top=this.top; 
            }


        } else if (this.top >= this.gameScreen.clientHeight - 26 - 70 && this.left >= 230) {
            this.top = this.gameScreen.clientHeight - 26 - 70;
            

        /*} else if (this.left < 230 && this.top > this.gameScreen.clientHeight - 26 - 210) {
            this.left = 230;*/

        } else if (this.top >= this.gameScreen.clientHeight - 26 - 230 && this.left <= 220) {
            this.top = this.gameScreen.clientHeight - 26 - 230
            if(this.left <= 40){
                this.left = Math.floor(Math.random()*(230-70)+70)
            }else{
                this.left = this.left;
            }
        }
        else{
            this.left = this.left;
            this.top = this.top;
            }
    }


}
