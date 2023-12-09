import { errorValue, transactionCurrency, mainCurrency, userRateCheckbox, currentRateCheckbox } from '../main.js'
import { checkUserRate } from './checkRate.js'
import { addNewTransaction } from './newTransaction.js'
import { calculateCurrency } from './checkRate.js'

export const checkAmount = amount => {
	const re = /(^[0-9]*).[0-9]{0,2}$/

	if (amount.value >= 0.01 && re.test(amount.value)) {
		amount.classList.remove('error')
		errorValue.textContent = ''
		checkCurrency()
	} else {
		amount.classList.add('error')
		errorValue.textContent = 'Please enter the correct value!'
	}
}

const checkCurrency = () => {
	if (transactionCurrency.value !== mainCurrency.value) {
		errorValue.textContent = 'Please select current rate or enter your own rate!'
		if (userRateCheckbox.checked === true) {
			errorValue.textContent = ''
			checkUserRate()
		} else if (currentRateCheckbox.checked === true) {
			errorValue.textContent = ''
			calculateCurrency(transactionCurrency.value, mainCurrency.value)
			setTimeout(addNewTransaction, 1000)
		}
	} else {
		addNewTransaction()
	}
}
