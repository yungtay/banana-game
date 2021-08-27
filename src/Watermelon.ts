import Fruits from './Fruits'
const watermelon = '../public/sprites/watermelon.png'

export default class Watermelon extends Fruits{
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        super(context, canvas, watermelon)
    }

    effectInCollision(){
        console.log('Watermelon')
        
    }
}