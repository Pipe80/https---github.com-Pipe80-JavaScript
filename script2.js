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



