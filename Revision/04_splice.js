const fruit = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']

// TODO: Removing Elements
const removedFruits = fruit.splice(1,2)
// Remove 2 Element Staring from the index 1
// console.log(`Removed Fruits : ${removedFruits}`);
// console.log(`Left Fruits in Arr : ${fruit}`);



//TODO: Adding Elements
const vegetables = ['Carrot', 'Potato', 'Tomato']
// Add 'Broccoli' and 'Spinach' at index 1
// vegetables.splice(1,0,'Broccoli','Spinach')
// console.log(vegetables);


//TODO: Replacing Elements
const animals = ['Cat', 'Dog', 'Elephant', 'Giraffe']
// Replace 1 element at index 2 with 'Lion'
// animals.splice(2,1,'Lion')
// console.log(animals);


// TODO: Managing a Shopping Cart

let shoppingCart = ['Laptop', 'Smartphone', 'Headphones']

// 1. Removing an Item: Smartphone
const removedItem = shoppingCart.splice(1,1)
console.log(shoppingCart)
console.log(removedItem);


// 2. Adding an Item: 'Tablet' at index 1
shoppingCart.splice(1,0,'Tablet')
console.log(shoppingCart);

// 3. Replacing an item: ''Tablet' with 'Smartwatch'
shoppingCart.splice(1,1,'Smartwatch')
console.log(shoppingCart);








