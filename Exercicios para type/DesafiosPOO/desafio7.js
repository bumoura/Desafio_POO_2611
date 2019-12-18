var Consorcio = /** @class */ (function () {
    function Consorcio(paga, qtd, valor) {
        this._prestacaoQtd = 0;
        this._prestacaoPaga = 0;
        this._prestacaoValor = 0;
        this.valorPago = 0;
        this._prestacaoPaga = paga;
        this._prestacaoQtd = qtd;
        this._prestacaoValor = valor;
    }
    Consorcio.prototype.totalPago = function () {
        this.valorPago = this._prestacaoPaga * this._prestacaoValor;
        return this.valorPago;
    };
    Consorcio.prototype.totalDevedor = function () {
        var valorDevedor = (this._prestacaoQtd * this._prestacaoValor) - this.valorPago;
        return valorDevedor;
    };
    return Consorcio;
}());
var bruna = new Consorcio(2, 10, 100);
console.log(bruna.totalPago());
console.log(bruna.totalDevedor());
