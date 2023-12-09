import { nameInput, amountInput, category, errorCategory } from '../main.js'
import {checkAmount} from './checkAmountAndCurrency.js'
import {clearErrors} from './errors.js'

export const checkForm = () => {
	clearErrors()
	if (nameInput.value.trim() !== '' && amountInput.value !== '' && category.value !== 'none') {
		checkAmount(amountInput)
		errorCategory.textContent = ''
	} else {
		errorCategory.textContent = 'Fill in all fields!'
	}
}
