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

//functions calling other functions

const cutFruitPieces1= function (fruit1) {
return fruit1 * 4;
};
const fruitProcessor1 = function (apples1, oranges1) {
    // console.log(apples, oranges);
    const applePieces1= cutFruitPieces1(apples1);
    const orangePieces1= cutFruitPieces1(oranges1);
    
    const juice1 =`Juice with ${applePieces1} pieces of apple 
    and ${orangePieces1} pieces of orange`;
    return juice1;
    }

    console.log(fruitProcessor1(2, 3));
    
    const calcAge= function(birthYear){
        return 2037-birthYear;
    }

    
    const yearsUntilRetirement= function(birthYear, firstName) {
        const age=calcAge(birthYear);
        const retirement=65 - age;
        if(retirement>0){
            console.log(`${firstName} retises in ${retirement} years`);
            return retirement;
    
        }
        else{
            console.log(`${firstName}has allready retired 😘`);
        return -1;
    
    }
    }
    console.log(yearsUntilRetirement(1980, 'Pipe'));
    console.log(yearsUntilRetirement(1970, 'Mike'));//arvo on muuttujassa

    // Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population,capitalCity)
{
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const descPortugal=describeCountry('Portugal',10,'Lisbon');
const descGermany=describeCountry('Germany',83,'Berlin');
const descFinland=describeCountry('Finland',6,'Helsinki');

// Coding Challenge
// Dolphins and the Koalas!
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.


//OMA VERSIO:
// const dolphins = [44, 23, 71];
// const koalas = [65, 54, 49];

// function checkWinner(averageDolhins, avgKoalas){
// if(averageDolhins <= 2 * avgKoalas){

// console.log(`${koalas} wins`)
// return checkWinner;
// }

// else {
//     console.log(`${dolphins} wins`)  
//     return checkWinner;
// }}
// const winningPoint=function (team){
// return team;
// }

// function checkWinner(dolhins, koalas){
//     if (dolhins >= 2 * koalas){

//     const averageDolhins = winningPoint(dolhins);
//     const avgKoalas = winningPoint(koalas);
//     }
// else    (koalas >= 2 * dolphins){

//         const averageDolhins = winningPoint(dolhins);
//         const avgKoalas = winningPoint(koalas);
// }}
//OIKEA VASTAUS:
const calcAverage=(a,b,c) => (a+b+c) / 3;
console.log(calcAverage(3,4,5));

const scoreDolphins= calcAverage(44,23,71);
const scoreKoalas= calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins,avgKoalas){

    if(avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins win 🙌 (${avgDolphins} vs. ${avgKoalas})`);}
    
    else if
    (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win ($avgKoalas) vs. ($avgDolphins)`);}
        else {

            console.log('No winner');
        }}

checkWinner(scoreDolphins,scoreKoalas);
checkWinner(45654,35);

const friends = ['Hannah', 'Saara', 'Petteri'];
console.log(friends);

const years= new Array(1980,1990,2023);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='Jimi';
console.log(friends);

const firstName = 'Pipe';
const pipe=[firstName, 'Grön', 2023-1980,'student',friends];
console.log(pipe);

const newLenght =friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('Maria');
console.log(friends);

//Remove elements
friends.pop();//last
const popped= friends.pop();
console.log(popped);

friends.push(23);
console.log(friends.indexOf('Maria'));
console.log(friends.includes('Maria'))
console.log(friends.includes(23))

if(friends.includes('Maria')){
    console.log(`you have a friend called ${friends[2]}`);
}

// Coding Challenge #2
// Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �

// const bills=[125,555,44];
// const tipValue1= 1.5;
// const tipValue2=2.0;

// if ((bills >= 100) || (bills <= 50)){
//     const total= console.log(bills * tipValue1);
//     return total;
// }
//     else
//     {
//         const total2= bills * tipValue2;
//         return total2;
//     }

const calcTip=function (bill) {
    return bill >= 50 && bill <= 300 ?
    bill * 0.15 :
    bill * 0.2;
}

const bills =[125,555,44];
const tips= [calcTip(bills[0]),
 calcTip(bills[1]),
calcTip(bills[2])];
const totals= [bills[0] + tips[0] + bills[1] + tips[1] + bills[2]+ tips[2]];
console.log(bills, tips, totals);


// const pipe={
//     firstName: 'Pipe',
//     lastName:'Coder',
//     age: 2023-1980,
//     job: 'student',
//     friends: ['imaginery', 'none']
// }

// console.log(pipe.firstName);
// console.log(pipe['lastName']);

// const nameKey = 'Name';
// console.log(pipe['first'+nameKey]);
// console.log(pipe['last'+nameKey]);

// const interestedIn= prompt('What do you want to know about Pipe? Choose between firstName, lastName, age, job and friends');

// if (pipe[interestedIn]) {
// console.log(pipe[interestedIn]);
// } else{
//     console.log('wrong, Choose between firstName, lastName, age, job and friends');
// }

// pipe.location='Laukaa';
// pipe ['linkedin']='@somethingLinkedin';
// console.log(pipe);

// console.log(`${pipe.firstName} has ${pipe.friends.length} friends and his best friend is called ${pipe.friends[0]}`)

const pipe={
    firstName: 'Pipe',
    lastName:'Coder',
    birthYear: 1980,
    job: 'student',
    friends: ['imaginery', 'none'],
    hasDriversLicense: true,

    calcAge: function () {
        // console.log(this);
        this.age= 2023 - this.birthYear;
        return this.age;
},

getSummary: function () {

    return `${this.firstName} is a ${this.calcAge()} -year old ${this.job}, 
    and she has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence.`
}
};


console.log(pipe.calcAge());
console.log(pipe.age);
// console.log(pipe['calcAge'](1980));
console.log(pipe.getSummary());