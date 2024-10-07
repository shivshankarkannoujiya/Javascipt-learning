//TODO: Encapsulation

class BankAccount {

    #balance = 0

    deposite(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}


let account = new BankAccount()
// console.log(account.getBalance())


//TODO: Abstraction

class CoffeeMachine {

    start(){
        // call DB 
        // filter values
        return `Starting the machine...`
    }

    brewCoffee(){
        // complex Calculation
        return `Brewing Coffee`
    }

    pressStartButton(){
        let msgOne =  this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne}\n${msgTwo}`
    }

}


let myMachine = new CoffeeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
// console.log(myMachine.pressStartButton())


//TODO: Polymorphism

class Bird {

    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird {

    fly(){
        return `Penguin Can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly())
// console.log(penguin.fly())


//TODO: Static Method
// Only class can access: Static Method/propertues
// No need to create Objects

class Calculator {

    static add(a, b){
        return a + b
    }
}

//! Can not Access  
// let miniCalc = new Calculator()
// console.log(miniCalc.add(1,2))

//! Accessing Using ClassName
// console.log(Calculator.add(2, 3))


// TODO: getters and setters

class Employee {

    #salary

    constructor(name, salary){

        if (salary < 0) {
            throw new Error("Salary can't be negative")
        }

        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see the salary`
    }

    set salary(value){
        if (value < 0) {
            console.error("Invalid salary")
        }else{
            this._salary = value
        }
    }
}

let emp = new Employee("Alice", -50000)
console.log(emp._salary)
emp.salary = 5000
