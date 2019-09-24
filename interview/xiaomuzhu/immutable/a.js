const person = {player: {name: 'Messi'}};
const person1 = person;
console.log(person, person1);
//[ { name: 'Messi' } ] [ { name: 'Messi' } ]
person.player.name = 'Kane';
console.log(person, person1);