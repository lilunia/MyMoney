const addBtn = document.querySelector('.panel-transactions__controls-add')
const deleteAllBtn = document.querySelector('.panel-transactions__controls-delete-all')
const deleteBtn = document.querySelector('.panel-transactions__list-transaction-deleteBtn')
const transactionsList = document.querySelector('.panel-transactions__list')

const availableMoney = document.querySelector('.panel-info__money-available-amount')
const incomeAmount = document.querySelector('.panel-info__money-flows-income-amount')
const expenseAmount = document.querySelector('.panel-info__money-flows-expense-amount')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const category = document.querySelector('#category')

const popup = document.querySelector('.popup')
const errorValue = document.querySelector('.error-value')
const errorFields = document.querySelector('.error-fields')
const saveBtn = document.querySelector('.popup__controls-save')
const cancelBtn = document.querySelector('.popup__controls-cancel')

let selectedCategory
let categoryIcon
let id = 0
let moneyBalance = [0]
let expense = [0]
let income = [0]
let transactionToDelete

const openPopup = () => {
	popup.style.display = 'block'
}
const closePopup = () => {
	popup.style.display = 'none'
	nameInput.value = ''
	amountInput.value = ''
	errorFields.textContent = ''
	errorValue.textContent = ''
	category.value = 'none'
}

const addNewTransaction = () => {
	const re = /^[0-9]*.[0-9]{0,2}?$/
	nameInput.classList.remove('error')
	category.classList.remove('error')
	amountInput.classList.remove('error')
	if (
		nameInput.value.trim() !== '' &&
		amountInput.value !== '' &&
		amountInput.value >= 0.01 &&
		category.value !== 'none' &&
		re.test(amountInput.value)
	) {
		errorFields.textContent = ''
		errorValue.textContent = ''
		nameInput.classList.remove('error')
		category.classList.remove('error')
		amountInput.classList.remove('error')
		createNewTransaction()
		closePopup()
	} else if (nameInput.value === '' || category.value === 'none') {
		errorFields.textContent = 'Fill in all fields!'
		nameInput.classList.add('error')
		category.classList.add('error')
	} else {
		errorValue.textContent = 'Enter the correct value!'
		amountInput.classList.add('error')
		console.log(amountInput.value)
	}
}

const createNewTransaction = () => {
	const newTransaction = document.createElement('div')
	newTransaction.classList.add('panel-transactions__list-transaction')
	selectedCategory = category.value
	addIcon(selectedCategory)
	newTransaction.innerHTML = `
	<p class="panel-transactions__list-transaction-name">${categoryIcon}${nameInput.value}</p>
	<p class="panel-transactions__list-transaction-amount">${amountInput.value}zł 
		<button class="panel-transactions__list-transaction-deleteBtn"  onclick="deleteTransaction(${id})">
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
}

const addIcon = selectedCategory => {
	switch (selectedCategory) {
		case 'income':
			categoryIcon = `<span class="transaction-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler 	
				icon-tabler-cash-banknote" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 			  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
				<path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
				<path d="M18 12l.01 0"></path>
				<path d="M6 12l.01 0"></path>
				 </svg></span>`
			break
		case 'bills':
			categoryIcon = `<span class="transaction-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-invoice" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
			<path d="M9 7l1 0"></path>
			<path d="M9 13l6 0"></path>
			<path d="M13 17l2 0"></path>
		 </svg></span>`
			amountInput.value = amountInput.value * -1
			break
		case 'food':
			categoryIcon = `<span class="transaction-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-soup" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z"></path>
			<path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
			<path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
			<path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
		 </svg></span>`
			amountInput.value = amountInput.value * -1
			break
		case 'fuel-tickets':
			categoryIcon = `<span class="transaction-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gas-station" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"></path>
			<path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"></path>
			<path d="M3 20l12 0"></path>
			<path d="M18 7v1a1 1 0 0 0 1 1h1"></path>
			<path d="M4 11l10 0"></path>
		 </svg></span>`
			amountInput.value = amountInput.value * -1
			break
		case 'entertainment':
			categoryIcon = `<span class="transaction-icon">
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   			<path d="M21 12a9 9 0 1 0 -8.012 8.946"></path>
   			<path d="M9 10h.01"></path>
   			<path d="M15 10h.01"></path>
   			<path d="M9.5 15a3.59 3.59 0 0 0 2.774 .99"></path>
   			<path d="M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59z"></path>
		</svg></span>`
			amountInput.value = amountInput.value * -1
			break
		case 'other':
			categoryIcon = `<span class="transaction-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coins" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"></path>
			<path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"></path>
			<path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z"></path>
			<path d="M3 6v10c0 .888 .772 1.45 2 2"></path>
			<path d="M3 11c0 .888 .772 1.45 2 2"></path>
		 </svg></span>`
			amountInput.value = amountInput.value * -1
			break
	}
}
const countMoney = (money, income, expense) => {
	const sum = money.reduce((x, y) => x + y)
	const sumIncome = income.reduce((x, y) => x + y)
	const sumExpense = expense.reduce((x, y) => x + y)

	availableMoney.textContent = `${sum}zł`
	incomeAmount.textContent = `${sumIncome}zł`
	expenseAmount.textContent = `${sumExpense}zł`
}

const deleteTransaction = id => {
	transactionToDelete = document.getElementById(id)
	const amountToDelete = transactionToDelete.lastElementChild.innerText

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
}

const deleteAll = () => {
	transactionsList.innerHTML = ''
	availableMoney.textContent = '0zł'
	incomeAmount.textContent = ''
	expenseAmount.textContent = ''
	moneyBalance = [0]
	expense = [0]
	income = [0]
}

addBtn.addEventListener('click', openPopup)
category.addEventListener('change', addIcon)
saveBtn.addEventListener('click', addNewTransaction)
cancelBtn.addEventListener('click', closePopup)
deleteAllBtn.addEventListener('click', deleteAll)
