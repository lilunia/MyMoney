import { availableMoney, incomeAmount, expenseAmount, mainCurrency } from '../main.js'

export const countMoney = (moneyBalance, income, expense) => {
	const sum = moneyBalance.reduce((x, y) => x + y).toFixed(2)
	const sumIncome = income.reduce((x, y) => x + y).toFixed(2)
	const sumExpense = expense.reduce((x, y) => x + y).toFixed(2)

	availableMoney.textContent = `${sum} ${mainCurrency.value}`
	incomeAmount.textContent = `${sumIncome} ${mainCurrency.value}`
	expenseAmount.textContent = `${sumExpense} ${mainCurrency.value}`

	localStorage.setItem('availableMoney', availableMoney.textContent)
	localStorage.setItem('incomeAmount', incomeAmount.textContent)
	localStorage.setItem('expenseAmount', expenseAmount.textContent)
}

