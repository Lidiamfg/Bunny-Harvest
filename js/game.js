class Game {
    constructor() {
        this.startscreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 88;
        this.width = 45;
        this.player = new Player(this.gameScreen,200,300,60,50)

    }

    start() {
        this.startscreen.style.display = 'none';
        this.gameScreen.style.display ='block';
        
        this.gameScreen.style.height = `${this.height}vh`
        this.gameScreen.style.width = `${this.width}vw`

        this.gameLoop()
        
    }

    gameLoop() {
        this.update()
        requestAnimationFrame( () => this.gameLoop())
    }

    update() {
        this.player.move()
      }







}