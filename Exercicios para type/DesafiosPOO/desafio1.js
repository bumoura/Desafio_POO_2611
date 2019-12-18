var Calculo = /** @class */ (function () {
    function Calculo(valorHora, aulasNoMes) {
        this._valorHora = 0;
        this._aulasNoMes = 0;
        this._valorHora = valorHora;
        this._aulasNoMes = aulasNoMes;
    }
    Calculo.prototype.salarioLiquido = function () {
        var total = this._valorHora * this._aulasNoMes;
        total *= 0.89;
        return total;
    };
    return Calculo;
}());
var flavio = new Calculo(30, 57);
console.log(flavio.salarioLiquido());
