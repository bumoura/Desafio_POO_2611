class Valor {

    private _valores = [];

    constructor(valor1, valor2) {
        this._valores.push(valor1);
        this._valores.push(valor2);
    }

    maior() {
        return Math.max(...this._valores)
    }

    par() {
        let num = this.maior()

        if (num % 2 == 0) {
            return "Par"
        } else {
            return "Impar"
        }

    }

}

let bruna = new Valor(10,100);
console.log(bruna.maior());
console.log(bruna.par());
