var Valor = /** @class */ (function () {
    function Valor(valor1, valor2) {
        this._valores = [];
        this._valores.push(valor1);
        this._valores.push(valor2);
    }
    Valor.prototype.maior = function () {
        return Math.max.apply(Math, this._valores);
    };
    Valor.prototype.par = function () {
        var num = this.maior();
        if (num % 2 == 0) {
            return "Par";
        }
        else {
            return "Impar";
        }
    };
    return Valor;
}());
var bruna = new Valor(11, 12);
console.log(bruna.maior());
console.log(bruna.par());
