interface Notificar {
    enviar(mensaje: string, destinatario: string): void
}
class EmainNotification implements Notificar {
    enviar(mensaje: string, destinatario: string): void {

    }
}
class SMSNotification implements Notificar {
    enviar(mensaje: string, destinatario: string): void {

    }

}

class serviceNotification {
    private notification: Notificar;
    constructor(notification: Notificar) {
        this.notification = notification
    }
    generarNotification(mensaje: string, destinatario: string) {
        this.notification.enviar(mensaje, destinatario);
    }
}

const emailNotification = new serviceNotification(new EmainNotification())
emailNotification.generarNotification("Message for email", "manurios@gmail.com")
