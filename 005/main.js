class Valor {
	_valores = [];

	constructor(valor1, valor2) {
		this._valores.push(Number(valor1));
		this._valores.push(Number(valor2));
	}

	maior() {
		return Math.max(...this._valores);
	}

	verifica() {
		let conta = this.maior();
		if((conta%2 == 0)){
			return 'Par';
		}else {
			return 'ímpar';
		}
	}
}

const num1 = document.querySelector('input[name="num1"]');
const num2 = document.querySelector('input[name="num2"]');

const resultado = document.querySelector('input[name="resultado"]');
const maior = document.querySelector('input[name="maior"]');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	let valor = new Valor(num1.value, num2.value);

	maior.value = valor.maior();
	resultado.value = valor.verifica();
});
