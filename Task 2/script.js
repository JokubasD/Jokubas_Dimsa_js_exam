'use strict';
console.log('script.js');
/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const allHTMLEls = {
    clickBtn: document.getElementById('btn__element'),
    clickAmt: document.getElementById('btn__state'),
}

allHTMLEls.clickBtn.addEventListener('click', increment)

function increment() {
    allHTMLEls.clickAmt.textContent = Number(allHTMLEls.clickAmt.textContent) + 1
}