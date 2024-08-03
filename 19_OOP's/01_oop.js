
//TODO: Object literal : Nothing But creating an Object

const user = {

    username : "Abhishek",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //! {} : Global context abhi empty hai


// TODO: i Want to create new user 
// Again we have to write whole code as we written upper 
// but i want to create a structure so that no need to write whole code again and again 
// There Comes : [Constructor Function ]


// Ex:- 
// const promiseOne = new Promise();
// const date = new Date()
// const object = new Object()


//! new : Constructor Function 
//! New Context banane ke kaam ata hai  
//! it allow you to create multiple instances from a single Object Literal 


function User(username,loginCount,isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Wlcome ${this.username}`);
    }

    //Optional : Implicitly defined hota hai 
    return this;
}


// const userOne = User('Abhi',12, true);
// const userTwo = User('Abhishek',11,false);
//! userTwo : will overwrite the value 
//! console.log(userOne) : Ab userTwo me jo value hai wo print hoga
// console.log(userOne);


//! There Comes : new : Constructor function


// const userOne = new User('Abhi', 12, true);
// const userTwo = new User('Abhishek', 11, false)
//! Ab Overwrite nhi hoga both are [new User]
//! Dono ka different copy bnega
// console.log(userOne);
// console.log(userOne.constructor); //[Function: User] : Refrence to User
// console.log(userTwo);


// ++++++++++++++++++++++++++++++ Notes ++++++++++++++++++++++++++++++
// Jaise hi uses : {new}
// - Sabse pehale ek empty Object create hota hai : Instance Bolte hai 
// - Ek constructor function call hota hai due to new keyword
// - constructor function : jitne Arguments hai unko pack krta hai and humko de deta hai
// - Humko Sab mil jata hai



