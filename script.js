'use strict';

let hasDriversLicense = false;
const passTest=true;

if (passTest) hasDriversLicense =true;{
    if (hasDriversLicense)
    console.log('Drivers license is valid');
}

// const interface='Audio';
// const private=534;
function logger() {
console.log('My name is Pirjo');
}
//calling the function
logger();

function fruitProcessor(apples, oranges) {
// console.log(apples, oranges);
const juice =`Juice with ${apples} apples and ${oranges} oranges`;
return juice;
}
const appleJuice =fruitProcessor(5,0); //arvo on muuttujassa
console.log(appleJuice);
// console.log(fruitProcessor(5,0));

const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);

