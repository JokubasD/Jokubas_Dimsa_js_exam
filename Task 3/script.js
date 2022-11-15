"use strict";
console.log("script.js");
/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
//Initializing
const ENDPOINT = "https://api.github.com/users";
const showUsersBtn = document.getElementById("btn");
const outputContainer = document.getElementById("output");

//Event Listeners
showUsersBtn.addEventListener("click", () =>
  getData(ENDPOINT).then((userArr) => displayData(userArr))
);

//Main functions
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.warn("There was an error in getData()", error));
}

function displayData(uArray) {
  outputContainer.innerHTML = "";
  uArray.forEach((uObj) => {
    const oneCard = crEl("div", "card", outputContainer);
    crEl("h3", "userTitle", oneCard, `(${uObj.id}) ${uObj.login}:`);
    crImg(uObj.avatar_url, oneCard, "imageEl", uObj.login);
  });
}

//Helper functions
function crEl(tagName, givenClass, destination, text) {
  const El = document.createElement(tagName);
  if (givenClass) El.className = givenClass;
  if (text) El.textContent = text;
  destination.append(El);
  return El;
}

function crImg(source, destination, givenClass, alternative) {
  const imgEl = document.createElement("img");
  imgEl.src = source;
  if (givenClass) imgEl.className = givenClass;
  if (alternative) imgEl.alt = alternative;
  destination.append(imgEl);
  return imgEl;
}
