"use strict";
console.log("script.js");

/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

//All imports:
//import:
import { multiplication } from "./modules/math/multiplication.js";
import { substraction } from "./modules/math/subtraction.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

//import default:
import composition from "./modules/math/composition.js";
import division from "./modules/math/division.js";

//Test code
let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log('composition(one, four): ', a);
console.log('division(four, two): ', b);
console.log('substraction(three, two): ', c);
console.log('multiplication(five, two): ', d);
