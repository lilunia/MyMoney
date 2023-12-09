import { amountInput } from '../main.js'
let categoryIcon

export const addIcon = selectedCategory => {
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
export { categoryIcon }
// export { categoryIcon, amountInput }
