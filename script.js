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

const num=Number('23')

//function declaration
function calcAge1(birthYear) {
return 2023-birthYear;
}

const age1=calcAge1(1980);
console.log(age1);

//function expression
const calcAge2= function (birthYear) {
    return 2023-birthYear;}

const age2=calcAge2(1936);
console.log(age2);

//arrow function
const calcAge3= birthYear => 2023-birthYear;
const age3 = calcAge3(1950);
console.log(age3);

const yearsUntilRetirement=(birthYear, firstName) => {
    const age=2023-birthYear;
    const retirement=65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;


}
console.log(yearsUntilRetirement(1980,'Pipe'));
console.log(yearsUntilRetirement(1990,'Polla'));
