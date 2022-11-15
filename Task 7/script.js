'use strict';
console.log('script.js');
/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// All keys in a new array:
console.log("All keys in a new array ===", showObjectKeys(audi));

//Functions:

function showObjectKeys(oneObject) {
  const keyArr = [];
  for (const key in oneObject) keyArr.push(key);
  return keyArr;
}
