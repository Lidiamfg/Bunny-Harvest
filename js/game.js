class Game {
    constructor() {
        this.startscreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 630;
        this.width = 651;
        this.player = new Player(this.gameScreen, 200, 200, 60, 50)

    }

    start() {
        this.startscreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.gameLoop()


    }

    gameLoop() {
        this.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    update() {
        this.player.move()
    }







}