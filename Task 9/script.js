'use strict';
console.log('script.js');
/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(argTitle, argDirector, argBudget) {
    this.title = argTitle;
    this.director = argDirector;
    this.budget = argBudget;
  }

  wasExpensive() {
    return this.budget > 100000000 ? true : false;
  }
}

//Test code
const m1 = new Movie("Titanic", "John", 1200000000);
const m2 = new Movie("Breaking Bad", "Jesse", 8000000);
console.log("m1.wasExpensive() ===", m1.wasExpensive());
console.log("m2.wasExpensive() ===", m2.wasExpensive());
