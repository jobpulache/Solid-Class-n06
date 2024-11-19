interface RevisarMovimientos{
    consultarSaldo():number;
}
interface Transferencia{
    transferenciaInternacionar(monto:number, nroCuenta:string):void;
}
interface Prestamo{
    prestamoEmprendedor(monto:number):void;
}
interface Retiro{
    retirarDineroxCajero(monto:number):void;
}

class cuentaAhorroSimple implements RevisarMovimientos, Retiro{
    retirarDineroxCajero(monto: number): void {
        throw new Error("Method not implemented.");
    }
    consultarSaldo(): number {
        throw new Error("Method not implemented.");
    }
}
class CuentaCorriente implements RevisarMovimientos, Transferencia, Retiro{
    retirarDineroxCajero(monto: number): void {
        
    }
    transferenciaInternacionar(monto: number, nroCuenta: string): void {
        
    }
    consultarSaldo(): number {
        throw new Error ('Error')
        
    }
    
}