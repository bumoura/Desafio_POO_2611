class Salario {

	_salarioMinimo = 998;
	_salarioPessoa = 0;

	constructor(salario) {
		this._salarioPessoa = Number(salario);
	}


	diferenca() {
		const diferenca = this._salarioPessoa / this._salarioMinimo

		return Math.floor(diferenca);
	}

}

const salario = document.querySelector('input[name="valor"]');
const resultado = document.querySelector('input[name="resultado"]');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	let diferenca = new Salario(salario.value);

	resultado.value = `Tem ${diferenca.diferenca()} salarios minimos no seu sálario`
});
