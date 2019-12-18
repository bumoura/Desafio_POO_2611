var Garcon = /** @class */ (function () {
    function Garcon(valor) {
        this._valorgasto = 0;
        this._gorjeta = 0.10;
        this._valorgasto = valor;
    }
    Garcon.prototype.valorPagar = function () {
        return ((this._valorgasto * this._gorjeta) + this._valorgasto);
    };
    return Garcon;
}());
var madeiro = new Garcon(100);
console.log(madeiro.valorPagar());
