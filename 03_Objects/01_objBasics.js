// singleton
// Object.create



// object literal
// const JsUser = {
//     name:"Abhishek",
//     "full name":"Abhishek Kanoujiya",
//     age : 20,
//     location : "Uttar Pradesh",
//     email : "abhi@google.com",
//     isLoggedIn : false,
//     lastLoggedInDays : ["Monday","Saturday"]
// }


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);


// const mySym = Symbol("Key1");
// const user = {
//     [mySym] : "myKeyOne",
// }

// console.log(user[mySym]);


// const JsUser = {
//     name:"Abhishek",
//     "full name":"Abhishek Kanoujiya",
//     age : 20,
//     location : "Uttar Pradesh",
//     email : "abhi@google.com",
//     isLoggedIn : false,
//     lastLoggedInDays : ["Monday","Saturday"]
// }

// Changing Value
// JsUser.email = "abhi@chatgpt.com";
// console.log(JsUser["email"]);


// Object.freeze(JsUser);
// JsUser.email = "abhi@openai.com";
// console.log(JsUser["email"]);


const JsUser = {
    username:"Abhishek",
    "full name":"Abhishek Kanoujiya",
    age : 20,
    location : "Uttar Pradesh",
    email : "abhi@google.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday","Saturday"]
}

JsUser.greeting = () => {
    console.log(`Hello Js User , ${this.username}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
