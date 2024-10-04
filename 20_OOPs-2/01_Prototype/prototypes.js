let computer = { cpu: 12 } 
let lenovo = {
    screen: `HD`,
    __proto__: computer // get the property of computer
}
let tomHardware = {}

// console.log(`lonovo: `,lenovo.__proto__)



// TODO: Another way to do same things

let genericCar = { tyres: 4 }

let tesla = {
    driver: "AI"
}

//Access property of genericCar into tesla
Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla: `, tesla.tyres)
console.log(`tesla: `, Object.getPrototypeOf(tesla))

