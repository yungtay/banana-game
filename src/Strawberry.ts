import Fruits from './Fruits'
const strawberry = '../public/sprites/strawberry.png'

export default class Strawberry extends Fruits{
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        super(context, canvas, strawberry)
    }

    effectInCollision(){
        console.log('Strawberry')
    }
}