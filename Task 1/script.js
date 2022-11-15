'use strict';
console.log('script.js');
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const allHTMLEls = {
    form: document.forms[0],
    weigthInput: document.getElementById('search'),
    convertedContainer: document.getElementById('output'),
}

allHTMLEls.form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('JS is in control') 
    const kilogramValue = allHTMLEls.weigthInput.value.trim()
    displayConvertedValues(kilogramValue)
})


function calcLb(kilos) {
    return (kilos * 2.2046).toFixed(2)
}
function calcG(kilos) {
    return (kilos / 0.0010000).toFixed(2)
}
function calcOz(kilos) {
    return (kilos * 35.274).toFixed(2)
}

function crEl(tagName, givenClass, destination, text){
    const El = document.createElement(tagName);
    if (givenClass) El.className = givenClass;
    if (text) El.textContent = text;
    destination.append(El);
    return El;
}

function displayConvertedValues(kilograms) {
    allHTMLEls.convertedContainer.innerHTML = ''
    crEl('p', 'convertedValue', allHTMLEls.convertedContainer, `${kilograms} kg = ${calcLb(kilograms)} pounds (lb)`)
    crEl('p', 'convertedValue', allHTMLEls.convertedContainer, `${kilograms} kg = ${calcG(kilograms)} grams (g)`)
    crEl('p', 'convertedValue', allHTMLEls.convertedContainer, `${kilograms} kg = ${calcOz(kilograms)} ounces (oz)`)
}