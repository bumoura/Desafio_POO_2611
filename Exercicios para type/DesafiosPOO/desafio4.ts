class Salario{
    private _salarioMinimo: number= 998;
    private _salarioMinPessoa : number = 0;

    constructor(salarioPessoa:number){
        this._salarioMinPessoa = salarioPessoa
    }

    salarioQuant(){
        let diferenca = this._salarioMinPessoa / this._salarioMinimo
        return Math.floor(diferenca)
    }
}
let totalSalario = new Salario(1200)
console.log(totalSalario.salarioQuant());