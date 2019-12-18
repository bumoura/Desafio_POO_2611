var Produto = /** @class */ (function () {
    function Produto(valor) {
        this._desconto = 0.91;
        this._valorProduto = 0;
        this._valorProduto = valor;
    }
    Produto.prototype.calcDesconto = function () {
        var novoValor = this._valorProduto * this._desconto;
        return novoValor;
    };
    return Produto;
}());
var notbook = new Produto(5000);
console.log(notbook.calcDesconto());
