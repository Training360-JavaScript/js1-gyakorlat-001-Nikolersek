/*A `js/sum.js` fájlban dolgozz!
- `sum.js`: Hozz létre két függvénykifejezést arrow function-nel! 
- A függvények neve summation és subtraction legyen. 
- Mindegyik függvény két paramétert kap, ezek neve a és b. 
- Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelmezett érték a 0 legyen. 
- A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével. */
const summation = (a = 0, b = 0) => a + b;
const subtraction = (a = 0, b = 0) => a - b;