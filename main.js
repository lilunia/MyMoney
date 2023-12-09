import { openPopup, closePopup } from './utils/popup.js'
import { checkForm } from './utils/checkForm.js'
import { checkEnter, checkClick } from './utils/checkClicks.js'
import { deleteAll } from './utils/delete.js'
import { checkMainCurrency } from './utils/checkMainCurrency.js'
import { checkboxStatus, setCheckbox } from './utils/checkboxes.js'
import { addIcon } from './utils/icons.js'

const addBtn = document.querySelector('.panel-transactions__controls-add')
const deleteAllBtn = document.querySelector('.panel-transactions__controls-delete-all')
const saveBtn = document.querySelector('.popup__controls-save')
const cancelBtn = document.querySelector('.popup__controls-cancel')
export const transactionsList = document.querySelector('.panel-transactions__list')
export const availableMoney = document.querySelector('.panel-info__money-available-amount')
export const incomeAmount = document.querySelector('.panel-info__money-flows-income-amount')
export const expenseAmount = document.querySelector('.panel-info__money-flows-expense-amount')
export const nameInput = document.querySelector('#name')
export const amountInput = document.querySelector('#amount')
export const category = document.querySelector('#category')
export const popup = document.querySelector('.popup')
export const errorValue = document.querySelector('.error-value')
export const errorCategory = document.querySelector('.error-category')
export const rateInfo = document.querySelector('.panel-transactions__info-currency-rate')
export const currentRateCheckbox = document.querySelector('#current-rate')
export const userRateCheckbox = document.querySelector('#user-rate')
export const userRateValue = document.querySelector('#user-rate-input')
export const transactionCurrency = document.querySelector('#popup-currency')
export const mainCurrency = document.querySelector('#panel-currency')

export let targetTransaction
export let allTransactions
export let transactionAmount
let moneyBalance = [0]
let expense = [0]
let income = [0]
export { moneyBalance, expense, income }

allTransactions = document.getElementsByClassName('panel-transactions__list-transaction')

addBtn.addEventListener('click', openPopup)
category.addEventListener('change', addIcon)
saveBtn.addEventListener('click', checkForm)
category.addEventListener('keyup', checkEnter)
amountInput.addEventListener('keyup', checkEnter)
userRateValue.addEventListener('keyup', checkEnter)
cancelBtn.addEventListener('click', closePopup)
deleteAllBtn.addEventListener('click', deleteAll)
transactionsList.addEventListener('click', checkClick)
transactionCurrency.addEventListener('change', checkboxStatus)
mainCurrency.addEventListener('change', checkMainCurrency)
userRateCheckbox.addEventListener('click', setCheckbox)
currentRateCheckbox.addEventListener('click', setCheckbox)

window.addEventListener('load', () => {
	if (localStorage.getItem('list') !== '') {
		transactionsList.innerHTML = JSON.parse(localStorage.getItem('list'))
		moneyBalance = JSON.parse(localStorage.getItem('balancetab'))
		expense = JSON.parse(localStorage.getItem('expensetab'))
		income = JSON.parse(localStorage.getItem('incometab'))
	}
	availableMoney.textContent = localStorage.getItem('availableMoney')
	incomeAmount.textContent = localStorage.getItem('incomeAmount')
	expenseAmount.textContent = localStorage.getItem('expenseAmount')
})
