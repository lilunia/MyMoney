import { userRateCheckbox, currentRateCheckbox, userRateValue, transactionCurrency, mainCurrency } from '../main.js'

export const checkboxStatus = () => {
	if (transactionCurrency.value !== mainCurrency.value) {
		currentRateCheckbox.disabled = false
		userRateCheckbox.disabled = false
	} else {
		userRateCheckbox.checked = false
		currentRateCheckbox.checked = false
		currentRateCheckbox.disabled = true
		userRateCheckbox.disabled = true
	}
}
export const setCheckbox = e => {
	const status = e.target.checked
	if (e.target === userRateCheckbox) {
		currentRateCheckbox.checked = !status
	} else if (e.target === currentRateCheckbox) {
		userRateCheckbox.checked = !status
	}
	if (userRateCheckbox.checked === true) {
		userRateValue.disabled = false
	} else {
		userRateValue.disabled = true
	}
}
