class rectangle {
    protected ancho: number
    protected alto: number
    constructor(ancho: number, alto: number) {
        this.ancho = ancho
        this.alto = alto;
    }
    setAncho(ancho: number) {
        this.ancho = ancho
    }
    setAlto(alto: number) {
        this.alto = alto
    }

    obtenerArea(): number {
        return this.ancho * this.alto
    }

}

class Cuadrado extends rectangle{
    constructor(lado:number){
        super(lado, lado)
    }

    setAncho(ancho:number){
        this.alto = ancho
        this.ancho = ancho
    }
    setAlto (alto:number){
        this.alto=alto
        this.ancho = alto
    }
   
}
function imprimirArea(rectangulo:rectangle) {
    rectangle.setAncho (7)
    rectangle.setAlto(15)
    console.log(rectangle.obj;
    
    
    
}


