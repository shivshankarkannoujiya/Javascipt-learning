

// ? Impure Function
let name = "Jack"
function greet(){
    console.log(`Hello, ${name}!`)
}

// greet()

// name = 'Raj'
// greet()


// ? Pure Function
function greetTow(name){
    console.log(`Hello ${name}`)
}

greet("Jack")
greet("Raj")