 class Game { // Declare all the stuff
    private canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cnvs')
    public ctx:CanvasRenderingContext2D = this.canvas.getContext("2d")!
    private width:number
    private height:number
    private player:Player
    private player2:Player

    constructor() { // Load in all the stuff
        console.log("new game created!")
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.player = new Player(600,this.height,this)
        this.player2 = new Player(555,this.height-80,this)

        // Start looping stuff
        requestAnimationFrame(this.gameLoop)
    }

    gameLoop = ():void => {
        // Draw setup
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0,0,this.width,this.height)
        // Update stuff
        this.player.update()
        this.player2.update()

        // Detect collision
        // The collusion function returns true or false so use an if statement
        if(this.collision(this.player,this.player2)) {
            console.log("Collision detected")
            // Code what happens on a collision
        }

        // Draw 
        this.ctx.stroke()
        // Next frame
        requestAnimationFrame(this.gameLoop)
     }


    // Collision function
    public collision(object:any, target:any):boolean {
        if (object.x > target.x-object.width && object.x < target.x+target.width && object.y > target.y-object.height && object.y < target.y+target.height) {
            return true
        } else {
            return false
        }
    }
}

// Create the game instance
window.addEventListener("load", () => new Game())