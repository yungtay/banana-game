export default abstract class Drawable{
    
    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    canvas: HTMLCanvasElement;
    image: HTMLImageElement;
    src: string;

    constructor(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        imageSrc: string) {
        this.canvas = canvas
        this.context = context
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = -67;
        this.image = new Image()
        this.src = imageSrc
    }

    move(): void {
        const speed = 5
        this.y += speed
    }

    draw(): void {
        this.image.src = this.src
        this.context.drawImage(this.image, this.x, this.y, 61, 67)
    }
}