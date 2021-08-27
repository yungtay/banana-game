import Fruits from './Fruits'
const redApple = '../public/sprites/red-apple.png'

export default class RedApple extends Fruits{
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        super(context, canvas, redApple)
    }

    effectInCollision(){
        console.log('RedApple')
    }
}