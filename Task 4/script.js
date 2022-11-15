'use strict';
console.log('script.js');
/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputContainer = document.getElementById("output");
init();

function init() {
  getData(ENDPOINT).then((dataArray) => {
    dataArray.forEach((brandObj) => {
      createCard(brandObj);
    });
  });
}


//Helper Functions:

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.warn("There was an error in getData()", error));
}

function crEl(tagName, givenClass, destination, text) {
  const El = document.createElement(tagName);
  if (givenClass) El.className = givenClass;
  if (text) El.textContent = text;
  destination.append(El);
  return El;
}

function createCard(bObj) {
  const cardEl = crEl("div", "card", outputContainer);
  crEl("h2", "cardTitle", cardEl, `${bObj.brand}:`);
  const unorderedList = crEl("ul", "cardUlElement", cardEl);
  getModels(bObj).forEach((model) => {
    crEl("li", "model", unorderedList, model);
  });
}

function getModels(bObj) {
  return bObj.models;
}
