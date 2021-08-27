import Fruits from './Fruits'
const banana = '../public/sprites/banana.png'

export default class Banana extends Fruits{
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        super(context, canvas, banana)
    }

    effectInCollision(){
        console.log('banana')
    }
}