var Emprestimo = /** @class */ (function () {
    function Emprestimo(bruto, parcela) {
        this._salarioBruto = 0;
        this._valorParcela = 0;
        this._valorMinimo = 0.30;
        this._salarioBruto = bruto;
        this._valorParcela = parcela;
    }
    Emprestimo.prototype.aprovado = function () {
        var valor = this._salarioBruto * this._valorMinimo;
        return valor;
    };
    Emprestimo.prototype.verificaParcela = function () {
        if (this.aprovado() > this._valorParcela) {
            return "Aprovado";
        }
        else {
            return "Reprovado";
        }
    };
    return Emprestimo;
}());
var midia = new Emprestimo(1000, 200);
console.log(midia.verificaParcela());
