/**
 * ? arr.find()
 * ? arr.findIindex()
 * ? req.body
 * ? req.parama
 */


//TODO: arr.find()
// Used to Search an Array for an Specific Element 
// Returns : Value of first element in the Array that satisfy provided testing function 
// if no element satisfy the testing function return : undefined

const arr = [1,3,5,8,7,6];
const evenNumber = arr.find(element => element % 2 == 0)
// console.log(`First Even Number is : ${evenNumber}`);


//TODO: find a person by their name
const peoples = [
    {
        name:"Alice",
        age: 30,
    },
    {
        name:"Bob",
        age: 20,
    },
    {
        name:"Tinku",
        age: 10,
    },
]

const person = peoples.find(p => p.name === 'Bob')
console.log(person);
