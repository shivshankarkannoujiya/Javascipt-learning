// TODO: Finding the Index of a Task in a To-Do List

const Tasks = [

    
    {
        id: 1,
        task:'Learn Javascript',
        completed: false,
    },

    {
        id: 2,
        task:'Goto Gym',
        completed: false,
    },

    {
        id: 3,
        task:'Buy groceries',
        completed: true,
    },

    {
        id: 4,
        task: 'Clean house',
        completed: false
    }

]

//! Let's say we want to find the index of the task with id 1
const taskIdTOFInd = 1
const taskIndex = Tasks.findIndex(task => task.id === taskIdTOFInd)
// console.log(taskIndex)


//! Use Case in Frontend (React-like Scenario)
// In a React-like scenario, you might use this index to update or remove the task:

if (taskIndex !== -1) {
    // Tasks[taskIndex].completed = true/false
    Tasks[taskIndex].completed = !Tasks[taskIndex].completed
}
// console.log(Tasks);




// TODO: Finding the Index of a Product in a Cart

const shoppingCart = [

    {productId: 101, productName: 'Laptop', quantity: 1},
    {productId: 102, productName: 'Smartphone', quantity: 2},
    {productId: 103, productName: 'Headphone', quantity: 1},
]

// Find the index of the product with productId 102
const productToFind = 102
const productIndex = shoppingCart.findIndex(product => product.productId === productToFind)
console.log(productIndex)


// ? Use Case in Backend
// * In a backend scenario, you might use this index to update the quantity of a product in the cart or to remove the product entirely:-

//! Increasing quantity by 1 
if (productIndex !== -1) {
    shoppingCart[productIndex].quantity +=1;
}
// console.log(shoppingCart);


//! Removing Product from shoppingCart
shoppingCart.splice(productIndex , 1)
// console.log(shoppingCart)


