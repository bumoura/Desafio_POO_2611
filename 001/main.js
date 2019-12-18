class Salario {
    
	_valorHoraAula = 0;
	_aulasNoMes = 0;

	constructor(horaAula, aulasMes) {
		this._valorHoraAula = Number(horaAula);
		this._aulasNoMes = Number(aulasMes);
	}

	salarioLiquido() {
		let total = Number(this._valorHoraAula) * Number(this._aulasNoMes);
        total *= 0.89;
        return total;
	}
}

const horaAula = document.querySelector('input[name="horaAula"]');
const aulasMes = document.querySelector('input[name="aulasDada"]');
const resultado = document.querySelector('input[name="resultado"]');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let professor = new Salario(horaAula.value, aulasMes.value);

    resultado.value = professor.salarioLiquido()
})
