import {
	allTransactions,
	transactionsList,
	availableMoney,
	incomeAmount,
	expenseAmount,
	mainCurrency,
} from '../main.js'
import { moneyBalance, income, expense } from '../main.js'
import { calculateCurrency, rate } from './checkRate.js'
import { countMoney } from './countMoney.js'

let currentTransaction
let selectedTransactionCurrency
let transactionAmount

export const checkMainCurrency = () => {
	if (allTransactions.length === 0) {
		availableMoney.textContent = `0 ${mainCurrency.value}`
		incomeAmount.textContent = `0.00 ${mainCurrency.value}`
		expenseAmount.textContent = `0.00 ${mainCurrency.value}`
		localStorage.setItem('availableMoney', availableMoney.textContent)
		localStorage.setItem('incomeAmount', incomeAmount.textContent)
		localStorage.setItem('expenseAmount', expenseAmount.textContent)
	} else {
		currentTransaction = allTransactions[0]
		selectedTransactionCurrency = currentTransaction.lastElementChild.innerText.slice(-3)

		calculateCurrency(selectedTransactionCurrency, mainCurrency.value)
		setTimeout(() => {
			moneyBalance.splice(1, moneyBalance.length)
			income.splice(1, income.length)
			expense.splice(1, expense.length)
			for (const transaction in allTransactions) {
				if (allTransactions.hasOwnProperty(transaction)) {
					currentTransaction = allTransactions[transaction]
					transactionAmount = parseFloat(currentTransaction.lastElementChild.innerText)
					const newAmount = parseFloat(transactionAmount * rate).toFixed(2)
					currentTransaction.lastElementChild.innerHTML = `${newAmount} ${mainCurrency.value}
				<button class="panel-transactions__list-transaction-deleteBtn">
					<span class="x-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg></span>
				</button>`

					if (newAmount > 0) {
						income.push(parseFloat(newAmount))
					} else {
						expense.push(parseFloat(newAmount))
					}

					moneyBalance.push(parseFloat(newAmount))
					countMoney(moneyBalance, income, expense)
					localStorage.setItem('list', JSON.stringify(transactionsList.innerHTML))
					localStorage.setItem('expensetab', JSON.stringify(expense))
					localStorage.setItem('incometab', JSON.stringify(income))
					localStorage.setItem('balancetab', JSON.stringify(moneyBalance))
				}
			}
		}, 500)
	}
}
