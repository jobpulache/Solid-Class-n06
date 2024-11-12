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