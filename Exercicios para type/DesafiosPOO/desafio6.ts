class Emprestimo {
    private _salarioBruto: number = 0
    private _valorParcela: number = 0
    private _valorMinimo: number = 0.30

    constructor(bruto, parcela) {
        this._salarioBruto = bruto
        this._valorParcela = parcela
    }

    aprovado() {
        let valor = this._salarioBruto * this._valorMinimo
        return valor

    }

    verificaParcela() {
        if (this.aprovado() > this._valorParcela) {
            return "Aprovado"
        }
        else {
            return "Reprovado"
        }

    }

}
let midia = new Emprestimo(1000, 200)
console.log(midia.verificaParcela())