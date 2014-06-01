//definimos el constructor para la clase 
var Decimal = function (entero, decimal) {
    this.entero = entero;
    this.decimal = decimal;

}

Decimal.prototype.numero = function () {
    return this.entero+this.decimal;
}
