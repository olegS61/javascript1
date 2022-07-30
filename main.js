let vodka = 50, tomatojuice = 120, lemonJuice = 10,
    tabasco  = 1, worcester = 1;
let volume = 500;
let k = (vodka + tomatojuice+lemonJuice+tabasco+worcester)/volume;
console.log(k); 
console.log(tabasco*k); 
let vdk = (500* .182); 
let tom = (500* .4368); 
let lem = (500* .0374); 
let tab = (500* .00364); 
let wor = (500* .00364); 
console.log(vdk+tom+lem+tab+wor);