import { sortCars } from "./function.js";

import { arrayNumbers, arrayCars } from "./data.js";

console.log("->clg Start index.js")

/* console.log( arrayNumbers)
console.log( arrayCars)
console.log( sortCars) */

console.log("const");
const sortierteCars = sortCars(arrayCars)
const sortierteNumb = sortCars(arrayNumbers)

console.log("Ergebnis");
console.log(sortierteCars)
console.log(sortierteNumb)

console.log("->clg End index.js")