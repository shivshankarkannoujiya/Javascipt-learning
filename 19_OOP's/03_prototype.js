// TODO: Given a String 
//! As there is (str.length) -> we want to create (str.truelength()) which does not count spaces
//! Count Only Letters 
//! Want to add default method with all string  

// let myName = 'Abhishek    ';
// console.log(myName.length);
// console.log(myName.trueLength());

//! Don't want 
// console.log(myName.trim().length);


const myHeros = ["thor","spiderman"]

const heroPower = {

    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


//! Kya hamare pas koi aisa method Available hai : heroPower.abhi() : Kar saku
// Available to hai nhi 
//? Can we Inject : YES
//* Agar hum Object ke andar laga denge then [array, function, string] sabhi Object se hi  hokar jate hai sabhi ke pas present hoga 


Object.prototype.abhishek = function(){
    console.log(`abhishek is present in all Objects`);
}


/*
!heroPower : is an Object we defined 
*Techinically iske pass ab :: heroPower.abhishek() :: hona chahiye
? Array bhi Object se hokar jata hai Uske pass bhi present hona chahiye 
let's see,
*/

//heroPower.abhishek() //Present hai 
//myHeros.abhishek() // Here, also present in Array


//TODO: Agar Array ke Andar Property Inject kre then kya wo Property Object ke pass hoga  

Array.prototype.heyAbhishek = function(){
    console.log(`Abhishek says hello from Array`);
}

// heroPower.heyAbhishek(); //Not present
// myHeros.heyAbhishek(); //Present



//! ++++++++++++++++++++++++++++++ Inheritance ++++++++++++++++++++++++++++++++

const User = {
    name: "Raj",
    email: "raj@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__ : TeachingSupport
 //! Now, ::TASupport:: can access all property of :: TeachingSupport
}

// We can also define outside 
//! Now ::Teacher:: can Access all property of ::User::
Teacher.__proto__ = User


// Modern Syntax
//! ::TeachingSupport:: Can Access Property of ::Teacher::
Object.setPrototypeOf(TeachingSupport,Teacher)



//! Problem Solution 
let anotherUsername = "Abhishek     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength() 
"rock".trueLength()
"iceTea".trueLength()
