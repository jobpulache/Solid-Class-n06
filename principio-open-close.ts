class DescuentoConcierto {
    calcularDescuento(tipoCliente: string, monto: number): number {
        if (tipoCliente === "Regular") {
            return monto * 0.05
        } else if (tipoCliente === "Premiun") {
            return monto * 0.1
        } else if (tipoCliente === "VIP") {
            return monto * 0.2
        } else {
            return 0
        }
    }
}

abstract class EstrategiaDescuento {
    abstract calcular(monto: number): number
}
class ClienteRegularDescuento extends EstrategiaDescuento {
    calcular(monto: number): number {
        return monto * 0.1
    }
}
class ClienteVIPDescuento extends EstrategiaDescuento {
    calcular(monto: number): number {
        return monto * 0.2
    }
}
class CalcularDescuento{
    private estrategiaDescuento: EstrategiaDescuento
    constructor(estrategia: EstrategiaDescuento){
        this.estrategiaDescuento = estrategia
    }
    calcular(monto:number):number{
        return this.estrategiaDescuento.calcular(monto)
    }

}
const descRegular =new CalcularDescuento(new ClienteRegularDescuento())
console.log("Descuento regular", descRegular.calcular(100));
