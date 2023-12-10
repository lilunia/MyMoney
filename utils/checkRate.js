import { userRateCheckbox, userRateValue, errorValue, rateInfo, amountInput } from '../main.js'
import { addNewTransaction } from './newTransaction.js'
let rate
let exchangedValue = 0

export const checkUserRate = () => {
	if (userRateCheckbox.checked === true && userRateValue.value !== '') {
		errorValue.textContent = ''
		const re = /(^[0-9]?).[0-9]{0,4}$/
		if (userRateValue.value >= 0.0001 && userRateValue.value < 10 && re.test(userRateValue.value)) {
			userRateValue.classList.remove('error')
			errorValue.textContent = ''
			exchangeMoney()
			addNewTransaction()
		} else {
			userRateValue.classList.add('error')
			errorValue.textContent = 'Please enter the correct rate!'
		}
	} else {
		userRateValue.classList.add('error')
		errorValue.textContent = 'Please enter the rate!'
	}
}

const exchangeMoney = () => {
	rate = userRateValue.value
	exchangedValue = amountInput.value * rate
}

export const calculateCurrency = (oneCurrency, twoCurrency) => {
	fetch(
		`https://api.getgeoapi.com/v2/currency/convert?api_key=6843b0de6d14d7c6caf41af569de90135dd79aae&from=${oneCurrency}&to=${twoCurrency}&amount=${amountInput.value}&format=json`
	)
		.then(res => res.json())
		.then(data => {
			rate = data.rates[twoCurrency].rate
			exchangedValue = amountInput.value * rate
			errorValue.textContent = `1 ${oneCurrency} = ${rate} ${twoCurrency}`
			rateInfo.textContent = `1 ${oneCurrency} = ${rate} ${twoCurrency}`
		})
		.catch(error => {
			console.error(error)
		})
}

export { exchangedValue, rate }
