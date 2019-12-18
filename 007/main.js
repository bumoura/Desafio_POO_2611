class Emprestimo {
	_salarioBruto = 0;
	_valorParcela = 0;
	_valorMin = 0.3;

	constructor(bruto, parcela) {
		this._salarioBruto = Number(bruto);
		this._valorParcela = Number(parcela);
	}

	verificaParcela() {
		return this._salarioBruto * this._valorMin;
	}

	verificaCredito() {
		if (this.verificaParcela() > this._valorParcela) {
			return 'Crédito Aprovado';
		} else {
			return 'Crédito Reprovado';
		}
	}
}
const num1 = document.querySelector('input[name="num1"]');
const num2 = document.querySelector('input[name="num2"]');

const resultado = document.querySelector('input[name="resultado"]');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	let valor = new Emprestimo(num1.value, num2.value);

	resultado.value = valor.verificaCredito();
});
