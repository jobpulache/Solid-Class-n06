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


class cargarDatos{
    cargarData(tipoDate:string){
        console.log(tipoDate);      
    }   
}
class generarDatos{
generarDato(generateData:string){
    console.log(`generando dato ${generateData}`);
}

}
class guardarDatos{
    guardarData(saveData:string){
        console.log('Guardando datos');      
    }
}






class Reporte{
    
}
class generarPDF{
generarPdf(generatePdf:string){
    console.log(`generando pdf ${generatePdf}..`);
}

}
class enviarEmail{
    enviarEmail(enviarEmail:string){
        console.log(`enviando email ${enviarEmail}`);      
    }
}
