import { arrayNumbers, arrayCars } from "./data.js";


function sortCars(a){
let arrayCars2 = a;
arrayCars2.sort(function(a,b){
    if ( a < b) {
        return -1;
    }
    else if ( a > b) {
        return 1;
    }
    else{
        return 0;
    }
})

console.log("->clg return von function sortCars() in Datei functions.js: ")  /*   ,
console.log(arrayCars2); */


return arrayCars2        /** ! wichtig Return der Funktion
                             sonst kommt nichts vorne an */
}

export {sortCars}