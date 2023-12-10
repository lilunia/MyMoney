import {
	availableMoney,
	incomeAmount,
	expenseAmount,
	transactionsList,
	expense,
	income,
	moneyBalance
} from '../main.js'

export const setTextStorage = () => {
	localStorage.setItem('availableMoney', availableMoney.textContent)
	localStorage.setItem('incomeAmount', incomeAmount.textContent)
	localStorage.setItem('expenseAmount', expenseAmount.textContent)
}
export const getTextStorage = () => {
	availableMoney.textContent = localStorage.getItem('availableMoney')
	incomeAmount.textContent = localStorage.getItem('incomeAmount')
	expenseAmount.textContent = localStorage.getItem('expenseAmount')
}
export const setArrayStorage = () => {
	localStorage.setItem('list', JSON.stringify(transactionsList.innerHTML))
	localStorage.setItem('balanceArr', JSON.stringify(moneyBalance))
	localStorage.setItem('expenseArr', JSON.stringify(expense))
	localStorage.setItem('incomeArr', JSON.stringify(income))
}

