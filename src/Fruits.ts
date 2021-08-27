import Drawable from './Drawable'
import Game from './Game'

export default abstract class Fruits extends Drawable{
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, imageSrc: string) {
        super(context, canvas, imageSrc)
    }

    updateState(game: Game) {
        this.move();
        this.outOfBonds(game);
    
        if (game.player.checkCollision(this)) {
            this.effectInCollision();
            game.delete(this)
        }
      }

      outOfBonds(game: Game) {
        if ( this.y > this.canvas.height) {
          game.delete(this)
        }
      }

      effectInCollision(){}
}