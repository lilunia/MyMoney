import {
	transactionsList,
	availableMoney,
	mainCurrency,
	incomeAmount,
	expenseAmount,
	rateInfo,
	moneyBalance,
	income,
	expense
} from '../main.js'
import { countMoney } from './countMoney.js'
import { setArrayStorage, setTextStorage } from './memoryStorage.js'

export const deleteTransaction = transactionToDelete => {
	const amountToDelete = parseFloat(transactionToDelete.lastElementChild.innerText)
	const indexOfTransaction = moneyBalance.indexOf(amountToDelete)
	const indexOfIncome = income.indexOf(amountToDelete)
	const indexOfExpense = expense.indexOf(amountToDelete)

	if (transactionToDelete.classList.contains('income')) {
		income.splice(indexOfIncome, 1)
	} else {
		expense.splice(indexOfExpense, 1)
	}
	moneyBalance.splice(indexOfTransaction, 1)
	transactionToDelete.remove()
	countMoney(moneyBalance, income, expense)

	if (transactionsList.length === 0) {
		resetTextValues()
		resetBalance()
	}
	setArrayStorage()
	setTextStorage()
}

export const deleteAll = () => {
	resetTextValues()
	resetBalance()
	setArrayStorage()
	setTextStorage()
}
const resetTextValues = () => {
	rateInfo.textContent = ''
	transactionsList.innerHTML = ''
	availableMoney.textContent = `0 ${mainCurrency.value}`
	incomeAmount.textContent = `0.00 ${mainCurrency.value}`
	expenseAmount.textContent = `0.00 ${mainCurrency.value}`
}
const resetBalance = () => {
	moneyBalance.splice(1, moneyBalance.length)
	income.splice(1, income.length)
	expense.splice(1, expense.length)
}
