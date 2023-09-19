class Game {
    constructor() {
        this.startscreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 630;
        this.width = 651;
        this.player = new Player(this.gameScreen, 300, 275, 32, 28)
        this.apple = []
        this.score = 0
        this.gameOver = false;
        this.counter = 30
        this.intervalId = 0

    }

    start() {
        this.startscreen.style.display = 'none';
        this.gameEndScreen.style.display = 'none'
        this.gameScreen.style.display = 'block';

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        

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
            console.log(this.counter)
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
        }

        if (this.gameOver) {
            this.gameScreen.style.display = 'none'
            this.gameEndScreen.style.display = 'block'
  
        } else {
            requestAnimationFrame(() => this.gameLoop())
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
        

    }









}