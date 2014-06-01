


//definimos el constructor para la clase
var Calculadora = function (dec1, dec2) {
    this.x = dec1.numero();
    this.y = dec2.numero();
}

Calculadora.prototype.xMenory = function () {
    return (this.x < this.y);
}

Calculadora.prototype.suma = function () {
    return this.x + this.y;
}

Calculadora.prototype.resta = function () {
    return this.x - this.y;
}
Calculadora.prototype.multiplicacion = function () {
    return this.x * this.y;
}

Calculadora.prototype.xMenory = function () {

    return (this.x < this.y);
}

Calculadora.prototype.setDecima = function () {

    return (this.x < this.y);
}


