
var dec1 = new Decimal(2, 0.3);
var dec2 = new Decimal(3, 0.2);

var ope1 = new Calculadora(dec1, dec2);
//ope1 = new Calculadora(2, 3);



QUnit.module("Testing calculadora()");
QUnit.test('Testing valores()', function () {
    equal(ope1.x, 2.3);
    equal(ope1.y, 3.2);
    equal(ope1.x, 1);
    equal(ope1.y, 1);
 

});

QUnit.module("Testing calculadora()");
QUnit.test('Testing suma()', function () {
    equal(ope1.suma(), 5.5);
    equal(ope1.suma(), 2);
});

QUnit.module("Testing calculadora()");
QUnit.test("Testing xMenory()", function () {
    ok(ope1.xMenory());
    ok(!ope1.xMenory());
});

function imprimete() {
    document.write("<br>x: " + this.x)
    document.write("<br>y: " + this.y)
}
