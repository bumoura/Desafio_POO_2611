class Conta {
	_desconto = 0.1;
	_valorTotal = 0;

	constructor(valor) {
		this._valorTotal = Number(valor);
	}

	calcGorjeta() {
		return this._valorTotal * this._desconto + this._valorTotal;
	}
}

const prod = document.querySelector('input[name="valor"]');
const resultado = document.querySelector('input[name="resultado"]');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	let conta = new Conta(prod.value);

	resultado.value = conta.calcGorjeta();
});
