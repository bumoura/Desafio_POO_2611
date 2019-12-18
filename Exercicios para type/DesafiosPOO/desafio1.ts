class Calculo {

    private _valorHora: number = 0
    private _aulasNoMes: number = 0


    constructor(valorHora = 0, aulasNoMes = 0) {

        this._valorHora = valorHora;
        this._aulasNoMes = aulasNoMes;
    }

    salarioLiquido (){
       let total= this._valorHora * this._aulasNoMes
        total *=  0.89;
        return total;
     }
}

let flavio = new Calculo(30, 57);

console.log(flavio.salarioLiquido());

