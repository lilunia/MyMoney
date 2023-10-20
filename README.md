<img src="./img/mymoney.PNG" width= "100%" height= "100%" alt="Screen Shot">

# MyMoney

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [JavaScript properties and methods](#javaScript-properties-and-methods)
- [Live](#live)

## General info

This application allows to manage own finances. When add transaction button is clicked popup window will appear. In this window need to be enter a name of transaction, an amount and select the transaction category. Transactions can be deleted either one by one or all of them at once.
The amount of available money, income and expenses are constantly updated.

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

## Live

<a href="https://lilunia.github.io/MyMoney/">lilunia.github.io/MyMoney/</a>

## Problems

- when the number input contains an invalid value, I did try to retrieve the value, I got a blank string
- without allTransactions.hasOwnProperty(transaction) in checkMainCurrency() -> Uncaught TypeError: currentTransaction.lastElementChild is undefined
- in checkMainCurrency() I want to calculate Currency and then after receive an amount of rate I want to go to 
changing values in transactions list -> use of setTimeout()
- variable 'selectedTransactionCurrency' stores an info about transaction currency on the list on main panel -> currentTransaction.lastElementChild.innerText.slice(-3)