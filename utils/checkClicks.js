import {deleteTransaction} from './delete.js'
import {checkForm} from './checkForm.js'

let targetTransaction

export const checkClick = e => {
	if (e.target.closest('button').classList.contains('panel-transactions__list-transaction-deleteBtn')) {
		targetTransaction = e.target.closest('.panel-transactions__list-transaction')
		deleteTransaction(targetTransaction)
	}
}

export const checkEnter = e => {
	if (e.key === 'Enter') {
		checkForm()
	}
}
