let obj = {}

// console.log(obj) // {}
// console.log(typeof obj) // Object


const username = {
    firstname: "Abhi",
    isLoggedIn: true
}

// TODO: Study Again
/*
Here we are not changing the Memory Refrences 
The Memory Refrence Still the Same
! But all the Values are Mutable
*/
username.firstname = "Mr. A"
username.lastname = "Kannoujiya"
// console.log(username.firstname)
// console.log(username.lastname)
// console.log(username)

//! Another way to Access
//! Important
const user = {
    "first name": "Abhishek"
}
// console.log(user["first name"])


let today = new Date()
// console.log(today.getDate())



// TODO: Array
let anotherUser = ["Abhi", true]
console.log(anotherUser[0])
console.log(anotherUser[1])
