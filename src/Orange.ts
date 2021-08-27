import Fruits from './Fruits'
const orange = '../public/sprites/orange.png'

export default class Orange extends Fruits{
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        super(context, canvas, orange)
    }

    effectInCollision(){
        console.log('orange')
    }
}