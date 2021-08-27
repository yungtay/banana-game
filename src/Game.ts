import Player from "./Player";
import Drawable from "./Drawable"
import Fruits from "./Fruits"
import Banana from './Banana'
import Orange from './Orange'
import RedApple from './RedApple'
import Strawberry from './Strawberry'
import Watermelon from './Watermelon'

export default class Game {

    canvas: HTMLCanvasElement;
    screenDimensions: { width: number, height: number };
    context: CanvasRenderingContext2D;
    player: Player;
    intervalsIds: number[];
    drawables: Fruits[];
    fruits: any[];

    constructor(screenDimensions: { width: number, height: number }, canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvas.width = screenDimensions.width;
        this.canvas.height = screenDimensions.height;
        this.context = this.canvas.getContext('2d')
    }

    start() {
        this.reset()
        this.startIntervals();
    }

    startIntervals() {
        this.stopIntervals();
        const { setInterval } = window;

        this.intervalsIds = [
            setInterval(() => this.gameLoop(), 1000 / 60),
            setInterval(() => this.spawnFruits(), 1000 )
        ];
    }

    render() {
        this.clearScreen();
        this.player.draw();
        this.drawables.forEach((drawable) => drawable.draw());
    }

    updateState() {
        this.drawables.forEach((drawable) => drawable.updateState(this));
    }

    gameLoop() {
        this.render();
        this.updateState();
    }

    move(event: KeyboardEvent) {
        this.player.move(event);
    }

    spawnFruits() {
        this.drawables.push(this.chooseFruit());
      }

    delete(drawable: Drawable) {
        this.drawables = this.drawables.filter((d) => d !== drawable);
    }

    end() {
        alert("Pegou")
    }

    stopIntervals() {
        this.intervalsIds?.forEach(clearInterval);
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    reset() {
        this.player = new Player(this.context, this.canvas)
        this.player.draw()
        this.drawables = [];
        this.fruits = [ Banana, Orange, RedApple, Strawberry, Watermelon ]
        
    }

    chooseFruit(): Fruits{
        var rand = Math.floor(Math.random() * this.fruits.length);
        return new this.fruits[rand](this.context, this.canvas)
    }
}