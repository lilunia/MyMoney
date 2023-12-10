import {
	transactionsList,
	mainCurrency,
	transactionCurrency,
	category,
	nameInput,
	amountInput,
	moneyBalance,
	expense,
	income,
} from '../main.js'
import { closePopup } from './popup.js'
import { countMoney } from './countMoney.js'
import { addIcon, categoryIcon } from './icons.js'
import { exchangedValue } from './checkRate.js'
import { setArrayStorage} from './memoryStorage.js'

let selectedCategory
let id = 0

export const addNewTransaction = () => {
	createNewTransaction()
	closePopup()
}
const createNewTransaction = () => {
	const newTransaction = document.createElement('div')
	newTransaction.classList.add('panel-transactions__list-transaction')

	if (transactionCurrency.value !== mainCurrency.value) {
		amountInput.value = exchangedValue
	}
	selectedCategory = category.value
	addIcon(selectedCategory)

	newTransaction.innerHTML = `
	<p class="panel-transactions__list-transaction-name">${categoryIcon}${nameInput.value}</p>
	<p class="panel-transactions__list-transaction-amount">${parseFloat(amountInput.value).toFixed(2)} ${mainCurrency.value}
		<button class="panel-transactions__list-transaction-deleteBtn">
			<span class="x-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
					viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg></span>
		</button></p>
	`

	if (amountInput.value > 0) {
		newTransaction.classList.add('income')
		income.push(parseFloat(amountInput.value))
	} else {
		newTransaction.classList.add('expense')
		expense.push(parseFloat(amountInput.value))
	}
	newTransaction.setAttribute('id', id)
	transactionsList.append(newTransaction)
	moneyBalance.push(parseFloat(amountInput.value))
	countMoney(moneyBalance, income, expense)
	id++
	setArrayStorage()
}
