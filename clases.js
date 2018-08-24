"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(_numeroA, _numeroB) {
        this.numeroA = _numeroA;
        this.numeroB = _numeroB;
        console.log('iniciando Calculadora ... ');
        //console.log("La suma es: " + this.sumar());
        //console.log("La resta es: " + this.restar());
        //console.log("La multiplicacion es: " + this.multiplicar());
        //console.log("La división es: " + this.dividir());
    }
    Calculadora.prototype.sumar = function () {
        return this.numeroA + this.numeroB;
    };
    Calculadora.prototype.restar = function () {
        return this.numeroA - this.numeroB;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.numeroA * this.numeroB;
    };
    Calculadora.prototype.dividir = function () {
        return this.numeroA / this.numeroB;
    };
    return Calculadora;
}());
var calculadora1 = new Calculadora(60, 3);
console.log("La suma es: " + calculadora1.sumar());
console.log("La resta es: " + calculadora1.restar());
console.log("La multiplicacion es: " + calculadora1.multiplicar());
console.log("La división es: " + calculadora1.dividir());
