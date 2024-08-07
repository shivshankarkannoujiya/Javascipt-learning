# Arr.find()

- Used to Search an Array for an Specific Element 
- Returns : Value of first element in the Array that satisfy provided testing function 
- if no element satisfy the testing function return : `undefined`

## Syntax
```javascript
    arr.find(callback(element, index, array),thisArgs)
```

#### Callback

- A function to execute on each value in the array
- Element: Current Element being processed in the array
- Index (opyional): Index of the current element being processed in the array
- Array (opyional): Arr jiske liye `find()` call hua hai
-thisArgs (opyional): An Object to use as 'this' inside the callback function

## How it Works
- `find()` call the callback function once for each element of the Array, in ascending order
- it returns the first element for which the callback returns a truthy calue 
- if no such element is found, it returns `undefined`


# Example

#### Let's start with a simple example where `we want to find the first even number in an array.`
```javascript
const arr = [1,3,5,8,7,6];
const evenNumber = arr.find(element => element % 2 == 0)
console.log(`First Even Number is : ${evenNumber}`);
```

## Example with Objects
#### `find()` is especially useful when working with arrays of objects. Let's say we have an array of objects representing people and `we want to find a person by their name.`

```javascript

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

```