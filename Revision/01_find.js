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
// console.log(person);


// TODO: Handle Undefined
// const number = [1,2,4,6,9,3];
// const getNumGreaterThanTen = number.find(num => num > 10)
// if (getNumGreaterThanTen === undefined) {
//     console.log(`No Element Found !`);
// }else{
//     console.log(`Ans is : ${getNumGreaterThanTen}`);
    
// }


// TODO: Using thisArgs
const array = [1,2,3,4];

const Obj = {

    threshold : 3,
    isGreaterThanThreshold : function(element){
        return element > this.threshold
    }
}

const found = array.find(function(element){
    return this.isGreaterThanThreshold(element)
},Obj)

// console.log(found);
