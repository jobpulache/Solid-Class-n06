class ReportManager {
   
  

   
}
class ReportGenerate{
    generarReporte(info: any): string {
        return "Informe elaborado"
    }
}
class ReportPrint{
    imprimirReporte(nomReport: string) {
        console.log('Imprimiendo informe');

    }
}

class ReportSender{
    enviarReportePorEmail(nomreport: string, email: string) {
        console.log(`Eviar reporte del correo: ${email}`);
    }
}