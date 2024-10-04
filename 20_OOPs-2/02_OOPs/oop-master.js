let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

// console.log(car.start())
// ! We can not create copies of car
// ? We solved this by Constructor Function 


function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20)
let raj = new Person("raj Singh", 22)

// console.log(john.name)
// console.log(raj.name)


//TODO: Prototypal Chain 
function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes sound`
}

// Array 
Array.prototype.Abhishek = function(){
    return `Custom method ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.Abhishek())

let myNewArray = [1, 2, 3, 4, 5]
// console.log(myNewArray.Abhishek())





//TODO:  Class 
class Vehicles {

    constructor(make, model){
        this.make = make,
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make} `
    }
}


//TODO: Inheritance
class Car extends Vehicles {

    drive(){
        return `${this.make} : This is an Inheritance Example`
    }
}

let myCar = new Car("Toyota", "Corolla")
// console.log(myCar.start())
// console.log(myCar.drive())

