interface Volador {
    volar(): void;
}

class Animal {
    comer(){
        console.log('Los animales estan comiendo');
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}

class Pez extends Animal {
    nadar() {
        console.log("El pez nada");
    }
}

class Pajaro extends Animal implements Volador {
    volar() {
        console.log("El pájaro vuela");
    }
}