//TODO: Functional constructor and Errors


// Blueprint
function Person(name, age){
    this.name = name
    this.age = age 
}


// Blueprint
function Car(make, model){
    this.make = make
    this.model = model
}

// Creating Objects

let myCar = new Car("Toyoto", "Camry")
// console.log(`myCar: `, myCar)

let myNewCar = new Car("Tata", "Safari")
// console.log(`myNewCar: `, myNewCar)




// Blueprint
function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}

// Object
let lemonTea = new Tea("lemon Tea")
// console.log(lemonTea)
// console.log(lemonTea.describe())


// TODO: Constructor function with prototype

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}


let dog = new Animal("Dog")
// console.log(dog)
// console.log(dog.sound())

let cat = new Animal("cat")
// console.log(cat.sound())


// TODO: Error

function Drink(drinkName){

    if (!new.target) {
        throw new Error("Drink must be called with new keyword")
    }
    this.drinkName = drinkName
}


let tea = new Drink("tea")
let coffee = Drink("coffee")
