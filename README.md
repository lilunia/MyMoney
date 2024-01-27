## Live
<a href="https://lilunia.github.io/MyMoney/">lilunia.github.io/MyMoney/</a>
<img src="./img/mymoney.PNG" width= "100%" height= "100%" alt="Screen Shot">

# MyMoney

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [JavaScript properties and methods](#javaScript-properties-and-methods)
- [Live](#live)
- [Problems](#problems)

## General info

This application allows to manage own finances in chosen currency (PLN, EUR, USD, GBP, CHF). Currency exchange is based on <a href = 'https://currency.getgeoapi.com/'>CURRENCY API</a>. 

When the 'Add Transaction' button is clicked, a pop-up window will appear. In this window it is necessary to enter a transaction name, an amount and select the transaction category. The user can add a new transaction in a currency different from the main one. If the currency of the transaction needs to be changed to the main currency, the user can either select the current rate from the API or enter their own rate. Transactions can be deleted either one by one or all at once. The amount of available money, income and expenses are constantly updated.

MyMoney was written in english language.

Own project. Inspired by MMC School.

## Technologies

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=pl"><img src="./img/html5_icon.svg" style="width:32px; height:32px;" alt="HTML icon"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=pl"><img src="./img/css3_icon.svg" style="width:32px; height:32px;" alt="Css icon"></a>
<a href="https://sass-lang.com/"><img src="./img/sass_icon.svg" style="width:32px; height:32px;"alt="Sass icon"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="./img/js_icon.svg" style="width:32px; height:32px;" alt="JS icon"></a>

- HTML
- CSS
- SASS & BEM
- Javascript

</p>

## Screenshots

- main app
  <p align="center">
  <img src="./img/mymoney.PNG" width= "70%" height= "70%" alt="Main app screenshot">
  </p>

- popup window
  <p align="center">
  <img src="./img/mymoney-popup.PNG" width= "70%" height= "70%" alt="Popup-window screenshot">
  </p>

## JavaScript properties and methods

### In this project I did cover the following inbuilt JavaScript properties and methods

- reduce()
- toFixed()
- indexOf()
- push()
- parseFloat()
- createElement()
- append()
- classList
- add()
- remove()
- contains()
- trim()
- splice()
- test()
- setAttribute()
- getElementById()
- style property
- innerHTML
- lastElementChild
- textContent
- document.querySelector
- addEventListener
- Storage: setItem(), getItem()


## Installation

To run this project, you must have the following dependencies installed:

- Git (https://git-scm.com)

```bash

git clone https://github.com/lilunia/MyMoney.git

```


## Problems

- when the number input contains an invalid value, I did try to retrieve the value, I got a blank string
- without allTransactions.hasOwnProperty(transaction) in checkMainCurrency() -> Uncaught TypeError: currentTransaction.lastElementChild is undefined, iterate only over the keys of an object
- in checkMainCurrency() I want to calculate Currency and then after receiving an amount of rate I want to go to
  changing values in transaction list -> use of setTimeout()
- variable 'selectedTransactionCurrency' stores an info about transaction currency in the list on the main panel -> currentTransaction.lastElementChild.innerText.slice(-3)
