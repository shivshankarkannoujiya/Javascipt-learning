// TODO: Given a String 
//! As there is (str.length) -> we want to create (str.truelength) which does not count spaces
//! Want to add default method with all string  

// let myName = 'Abhishek    ';
// console.log(myName.length);
// console.log(myName.trueLength());

//! Don't want 
// console.log(myName.trim().length);



let heros = ["thor","spiderman"]

let heroPower = {

    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhishek = function(){
    console.log(`Abhishek is present in all object`);
}