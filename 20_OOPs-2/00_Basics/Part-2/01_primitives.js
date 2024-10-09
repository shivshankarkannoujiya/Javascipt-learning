let balance = 120
let anotherBalance = new Number(120)

// console.log(balance)
// console.log(anotherBalance)
// console.log(anotherBalance.valueOf())

// ! important
// console.log(typeof balance) // Number(Primitive)
// console.log(typeof anotherBalance) // Object(Non-Primitive)


let isActive = true
let isReallyActive = new Boolean(true)

// console.log(typeof isActive) // Boolean
// console.log(typeof isReallyActive) // Object



// ! important
// null & undefined
let firstName
let middleName = undefined
let lastName = null
// console.log(firstName) // undefined
// console.log(middleName) // undefined
// console.log(lastName) // undefined


//! Most Important
// String

let myString = "hello"
let myStringOne = "hola"
let username = "Abhi"

// let oldGreet = myString + " " + "Abhishek"
// console.log(oldGreet)

let greetMessage = `Hello ${username} !`
// console.log(greetMessage)



let sm1 = Symbol()
let sm2 = Symbol()

let sm3 = Symbol("abhi")
let sm4 = Symbol("abhi")
// console.log(sm1 == sm2)
// console.log(sm3 == sm4)
// console.log(sm1)

