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