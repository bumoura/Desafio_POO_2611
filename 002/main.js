class Produto {
	_desconto = 0.91;
	_valorProduto = 0;

	constructor(valor) {
		this._valorProduto = Number(valor);
	}

	calcDesconto() {
		let novoValor = this._valorProduto * this._desconto;
		return novoValor;
	}
}

const prod = document.querySelector('input[name="valor"]');
const resultado = document.querySelector('input[name="resultado"]');
const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {

	let produto = new Produto(prod.value);

	resultado.value = produto.calcDesconto();

})



