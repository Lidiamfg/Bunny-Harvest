class Game {
    constructor() {
        this.startscreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 630;
        this.width = 651;
        this.player = new Player(this.gameScreen, 300, 275, 60, 50)
        this.apple = []

    }

    start() {
        this.startscreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.apple.push(
        new Apple(this.gameScreen), 
        /*new Apple(this.gameScreen), 
        new Apple(this.gameScreen),
        new Apple(this.gameScreen),
        new Apple(this.gameScreen),
        new Apple(this.gameScreen),
        new Apple(this.gameScreen),
        new Apple(this.gameScreen),
        new Apple(this.gameScreen),
        new Apple(this.gameScreen)
        */)
        
        console.log(this.apple)

        this.apple.forEach((el)=>{
            el.updatePosition()
        })
        
        this.gameLoop()
        



    }

    gameLoop() {
        this.update()
        requestAnimationFrame(() => this.gameLoop())
        console.log(this.player.left + " " + this.player.top)
    }

    update() {
        this.player.move()
        
    }







}