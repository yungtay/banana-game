const alien = '../public/sprites/alien.png'
import Fruits from './Fruits'
export default class Player {

    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    canvas: HTMLCanvasElement;
    image: HTMLImageElement;

    constructor(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = context
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.image = new Image();
    }

    draw() {
        this.image.src = alien
        this.context.drawImage(this.image, this.x, this.y, 64, 97)
    }

    move(event: KeyboardEvent) {
        const step = 50
        if (event.key === "ArrowRight") {
            if (this.x + 64 + step < this.canvas.width) {
                this.x += step
            } else {
                this.x = this.canvas.width - 64
            }
        }

        if (event.key === "ArrowLeft") {
            if (this.x - step > 0) {
                this.x -= step
            } else {
                this.x = 0
            }
        }
    }

    checkCollision(fruit: Fruits): Boolean {
        const collision = fruit.y < this.y + 97 / 2 &&
            fruit.y > this.y - 97 / 2 &&
            fruit.x < this.x + 64 / 2 &&
            fruit.x > this.x - 64 / 2
        return collision
    }




}