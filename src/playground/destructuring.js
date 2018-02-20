//Object destructuring
// const person = {
//     name: 'Vlad',
//     age: 28,
//     location: {
//         city: 'Vancouver',
//         temp: 1
//     }
// }
// const {name = 'Anonymous', age} = person
// console.log(`${name} is ${age}`)

// const {city, temp} = person.location;
// if(city && temp){
//     console.log(`Its ${temp} in ${city}`)
// }

// const book = {
//     Author: 'James Holinday',
//     location: 'Columbus',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = "self-published" } = book.publisher

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${street} ${city} ${state} ${zip}`)