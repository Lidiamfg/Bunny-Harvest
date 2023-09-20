class Game {
    constructor() {
        this.startscreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 630;
        this.width = 651;
        this.player = new Player(this.gameScreen, 300, 275, 32, 28)
        this.apple = []
        this.animatedId = 0
        this.score = 0
        this.gameOver = false;
        this.counter = 30
        this.intervalId = 0
        this.compLeft=[]
        this.compTop=[]
        

    }

    start() {
        this.startscreen.style.display = 'none';
        this.gameEndScreen.style.display = 'none'
        this.gameScreen.style.display = 'block';

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        /*let num = Math.floor(Math.random()*25 +5)
        const generateApples = (num) => {
            for (let i=0; i<num; i++){
                this.apple.push(new Apple(this.gameScreen))
            }  
            return this.apple
        }

        generateApples(num);*/

        this.apple.push(
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen),
            new Apple(this.gameScreen)
        )

        console.log(this.apple)

        this.apple.forEach((el) => {
            el.updatePosition()

        })

       this.intervalId = setInterval(() => {
            this.counter -= 1;
            //console.log(this.counter)
        }, 1000)
        

        this.gameLoop()
    }



    gameLoop() {

        this.update()

        document.getElementById('score').innerText = this.score
        document.getElementById('time').innerText = this.counter
        
        if (this.counter === 0) {
            clearInterval(this.intervalId)
            this.gameOver = true
            if (this.score < this.apple.length){
                document.getElementById('finishing-line').innerText="Better Luck Next Time..."
            }
        }
        
        if (this.score === this.apple.length) {
            this.gameOver = true;
            document.getElementById('finishing-line').innerText="You did great on your Harvest!"
            let p = document.createElement('p')
            p.classList.add('time')
            p.innerText = `${30-this.counter}s`
            let ref = document.getElementById('high-score')
            this.gameEndScreen.insertBefore(p,ref.nextSibling)
            let pList = document.querySelectorAll(".time")
            if(pList.length > 3){
                pList[3].remove()
            }

        }

        if (this.gameOver) {
            this.gameScreen.style.display = 'none'
            this.gameEndScreen.style.display = 'block'
            
  
        } else {
            this.animatedId = requestAnimationFrame(() => this.gameLoop())
        }

        


        if(this.compLeft[0] < this.compLeft[1] ){   
            if(this.animatedId % 40 === 0){
                this.player.element.src = "img/bunny_right.png"
            } else if (this.animatedId % 40 === 20){
                this.player.element.src = "img/bunny_right2.png"
            } 
        } else if (this.compLeft[0] > this.compLeft[1]){
            if(this.animatedId % 40 === 0){
                this.player.element.src = "img/bunny_left.png"
            } else if (this.animatedId % 40 === 20){
                this.player.element.src = "img/bunny_left2.png"
            } 
        }

        if(this.compTop[0] < this.compTop[1]){   
            if(this.animatedId % 40 === 0){
                this.player.element.src = "img/bunny_bot.png"
            } else if (this.animatedId % 40 === 20){
                this.player.element.src = "img/bunny_bot2.png"
            }
        } else if (this.compTop[0] > this.compTop[1]){
            if(this.animatedId % 40 === 0){
                this.player.element.src = "img/bunny_top.png"
            } else if (this.animatedId % 40 === 20){
                this.player.element.src = "img/bunny_top2.png"
            } 
        }

        if(this.compTop[0] === this.compTop[1] && this.compLeft[0] === this.compLeft[1]){
            if(this.animatedId % 40 === 0){    
                this.player.element.src = "img/bunny2.png"
             } else if (this.animatedId % 40 === 20) {
                 this.player.element.src = "img/bunny.png"
             }
        }
 

    }


    update() {
        this.player.move()

        this.apple.forEach((oneApple) => {
            if (this.player.didCollide(oneApple)) {
                this.score += 1;
                oneApple.element.remove()
            }
        })
        
       

        this.compLeft.push(this.player.left)
        if (this.compLeft.length > 2){
            this.compLeft.shift()
        }

        this.compTop.push(this.player.top)
        if (this.compTop.length > 2){
            this.compTop.shift()
        }

        //console.log(this.compLeft)

        

    }









}