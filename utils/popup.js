import {
	transactionCurrency,
	mainCurrency,
	errorValue,
	popup,
	nameInput,
	amountInput,
	userRateValue,
	category,
	userRateCheckbox,
	currentRateCheckbox,
} from '../main.js'

import { clearErrors } from './errors.js'

export const openPopup = () => {
	transactionCurrency.value = mainCurrency.value
	errorValue.textContent = ''
	popup.style.display = 'block'
	popup.style.top = `+${window.scrollY}px`
	document.body.style.overflow = 'hidden'
}
export const closePopup = () => {
	nameInput.value = ''
	amountInput.value = ''
	userRateValue.value = ''
	category.value = 'none'
	userRateCheckbox.checked = false
	currentRateCheckbox.checked = false
	userRateValue.disabled = true
	currentRateCheckbox.disabled = true
	userRateCheckbox.disabled = true
	popup.style.display = 'none'
	document.body.style.overflow = 'auto'
	clearErrors()
}
