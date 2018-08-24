class Calculadora{
    
    numeroA:number;
    numeroB:number;
    
    constructor(_numeroA:number, _numeroB:number){
        this.numeroA = _numeroA;
        this.numeroB = _numeroB;

        console.log('iniciando Calculadora ... ');
        //console.log("La suma es: " + this.sumar());
        //console.log("La resta es: " + this.restar());
        //console.log("La multiplicacion es: " + this.multiplicar());
        //console.log("La división es: " + this.dividir());
    }

    sumar(){
        return this.numeroA + this.numeroB;
    }

    restar (){
        return this.numeroA - this.numeroB;
    }

    multiplicar(){
        return this.numeroA * this.numeroB;
    }

    dividir(){
        return this.numeroA / this.numeroB;
    }
}

let calculadora1 = new Calculadora(60, 3);

console.log("La suma es: " + calculadora1.sumar());
console.log("La resta es: " + calculadora1.restar());
console.log("La multiplicacion es: " + calculadora1.multiplicar());
console.log("La división es: " + calculadora1.dividir());