import Game from './Game'

const screenDimensions = { width: window.innerWidth, height: window.innerHeight }
const canvas = document.querySelector('#canvas') as HTMLCanvasElement

const game = new Game(screenDimensions, canvas)
game.start();

(['keydown', 'keyup']).forEach((state: keyof HTMLElementEventMap) => {
    canvas.addEventListener(state, (event: KeyboardEvent) => {
        game.move(event)
    })
});




