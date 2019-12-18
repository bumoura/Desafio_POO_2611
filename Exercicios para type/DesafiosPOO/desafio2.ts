class Produto {

  private  _desconto: number = 0.91;
  private  _valorProduto: number = 0;

constructor(valor: number){
    this._valorProduto = valor;
}


calcDesconto(){
    let novoValor = this._valorProduto * this._desconto;
    return  novoValor;
}

}


let notbook = new Produto(5000)

console.log(notbook.calcDesconto());






