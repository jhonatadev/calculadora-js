class CalcController {
	constructor() {
		this._displayCalc = "0"
		this._currentDate
		this.initialize()
	}

	initialize() {
		let displayCalcEl = document.querySelector('#display')
		let dateEl = document.querySelector('#data')
		let timeEl = document.querySelector('#hora')

		displayCalcEl.innerHTML = '465456'
		dateEl.innerHTML = '28/07/2019'
		timeEl.innerHTML = '23:59'
	}

	get displayCalc() {
		return this._displayCalc
	}
	set displayCalc(valor) {
		this._displayCalc = valor
	}

	get currentDate() {
		return this._currentDate
	}
	set currentDate(valor) {
		this._currentDate = valor
	}
}