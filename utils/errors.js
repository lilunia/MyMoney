import { nameInput, amountInput, category, userRateValue, errorValue, errorCategory } from '../main.js'

export const clearErrors = () => {
	nameInput.classList.remove('error')
	amountInput.classList.remove('error')
	category.classList.remove('error')
	userRateValue.classList.remove('error')
	errorValue.textContent = ''
	errorCategory.textContent = ''
}
