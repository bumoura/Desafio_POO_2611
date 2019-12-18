var Salario = /** @class */ (function () {
    function Salario(salarioPessoa) {
        this._salarioMinimo = 998;
        this._salarioMinPessoa = 0;
        this._salarioMinPessoa = salarioPessoa;
    }
    Salario.prototype.salarioQuant = function () {
        var diferenca = this._salarioMinPessoa / this._salarioMinimo;
        return Math.floor(diferenca);
    };
    return Salario;
}());
var totalSalario = new Salario(20000);
console.log(totalSalario.salarioQuant());
