"use strict";
console.log("script.js");
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  sum(a, b) {
    return (a + b).toFixed(2);
  }
  subtraction(a, b) {
    return (a - b).toFixed(2);
  }
  multiplication(a, b) {
    return (a * b).toFixed(2);
  }
  division(a, b) {
    return (a / b).toFixed(2);
  }
}

//Test code
const c1 = new Calculator();
let a = 10;
let b = 15;

console.log("c1.sum(a, b) ===", c1.sum(a, b));
console.log("c1.subtraction(a, b) ===", c1.subtraction(a, b));
console.log("c1.multiplication(a, b) ===", c1.multiplication(a, b));
console.log("c1.division(a, b) ===", c1.division(a, b));
