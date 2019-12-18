class Garcon {
    private _valorgasto: number = 0
    private _gorjeta: number = 0.10

    constructor(valor:number){
        this._valorgasto = valor
    }

    valorPagar(){
        return ((this._valorgasto * this._gorjeta) + this._valorgasto)
    }
}

let madeiro = new Garcon (100)
console.log(madeiro.valorPagar())