import {
	allTransactions,
	transactionsList,
	availableMoney,
	mainCurrency,
	incomeAmount,
	expenseAmount,
	rateInfo,
} from '../main.js'
import { moneyBalance, income, expense } from '../main.js'
import { countMoney } from './countMoney.js'

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

	if (allTransactions.length === 0) {
		availableMoney.textContent = `0 ${mainCurrency.value}`
		rateInfo.textContent = ''
		transactionsList.innerHTML = ''
		availableMoney.textContent = `0 ${mainCurrency.value}`
		incomeAmount.textContent = `0.00 ${mainCurrency.value}`
		expenseAmount.textContent = `0.00 ${mainCurrency.value}`
		moneyBalance.splice(1, moneyBalance.length)
		income.splice(1, income.length)
		expense.splice(1, expense.length)
		// localStorage.setItem('list', transactionsList.innerHTML)
		// localStorage.setItem('expensetab', expense)
		// localStorage.setItem('incometab', income)
		// localStorage.setItem('balancetab', moneyBalance)
		// localStorage.setItem('availableMoney', availableMoney.textContent)
		// localStorage.setItem('incomeAmount', incomeAmount.textContent)
		// localStorage.setItem('expenseAmount', expenseAmount.textContent)
	}
	localStorage.setItem('list', JSON.stringify(transactionsList.innerHTML))
	localStorage.setItem('expensetab', JSON.stringify(expense))
	localStorage.setItem('incometab', JSON.stringify(income))
	localStorage.setItem('balancetab', JSON.stringify(moneyBalance))
	localStorage.setItem('availableMoney', availableMoney.textContent)
	localStorage.setItem('incomeAmount', incomeAmount.textContent)
	localStorage.setItem('expenseAmount', expenseAmount.textContent)
}

export const deleteAll = () => {
	transactionsList.innerHTML = ''
	availableMoney.textContent = `0 ${mainCurrency.value}`
	incomeAmount.textContent = `0.00 ${mainCurrency.value}`
	expenseAmount.textContent = `0.00 ${mainCurrency.value}`
	rateInfo.textContent = ''
	moneyBalance.splice(1, moneyBalance.length)
	income.splice(1, income.length)
	expense.splice(1, expense.length)
	localStorage.setItem('list', JSON.stringify(transactionsList.innerHTML))
	localStorage.setItem('expensetab', JSON.stringify(expense))
	localStorage.setItem('incometab', JSON.stringify(income))
	localStorage.setItem('balancetab', JSON.stringify(moneyBalance))
	localStorage.setItem('availableMoney', availableMoney.textContent)
	localStorage.setItem('incomeAmount', incomeAmount.textContent)
	localStorage.setItem('expenseAmount', expenseAmount.textContent)
}
export { moneyBalance, income, expense }
