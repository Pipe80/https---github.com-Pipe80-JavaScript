// TÄLLÄ SIVULLA HARJOITTELEN TEHTÄVIÄ, JONKA JÄLKEEN SIIRRÄN NE SCRITP1.JS-TIEDOSTOON.
//TÄMÄ SIITÄ SYYSTÄ, ETTÄ PYSTYN TESTAAMAAN HARJOITUSTEN TOIMIVUUTTA.


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

    calcAge: function (birthYear) {
        return 2023 -birthYear;
}};

console.log(pipe.calcAge(1980));
console.log(pipe['calcAge'](1980));