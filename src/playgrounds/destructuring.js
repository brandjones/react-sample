
//
// Object Destructing
//


// const person = {
//
//   name: 'Brandon',
//   age: 27,
//   location:  {
//     city: 'Tampa',
//     temp: 79
//   }
// }
//
// const {name = 'Alien', age} = person;
//
// console.log(`${name} is ${age}.`);
//
//
// const {city, temp: temperature } = person.location;
//
// if(city && temperature) {
//   console.log(`Its ${temperature} in ${city}`);
// }

//
// const book = {
//   title: 'Ego',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
// const {name: publisherName = 'Self Published'} = book.publisher;
//
// console.log(publisherName);

//
// const address = ['1299 S Juniper Street', 'Tampa', 'Florida', 33611];
// const [street, city, state, zip] = address;
// console.log(street, city, state);


// const item = ['Coffee (hot)','$2.00', '$2.50', '$2.75'];
// const [coffee, ,medium] = item;
// console.log(`A medium ${coffee} costs ${medium}`);
