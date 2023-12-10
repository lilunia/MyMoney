import { availableMoney, incomeAmount, expenseAmount, mainCurrency } from '../main.js'
import { setArrayStorage, setTextStorage } from './memoryStorage.js'

export const countMoney = (moneyBalance, income, expense) => {
	const sum = moneyBalance.reduce((x, y) => x + y).toFixed(2)
	const sumIncome = income.reduce((x, y) => x + y).toFixed(2)
	const sumExpense = expense.reduce((x, y) => x + y).toFixed(2)

	availableMoney.textContent = `${sum} ${mainCurrency.value}`
	incomeAmount.textContent = `${sumIncome} ${mainCurrency.value}`
	expenseAmount.textContent = `${sumExpense} ${mainCurrency.value}`

	setArrayStorage()
	setTextStorage()
}
