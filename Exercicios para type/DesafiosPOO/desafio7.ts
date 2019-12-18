class Consorcio {
    private _prestacaoQtd: number = 0
    private _prestacaoPaga: number = 0
    private _prestacaoValor: number = 0
    private   valorPago: number = 0;

    constructor(paga:number, qtd:number, valor:number) {
        this._prestacaoPaga = paga
        this._prestacaoQtd = qtd
        this._prestacaoValor = valor
    }
    totalPago() {
        this.valorPago = this._prestacaoPaga * this._prestacaoValor;
        return this.valorPago
    }
    totalDevedor() {
        let valorDevedor = (this._prestacaoQtd * this._prestacaoValor) - this.valorPago; 
        return valorDevedor
    }
}
let Bruna = new Consorcio(2, 10, 100)
console.log(bruna.totalPago())
console.log(bruna.totalDevedor())