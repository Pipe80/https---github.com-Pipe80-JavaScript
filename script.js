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

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark= {
    fullname: 'Mark Miller',
    mass: 78,
    height:1.69,
    calcBMI: function() {
    this.bmi=this.mass / this.height ** 2;
    return this.bmi;
    }
    }
    const john= {
        fullname: 'John Smith',
        mass: 92,
        height:1.95,
        calcBMI: function() {
            this.bmi=this.mass / this.height ** 2;
            return this.bmi;
            }
        }
    mark.calcBMI();
    john.calcBMI();
    console.log(mark.bmi);
    console.log(john.bmi);
    
    if(mark.bmi > john.bmi){
        console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`);
    }
    else if (john.bmi >mark.bmi)
    {
        console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`);
    }

    // console.log('Lifting weights repetition 1 🤷‍♀️');

for(let rep =1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🤷‍♀️`);
}
//tämä oli jo todella tuttua, ja on hauska huomata, että osaa muokata koodia ja ymmärtää koodin toiminnan.

const pipe =[
'Pirjo',
 'Mure', 
 2023-1980,
  'junior coder', 
  ['Piia','Kirsi','Jukka'],
];

const types=[];

for (let i =0; i < pipe.length; i++){
    console.log(pipe[i], typeof pipe[i]);
    // types[i]= typeof pipe[i];
    types.push( typeof pipe[i] );
}
console.log(types);

const years = [1990, 2008, 1950,2020];
const ages = [];

for (let i=[0]; i < years.length; i++) {
    ages.push (2023 - years[i]);}
    console.log(ages);          

    console.log('----Only strings-----');
    for (let i = 0; i < pipe.length; i++){
        if (typeof pipe[i] !== 'string') continue;

        console.log(pipe[i], typeof pipe[i]);
    }
    
    console.log('---BREAK with number-----');
    for (let i = 0; i < pipe.length; i++){
        if (typeof pipe[i] === 'number') break;
        
        console.log(pipe[i], typeof pipe[i]);
    }
    
    const pipe =[
        'Pirjo',
         'Mure', 
         2023-1980,
          'junior coder', 
          ['Piia','Kirsi','Jukka'],
        ];
        
        for (let i= pipe.length -1; i >= 0; i--) {
            console.log(i, pipe[i]);
        }
    
        //hauska huomata kuinka tietyt asiat mitä koulussa on opeteltu ja joista ei ole silloin ymmärtänyt yhtään
        //mitään, johtuen ihan siitä syystä, ettei asioita ole selitetty riittvän perusteellisesti. Tässä 
        //kurssissa perusteita käydään läpi HUOLELLISEMMIN ja SELITETÄÄN jokainen yksityiskohta tarkasti.
        //Koulun materiaalit monta kertaa tyyliä: laske yhteen 1+1 ja seuraavaksi laske teoreettinen maapallon pyörimisnopeus samalla kaavalla.
        //eli, hypitään rajusti asioiden yli ja käytetään ikivanhoja tehtäviä, mihin kaikki ratkaisut löytyvät netistä.
        // en tiedä kuinka moni oikeasti oppii copy paste metodista. Se on enemmänkin itsensä ampumista jalkaan (dragon age).
        //ja olen itse tiedostanut viimeaikoina, että nimenomaan haluan oppia. PERUSTEET. KUNNOLLA.
        //ja on kiva huomata, että koodin lukeminen tuntuu luontevammalta ja ymmärtää sitä. Se, että osaisi itse tehdä alusta loppuun, niin vaatii...paljon.
        //Harjoittelua harjoittelun perään, koodin kirjoittamista ja toistamista. Sitä harjoittelen parhaillaan.
    
    for (let harjoitus = 1; harjoitus < 4; harjoitus++) 
    {
    console.log(`----harjoitus alkaa---- ${harjoitus}`);
    
    for(let nosto =1; nosto < 6; nosto++) 
    {
        console.log(`Painojen nostaminen ${nosto} kertaa 🤷‍♀️`)
    }}

    // for (let toisto =1; toisto <= 10; toisto++){
// console.log(`Nostetaan painoja hiiops ${toisto} kertaa! 🤷‍♀️`)

// };

let toisto =1;
while (toisto <= 10){

console.log(`Nostetaan painoja hiiops ${toisto} kertaa! 🤷‍♀️`);
toisto++;

}

let noppa =Math.trunc(Math.random()*6 +1);

while (noppa !== 6){
    console.log(`Heitit ${noppa}`);
    noppa= Math.trunc(Math.random() * 6 + 1);
    if(noppa === 6){
        console.log(`Looppi loppui`);
}}

// Coding Challenge #4
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips = [];
const totals= [];

const calcTip= function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {

const tip = calcTip(bills[i]);
tips.push(tip);
totals.push(tip+bills[i]);
}
console.log(` tässä laskut ${bills} ja tässä tipit ${tips}  ja yhteensä: ${totals}`);

const calcAverage= function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        // sum=sum + arr[i];
        sum += arr[i];
    }
   return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));